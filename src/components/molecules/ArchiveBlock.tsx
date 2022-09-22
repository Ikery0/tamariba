import { NextPage } from "next";
import Link from "next/link";
import type { Blog } from "../../types/blog";
import { makeExcerpt } from "../../libs/makeExcerpt"

type Props = {
  blog: Blog
}

const ArchiveBlock: NextPage<Props> = ({ blog }) => {
  return (
    <li className="rounded-lg shadow-lg">
      <Link href={`blog/${blog.id}`}>
        <a className="block p-3 lg:p-6">
          <span>{blog.category.name}</span>
          <h3 className="text-lg font-bold mt-6">{blog.title}</h3>
          <p className="mt-4">{makeExcerpt(blog.excerpt, 50)}</p>
        </a>
      </Link>
    </li>
  )
}

export default ArchiveBlock