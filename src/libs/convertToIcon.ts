import { NextPage } from "next";
import { ReactNode } from "react";
import { IconReact } from "../components/atoms/icons/IconReact";

export const convertToIcon: NextPage = (category: string) => {
  switch(category) {
    case 'React' :
      return <IconReact />;
      break;
    case 'JavaScript' :
      console.log('js');
      break;
    default:
      return ''
  }
}