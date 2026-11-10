import { type InputHTMLAttributes } from 'react'

type FieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  inputClassName?: string
}

export default function Field(props: FieldProps) {
  const { className, label, inputClassName, ...inputProps } = props
  return (
    <label className={`flex flex-col gap-1 ${className ?? ''}`}>
      <span className="font-medium">{label}</span>
      <input
        className={`rounded border border-slate-300 bg-transparent px-3 py-2 focus:border-sky-500 focus:outline-none dark:border-slate-600 ${inputClassName ?? ''}`}
        {...inputProps}
      />
    </label>
  )
}
