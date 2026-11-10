import Link from 'next/link'
import Button from '@/components/Button'
import { deletePost, getPosts } from '@/lib/blog'

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h1 className="text-3xl font-bold">Blog</h1>
        <Link
          href="/blog/new"
          className="self-start rounded bg-slate-800 px-4 py-2 font-medium text-white hover:bg-slate-700 dark:bg-sky-600 dark:hover:bg-sky-500"
        >
          Écrire un article
        </Link>
      </div>

      {posts.length === 0 ? (
        <p className="mt-8 text-slate-500">
          Aucun article pour l’instant. Écris le premier !
        </p>
      ) : (
        <ul className="mt-8 flex flex-col gap-6">
          {posts.map((post) => (
            <li
              key={post.id}
              className="border-b border-slate-200 pb-6 dark:border-slate-700"
            >
              <Link href={`/blog/${post.id}`} className="hover:text-sky-600">
                <h2 className="text-xl font-semibold">{post.title}</h2>
              </Link>
              <p className="text-sm text-slate-500">
                {post.createdAt.toLocaleDateString('fr-BE')}
              </p>
              <p className="mt-2 line-clamp-2">{post.content}</p>
              <div className="mt-3 flex gap-3">
                <Link
                  href={`/blog/edit/${post.id}`}
                  className="rounded border border-slate-300 px-4 py-2 font-medium hover:bg-slate-100 dark:border-slate-600 dark:hover:bg-slate-800"
                >
                  Modifier
                </Link>
                <form action={deletePost.bind(null, post.id)}>
                  <Button variant="danger">Supprimer</Button>
                </form>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}
