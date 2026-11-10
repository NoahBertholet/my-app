import { type ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'danger'
}

const variants = {
  primary: 'bg-slate-800 text-white hover:bg-slate-700 dark:bg-sky-600 dark:hover:bg-sky-500',
  danger: 'bg-red-600 text-white hover:bg-red-500',
}

export default function Button(props: ButtonProps) {
  const { className, variant = 'primary', ...buttonProps } = props
  return (
    <button
      className={`rounded px-4 py-2 font-medium disabled:opacity-50 ${variants[variant]} ${className ?? ''}`}
      {...buttonProps}
    />
  )
}
