import { NextPage } from "next";
import { ReactNode } from "react";

type Props = {
  size: 1024 | 1280;
  children: ReactNode | JSX.Element
}

const Container: NextPage<Props> = ({ size, children }) => {
  let maxWidthClass: string;
  if (size === 1024) {
    maxWidthClass = 'max-w-5xl'
  }
  if (size === 1280) {
    maxWidthClass = 'max-w-6xl'
  }

  return (
    <div className={`${maxWidthClass} w-full px-4 sm:px-6 lg:px-12 m-auto`}>
      {children}
    </div>
  )
}

export default Container