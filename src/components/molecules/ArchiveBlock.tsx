import { NextPage } from "next";
import Link from "next/link";
import type { Blog } from "../../types/blog";
import { makeExcerpt } from "../../libs/makeExcerpt"
import ConvertToIcon from "../atoms/ConvertToIcon"
import { convertDateFormat } from "../../libs/convertDateFormat";

type Props = {
  blog: Blog
}

const ArchiveBlock: NextPage<Props> = ({ blog }) => {
  const dateObj = convertDateFormat(blog.publishedAt)
  const { tagFormat, displayFormat } = dateObj

  return (
    <li className="shadow-lg rounded-2xl">
      <Link href={`blog/${blog.id}`}>
        <a className="flex flex-col justify-between h-full bg-white rounded-2xl p-3 lg:p-4 dark:bg-gray-500">
          <div>
            <span className="block h-5">
              <ConvertToIcon category={blog.category.name} />
            </span>
            <h3 className="text-lg mt-6 dark:text-gray-100">{blog.title}</h3>
            <p className="text-sm text-gray-400 mt-4 dark:text-gray-300">{makeExcerpt(blog.excerpt, 80)}</p>
          </div>
          <time
            className="block text-sm text-gray-400 text-right mt-4 dark:text-gray-300"
            dateTime={tagFormat}
          >
            {displayFormat}
          </time>
        </a>
      </Link>
    </li>
  )
}

export default ArchiveBlock