import { NextPage } from "next"
import Link from "next/link"

type Props = {
  text: string
}

const SectionTitle: NextPage<Props> = ({ text }) => {
  
  return (
      <h2 className="lg:container text-3xl md:text-6xl uppercase dark:text-gray-50 english">{text}</h2>
  )
}

export default SectionTitle