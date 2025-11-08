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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-warm-900 dark:text-warm-100 mb-8">
            Contact
          </h1>
          <p className="text-lg text-warm-600 dark:text-warm-400 font-sans">
            Contact form coming soon...
          </p>
        </div>
      </main>
    </>
  )
}

export default Contact

