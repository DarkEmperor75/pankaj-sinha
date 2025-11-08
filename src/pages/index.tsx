import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Pankaj Kumar Sinha | Home</title>
        <meta name="description" content="Creative technologist, optimization researcher, and system architect" />
      </Head>
      <main className="min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-4">Pankaj Kumar Sinha</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Creative technologist, optimization researcher, and system architect
          </p>
        </div>
      </main>
    </>
  )
}

export default Home

