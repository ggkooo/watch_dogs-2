import { MaterialIcon } from '../MaterialIcon'

type SectionHeadingProps = {
  icon: string
  title: string
  className?: string
}

export function SectionHeading({ icon, title, className = 'mb-2' }: SectionHeadingProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`.trim()}>
      <MaterialIcon name={icon} className="text-primary" />
      <h2 className="font-display text-xl font-bold uppercase italic tracking-wider sm:text-2xl">{title}</h2>
    </div>
  )
}
