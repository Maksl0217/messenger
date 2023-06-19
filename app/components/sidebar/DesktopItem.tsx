import clsx from "clsx"
import Link from "next/link"
import { FC } from "react"

interface IDesktopItem {
  label: string
  icon: any
  href: string
  onClick?: () => void
  active?: boolean
}

const DesktopItem: FC<IDesktopItem> = ({
  label,
  icon: Icon,
  href,
  onClick,
  active,
}) => {
  const handleClick = () => {
    if (onClick) {
      return onClick()
    }
  }

  return (
    <li onClick={handleClick} key={label}>
      <Link
        href={href}
        className={clsx(
          "group flex gap-x-3 rounded-md p-3 text-sm leading-6 font-semibold text-sky-500 hover:text-sky-900 hover:bg-sky-100",
          active && "bg-gray-200  text-sky-900"
        )}
      >
        <Icon className="h-6 w-6 shrink-0" />
        <span className=" sr-only">{label}</span>
      </Link>
    </li>
  )
}

export default DesktopItem
