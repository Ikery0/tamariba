import { NextPage } from "next";
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

const SpNav: NextPage<Props> = ({ isOpen }) => {
  const hidden: boolean = !isOpen

  const classObj: ClassObj = isOpen ? openObj : closeObj
  const {visibility, opacity} = classObj

  return (
    <>
      <div
        id="spNav"
        className={`${visibility} ${opacity} fixed top-0 left-0 w-full h-screen bg-gray-200 z-10 duration-150`}
        aria-hidden={hidden}
      >
        <Container 
          size={1024}
        >
        sp menu
        </Container>
      </div>
    </>
  )
}

export default SpNav