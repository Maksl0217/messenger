import { FC } from "react"
import Link from "next/link"
import clsx from "clsx"

interface IMobileItem {
  href: string
  icon: any
  active?: boolean
  onClick?: () => void
}

const MobileItem: FC<IMobileItem> = ({ href, icon: Icon, active, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      return onClick()
    }
  }

  return (
    <Link
      onClick={handleClick}
      href={href}
      className={clsx(
        "group flex gap-x-3 text-sm leading-6 font-semibold w-full justify-center p-4 text-sky-500 hover:text-sky-900 hover:bg-sky-100",
        active && "bg-gray-200 text-sky-900"
      )}
    >
      <Icon className=" h-6 w-6" />
    </Link>
  )
}

export default MobileItem
