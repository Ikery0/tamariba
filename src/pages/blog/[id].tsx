import Head from 'next/head'
import Link from 'next/link'
import { NextPage } from 'next';
import Image from 'next/image';
import { client } from '../../libs/client'
import type { Blog } from '../../types/blog';

type Props = {
  blog: Blog
}

const BlogPage: NextPage<Props> = ({blog}) => {

  return (
    <main>
      <h1>{blog.title}</h1>
      <p>{blog.category.name}</p>
      <div>
        <Image 
        src={blog.eyecatch.url}
        alt='sample'
        layout='responsive' 
        width={blog.eyecatch.width}
        height={blog.eyecatch.height}/>
      </div>
      <p>{blog.publishedAt}</p>
      <div 
        dangerouslySetInnerHTML={{
          __html: `${blog.content}`
        }}
      />
    </main>
  )
}

export default BlogPage

export const getStaticPaths =async () => {
  const data = await client.get({ endpoint: 'blog' })

  const paths = data.contents.map((content) => `/blog/${content.id}`)
  
  return {paths, fallback: false}
}

export const getStaticProps =async (context) => {
  const id = context.params.id
  const data = await client.get({ endpoint:'blog', contentId: id })

  return {
    props: {
      blog: data
    }
  }
}