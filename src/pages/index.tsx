import Head from 'next/head'
import { client } from '../libs/client'
import Container from '../components/templates/Container'
import SectionTitle from '../components/atoms/SectionTitle'
import ArchiveBlock from '../components/molecules/ArchiveBlock'
import Layout from '../components/templates/Layout'

export default function Home({ blogs }) {
  return (
    <>
      <Head>
        <title>TAMARIBA</title>
        <meta name="description" content="TAMARIBAはこれまで実装したり、学習したコードの溜まり場です。主にJavaScript, React, Next.js, TypeScriptに関連するものをまとめています。" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main className='mt-20 lg:mt-40'>
          <section>
            <Container size={1024}>
              <SectionTitle text="blog" />
              <ul className='grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {blogs.map((blog) => (
                  <ArchiveBlock key={blog.id} blog={blog} />
                ))}
              </ul>
            </Container>
          </section>
        </main>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: 'blog' })

  return {
    props: {
      blogs: data.contents,
    }
  }
}