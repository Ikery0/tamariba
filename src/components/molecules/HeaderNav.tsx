import { NextPage } from "next";
import Link from "next/link";

type NavItems = {
  text: string,
  link: string
}

const NavItemsArray: NavItems[] = [
  { text: 'TOP', link: '/' },
]

const HeaderNav: NextPage = () => {

  return (
    <nav className="absolute left-1/2 -translate-x-1/2 bg-gray-700 rounded-full h-14 shadow-md dark:bg-gray-200">
      <ul className="hidden h-full justify-between items-center px-3 lg:flex">
        {NavItemsArray.map(item => (
            <li key={item.link} className="p-2">
              <Link href={item.link}>
                <a className="text-white inline-block p-2 text-opacity-90 dark:text-gray-700 dark:text-opacity-90">{item.text}</a>
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  )
}

export default HeaderNav