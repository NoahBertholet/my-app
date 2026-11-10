import { type TextareaHTMLAttributes } from 'react'

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string
  textareaClassName?: string
}

export default function TextArea(props: TextAreaProps) {
  const { className, label, textareaClassName, ...textareaProps } = props
  return (
    <label className={`flex flex-col gap-1 ${className ?? ''}`}>
      <span className="font-medium">{label}</span>
      <textarea
        className={`min-h-48 rounded border border-slate-300 bg-transparent px-3 py-2 focus:border-sky-500 focus:outline-none dark:border-slate-600 ${textareaClassName ?? ''}`}
        {...textareaProps}
      />
    </label>
  )
}
