import RootLayout from '@/components/Layout/RootLayout'
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
export const metadata = {
  title: 'Purely Write',
  description: 'A simple blog app with Next.js and TailwindCSS',
}

const BlogDetailsPage = ({ blog }) => {

  if (!blog?.id) {
    return <>
      <div className='min-h-[50vh] flex flex-col gap-4 justify-center items-center'>
        <h2 className='font-bold text-xl'>No Data</h2>
        <Link className='text-cyan-700' href='/'>Go Back</Link>
      </div></>
  }
  return (
    <>
      <Head>
        <title>{blog?.heading}</title>
        <meta
          name="description"
          content="A simple blog app with Next.js and TailwindCSS"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='px-5'>
        <div className="container mx-auto py-8">
          <div className="max-w-3xl mx-auto bg-white shadow-md rounded-md">
            <div className="relative h-64">
              <Image
                src={blog.image}
                alt="Blog Image"
                layout="fill"
                objectFit="cover"
                className="rounded-t-md"
              />
            </div>
            <div className="p-8">
              <h1 className="text-3xl font-bold mb-4">{blog?.heading}</h1>
              <div className="text-gray-600 mb-4">
                Published by <span className='font-medium'>{blog?.author}</span> on <span className='font-medium'>{blog?.publish_date}</span>
              </div>
              <div className="text-gray-800 mb-8">
                <p>{blog?.short_paragraph}</p>
              </div>
              <div className="flex items-center">
                <div className="mr-2 text-blue-600">Category:</div>
                <div className="text-slate-700 font-bold px-2 py-1 rounded-md">
                  {blog?.category}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogDetailsPage;

BlogDetailsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>
}

export const getServerSideProps = async (context) => {
  const { blogId } = context.params;
  const res = await fetch(`http://localhost:5000/blogs/${blogId}`);
  const data = await res.json();
  return {
    props: {
      blog: data
    }
  };
}