import Button from '@/components/Button'
import Field from '@/components/Field'
import TextArea from '@/components/TextArea'
import { createPost } from '@/lib/blog'

export default function NewPostPage() {
  return (
    <>
      <h1 className="text-3xl font-bold">Nouvel article</h1>
      <form action={createPost} className="mt-6 flex flex-col gap-4">
        <Field label="Titre" name="title" required />
        <TextArea label="Contenu" name="content" required />
        <Button className="self-start">Publier</Button>
      </form>
    </>
  )
}
