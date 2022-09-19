import { NextPage } from "next";

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
        id="spMenu"
        className={`${visibility} ${opacity} bg-gray-200 z-10 duration-150`}
        aria-hidden={hidden}
      >
        sp menu
      </div>
    </>
  )
}

export default SpNav