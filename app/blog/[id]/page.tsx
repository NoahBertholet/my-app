import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPost } from '@/lib/blog'

type BlogPostPageProps = {
  params: Promise<{ id: string }>
}

export default async function BlogPostPage(props: BlogPostPageProps) {
  const id = Number((await props.params).id)
  const post = await getPost(id)
  if (!post) notFound()

  return (
    <article>
      <Link href="/blog" className="text-sm text-sky-600 hover:underline">
        Retour au blog
      </Link>
      <h1 className="mt-4 text-3xl font-bold">{post.title}</h1>
      <p className="text-sm text-slate-500">
        Publié le {post.createdAt.toLocaleDateString('fr-BE')}
      </p>
      <div className="mt-6 whitespace-pre-line">{post.content}</div>
      <Link
        href={`/blog/edit/${post.id}`}
        className="mt-8 inline-block rounded border border-slate-300 px-4 py-2 font-medium hover:bg-slate-100 dark:border-slate-600 dark:hover:bg-slate-800"
      >
        Modifier l’article
      </Link>
    </article>
  )
}
