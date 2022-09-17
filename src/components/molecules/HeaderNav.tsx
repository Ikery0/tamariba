import { NextPage } from "next";
import Link from "next/link";

type NavItems = {
  text: string,
  link: string
}

const NavItemsArray: NavItems[] = [
  { text: 'TOP', link: '/' },
  { text: 'JS', link: '/javascript' },
  { text: 'TS', link: '/typescript' },
  { text: 'REACT', link: '/react' },
  { text: 'Next.js', link: '/nextjs' },
]

const HeaderNav: NextPage = () => {

  return (
    <nav className="bg-gray-700 rounded-full h-14 shadow-md dark:bg-gray-200">
      <ul className="hidden h-full justify-between items-center px-3 lg:flex">
        {NavItemsArray.map(item => (
            <li key={item.link} className="p-2">
              <Link href={item.link}>
                <a className="font-bold text-white text-opacity-90 duration-300 hover:opacity-70
                dark:text-gray-700 dark:text-opacity-90">{item.text}</a>
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  )
}

export default HeaderNav