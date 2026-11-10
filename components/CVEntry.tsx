import { type ReactNode } from 'react'

type CVEntryProps = {
  title: string
  employer: string
  date: string
  children?: ReactNode
}

export default function CVEntry(props: CVEntryProps) {
  return (
    <div className="border-l-4 border-slate-800 py-2 pl-4">
      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between">
        <h3 className="text-lg font-semibold">
          {props.title}, {props.employer}
        </h3>
        <p className="text-sm text-slate-500">{props.date}</p>
      </div>
      <div className="mt-1">{props.children}</div>
    </div>
  )
}
