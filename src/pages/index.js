import Image from 'next/image'
import { Inter } from 'next/font/google'
import RootLayout from '@/components/Layout/RootLayout'
import Banner from '@/components/UI/Banner'
import Link from 'next/link'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>Purely Write</title>
        <meta
          name="description"
          content="A simple blog app with Next.js and TailwindCSS"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Banner></Banner>
        <section>
          <h2 className='mt-14 text-center font-bold text-3xl'>Latest Blogs</h2>
          <div className='mt-10 mb-10 px-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {
              data.map((blog) => {
                return <div key={blog.id} className="card card-compact bg-base-100 rounded-[6px] shadow-xl border-[1px]">
                  <figure>
                    <Image src={blog.image} width={200} className='w-full h-[300px]' height={200} alt='blog image' /> </figure>
                  <div className="card-body">
                    <h2 className="card-title text-xl font-bold">{blog?.heading}</h2>
                    <p className='font-semibold text-base'>{blog?.author}</p>
                    <div className='flex justify-between gap-4 font-medium'>
                      <span>{blog?.publish_date}</span>
                      <span>{blog?.category}</span>
                    </div>
                    <p className='mt-3 text-lg'>{blog?.short_paragraph}</p>
                    <div className="card-actions justify-center mt-6">
                      <Link href={`/blogs/${blog.id}`} className='w-full'>
                        <button className="btn bg-[#55c2da] text-white hover:text-black w-full hover:border-[1px] hover:border-black hover:bg-white rounded-[6px]">View</button>
                      </Link>
                    </div>
                  </div>
                </div>
              })
            }
          </div>
        </section>
      </div >
    </>

  )
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>
}


export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:5000/blogs")
  const data = await res.json();

  return {
    props: {
      data: data.slice(0, 6)
    }
  }
}