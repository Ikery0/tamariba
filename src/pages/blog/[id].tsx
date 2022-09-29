import Head from 'next/head'
import { NextPage } from 'next';
import Image from 'next/image';
import { client } from '../../libs/client';
import cheerio from 'cheerio';
import hljs from 'highlight.js'
import 'highlight.js/styles/nord.css';
import type { Blog } from '../../types/blog';
import Container from '../../components/templates/Container';
import { GetFormatedElms } from "../../libs/convertDateFormat";
import Layout from '../../components/templates/Layout';

type Props = {
  blog: Blog
}

const BlogPage: NextPage<Props> = ({ blog }) => {
  const publishDateObj = new GetFormatedElms(blog.publishedAt).getConvertedObj()
  const { tagFormat, displayFormat } = publishDateObj

  return (
    <>
      <Head>
        <title>TAMARIBA</title>
        <meta name="description" content={blog.category.name} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main className='prose dark:prose-invert max-w-full mt-20 mx-auto lg:mt-40'>
          <article>
            <Container size={1024}>
              <h1 className='text-3xl font-bold dark:text-white mb-0'>{blog.title}</h1>
              <div className='flex justify-between text-sm mt-2'>
                <p className='m-0'>{blog.category.name}</p>
                <time dateTime={tagFormat}>公開日：{displayFormat}</time>
              </div>
              {
                blog.eyecatch ? (
                  <div className='mt-4'>
                    <Image
                      src={blog.eyecatch.url}
                      alt='sample'
                      layout='responsive'
                      width={blog.eyecatch.width}
                      height={blog.eyecatch.height} />
                  </div>
                ) :
                  (
                    <></>
                  )
              }
              <div
                dangerouslySetInnerHTML={{ __html: `${blog.content}` }}
                className='mt-10'
              />
            </Container>
          </article>
        </main>
      </Layout>
    </>
  )
}

export default BlogPage

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: 'blog' })
  const paths = data.contents.map((content) => `/blog/${content.id}`)

  return { paths, fallback: false }
}

export const getStaticProps = async (context) => {
  const id = context.params.id
  const data = await client.get({ endpoint: 'blog', contentId: id })

  const $ = cheerio.load(data.content)
  $('pre code').each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text());
    $(elm).html(result.value);
    $(elm).addClass('hljs');
  });
  const highlightedContent = $.html()
  const highlightedData = { ...data, content: highlightedContent }

  return {
    props: {
      blog: highlightedData
    }
  }
}