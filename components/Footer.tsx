import { SITE_NAME } from '@/lib/site'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 p-4 text-center text-sm text-slate-500">
      <p>
        © {year} {SITE_NAME}. Tous droits réservés.
      </p>
    </footer>
  )
}
