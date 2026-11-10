import { notFound } from 'next/navigation'
import Button from '@/components/Button'
import Field from '@/components/Field'
import TextArea from '@/components/TextArea'
import { editPost, getPost } from '@/lib/blog'

type EditPostPageProps = {
  params: Promise<{ id: string }>
}

export default async function EditPostPage(props: EditPostPageProps) {
  const id = Number((await props.params).id)
  const post = await getPost(id)
  if (!post) notFound()

  return (
    <>
      <h1 className="text-3xl font-bold">Modifier l’article</h1>
      <form action={editPost} className="mt-6 flex flex-col gap-4">
        <input type="hidden" name="id" value={post.id} />
        <Field label="Titre" name="title" defaultValue={post.title} required />
        <TextArea
          label="Contenu"
          name="content"
          defaultValue={post.content}
          required
        />
        <Button className="self-start">Enregistrer</Button>
      </form>
    </>
  )
}
