import type { NextPage } from 'next'
import Head from 'next/head'

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contact | Pankaj Kumar Sinha</title>
        <meta name="description" content="Get in touch with Pankaj Kumar Sinha" />
      </Head>
      <main className="min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-8">Contact</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Contact form coming soon...
          </p>
        </div>
      </main>
    </>
  )
}

export default Contact

