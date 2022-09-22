import { NextPage } from "next";
import IconReact from "../atoms/icons/IconReact"
import IconJs from "./icons/IconJs";
import IconNext from "./icons/IconNext";
import IconTs from "./icons/IconTs";

type Props = {
  category: string
}

const ConvertToIcon: NextPage<Props> = ({category}) => {
  switch(category) {
    case 'React' :
      return <IconReact />
      break
    case 'JavaScript' :
      return <IconJs />
      break
    case 'TypeScript' :
      return <IconTs />
      break
    case 'Next.js' :
      return <IconNext />
      break
    default:
      return <></>
  }
}

export default ConvertToIcon