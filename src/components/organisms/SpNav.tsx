import { NextPage } from "next";
import Link from "next/link";
import { useRecoilValue } from "recoil";
import { themeState } from "../../libs/theme";
import { IconArrow } from "../atoms/icons/IconArrow";
import Container from "../templates/Container";

type Props = {
  isOpen: boolean
}

type ClassObj = {
  visibility: 'visible' | 'invisible'
  opacity: 'opacity-100' | 'opacity-0'
}

const openObj: ClassObj = {
  visibility: 'visible',
  opacity: 'opacity-100'
}

const closeObj: ClassObj = {
  visibility: 'invisible',
  opacity: 'opacity-0'
}

const menu = [
  {text: 'top', link: '/'},
]

const SpNav: NextPage<Props> = ({ isOpen }) => {
  const hidden: boolean = !isOpen
  const classObj: ClassObj = isOpen ? openObj : closeObj
  const { visibility, opacity } = classObj

  const theme = useRecoilValue(themeState);

  return (
    <>
      <div
        id="spNav"
        className={`${visibility} ${opacity} fixed top-0 left-0 w-full h-screen bg-gray-200 z-10 duration-300 dark:bg-gray-700`}
        aria-hidden={hidden}
        aria-modal='true'
        role='dialog'
      >
        <div className="mt-20">
          <Container
            size={1024}
          >
            <nav>
              <ul>
                {
                  menu.map((item) => (
                    <li key="item" className="border-b border-gray-700 dark:border-gray-200">
                      <Link href={item.link}>
                        <a className="flex justify-between items-center py-2 pr-2 uppercase">
                          <span>{item.text}</span>
                          <span>
                            <IconArrow theme={theme} />
                          </span>
                        </a>
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </nav>
          </Container>
        </div>
      </div>
    </>
  )
}

export default SpNav