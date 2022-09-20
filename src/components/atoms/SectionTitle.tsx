import { NextPage } from "next"
import Link from "next/link"

type Props = {
  text: string
}

const SectionTitle: NextPage<Props> = ({ text }) => {
  
  return (
      <h2 className="lg:container text-6xl uppercase text-opacity-90 english">{text}</h2>
  )
}

export default SectionTitle