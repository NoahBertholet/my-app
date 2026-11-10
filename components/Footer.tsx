import { SITE_NAME } from '@/lib/site'

export default async function Footer() {
  // Avec cacheComponents, new Date() doit être mis en cache (sinon le build échoue)
  'use cache'
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 p-4 text-center text-sm text-slate-500">
      <p>
        © {year} {SITE_NAME}. Tous droits réservés.
      </p>
    </footer>
  )
}
