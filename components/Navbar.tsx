import Link from 'next/link'
import { SITE_NAME } from '@/lib/site'

const links = [
  { href: '/', label: 'Accueil' },
  { href: '/cv', label: 'CV' },
  { href: '/blog', label: 'Blog' },
  { href: '/login', label: 'Connexion' },
]

export default function Navbar() {
  return (
    <nav className="bg-slate-800 text-white">
      <div className="mx-auto flex max-w-4xl flex-col gap-2 p-4 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="text-xl font-bold">
          {SITE_NAME}
        </Link>
        <ul className="flex flex-col gap-2 md:flex-row md:gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:text-sky-300">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}