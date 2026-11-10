import Button from '@/components/Button'
import Field from '@/components/Field'

// Interface seulement : la connexion sera branchée au cours "Sessions"
export default function LoginPage() {
  return (
    <div className="mx-auto max-w-sm">
      <h1 className="text-3xl font-bold">Connexion</h1>
      <form className="mt-6 flex flex-col gap-4">
        <Field label="Identifiant" name="login" autoComplete="username" />
        <Field
          label="Mot de passe"
          name="password"
          type="password"
          autoComplete="current-password"
        />
        <Button type="button">Se connecter</Button>
      </form>
    </div>
  )
}
