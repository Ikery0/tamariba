import { NextPage } from "next";
import Link from "next/link";
import type { Blog } from "../../types/blog";
import { makeExcerpt } from "../../libs/makeExcerpt"
import ConvertToIcon from "../atoms/ConvertToIcon"

type Props = {
  blog: Blog
}

const ArchiveBlock: NextPage<Props> = ({ blog }) => {
  return (
    <li className="shadow-lg rounded-2xl">
      <Link href={`blog/${blog.id}`}>
        <a className="block h-full bg-white rounded-2xl p-3 lg:p-4 dark:bg-gray-500">
          <span className="block h-5">
            <ConvertToIcon category={blog.category.name} />
          </span>
          <h3 className="text-lg mt-6">{blog.title}</h3>
          <p className="text-sm text-gray-400 mt-4 dark:text-gray-300">{makeExcerpt(blog.excerpt, 80)}</p>
        </a>
      </Link>
    </li>
  )
}

export default ArchiveBlock