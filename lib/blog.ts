'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { connection } from 'next/server'

// Pour l'instant, les articles sont stockés en mémoire (ils disparaissent
// au redémarrage du serveur). Au cours "Database", on remplacera ce tableau
// par des requêtes Drizzle vers PostgreSQL.
type Post = {
  id: number
  title: string
  content: string
  createdAt: Date
}

const posts: Post[] = []
let nextId = 1

// Toujours valider les données qui viennent d'un formulaire
function readPostForm(form: FormData) {
  const title = String(form.get('title') ?? '').trim()
  const content = String(form.get('content') ?? '').trim()
  if (!title || !content) {
    throw new Error('Le titre et le contenu sont obligatoires.')
  }
  return { title, content }
}

export async function getPosts() {
  // Les données changent à chaque requête : on empêche Next.js
  // de les figer au moment du build (cacheComponents est activé)
  await connection()
  return [...posts].reverse() // les plus récents d'abord
}

export async function getPost(id: number) {
  await connection()
  return posts.find((post) => post.id === id) ?? null
}

export async function createPost(form: FormData) {
  const post = { id: nextId++, ...readPostForm(form), createdAt: new Date() }
  posts.push(post)
  revalidatePath('/blog')
  redirect(`/blog/${post.id}`)
}

export async function editPost(form: FormData) {
  const id = Number(form.get('id'))
  const post = posts.find((p) => p.id === id)
  if (!post) throw new Error('Article introuvable.')
  Object.assign(post, readPostForm(form))
  revalidatePath('/blog')
  redirect(`/blog/${id}`)
}

export async function deletePost(id: number) {
  const index = posts.findIndex((post) => post.id === id)
  if (index !== -1) posts.splice(index, 1)
  revalidatePath('/blog')
  redirect('/blog')
}
