import { NextPage } from "next";
import Link from "next/link";
import type { Blog } from "../../types/blog";

type Props = {
  blog: Blog
}

const ArchiveBlock: NextPage<Props> = ({ blog }) => {
  return (
    <li>
      <Link href={`blog/${blog.id}`}>
        <a>
          <span>{blog.category.name}</span>
          <h3>{blog.title}</h3>
        </a>
      </Link>
    </li>
  )
}

export default ArchiveBlock