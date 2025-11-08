import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Pankaj Kumar Sinha | Home</title>
        <meta name="description" content="Creative technologist, optimization researcher, and system architect" />
      </Head>
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-semibold text-warm-900 dark:text-warm-100 mb-6 leading-tight">
              Pankaj Kumar Sinha
            </h1>
            <p className="text-xl md:text-2xl text-warm-700 dark:text-warm-300 font-sans mb-8 leading-relaxed">
              Creative technologist, optimization researcher, and system architect
            </p>
            <p className="text-lg text-warm-600 dark:text-warm-400 font-sans leading-relaxed max-w-2xl">
              Exploring the intersection of intelligence, consciousness, and technology through research, 
              writing, and ventures that bridge academia and entrepreneurship.
            </p>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/research"
              className="p-6 rounded-lg border border-warm-200 dark:border-warm-800 bg-warm-50 dark:bg-warm-950 hover:bg-warm-100 dark:hover:bg-warm-900 transition-colors group"
            >
              <h2 className="text-xl font-serif font-semibold text-warm-900 dark:text-warm-100 mb-2 group-hover:text-warm-700 dark:group-hover:text-warm-300 transition-colors">
                Research
              </h2>
              <p className="text-warm-600 dark:text-warm-400 font-sans text-sm">
                Academic papers, publications, and research interests
              </p>
            </Link>
            <Link
              href="/writing"
              className="p-6 rounded-lg border border-warm-200 dark:border-warm-800 bg-warm-50 dark:bg-warm-950 hover:bg-warm-100 dark:hover:bg-warm-900 transition-colors group"
            >
              <h2 className="text-xl font-serif font-semibold text-warm-900 dark:text-warm-100 mb-2 group-hover:text-warm-700 dark:group-hover:text-warm-300 transition-colors">
                Writing
              </h2>
              <p className="text-warm-600 dark:text-warm-400 font-sans text-sm">
                Essays, reflections, and philosophical notes
              </p>
            </Link>
            <Link
              href="/ventures"
              className="p-6 rounded-lg border border-warm-200 dark:border-warm-800 bg-warm-50 dark:bg-warm-950 hover:bg-warm-100 dark:hover:bg-warm-900 transition-colors group"
            >
              <h2 className="text-xl font-serif font-semibold text-warm-900 dark:text-warm-100 mb-2 group-hover:text-warm-700 dark:group-hover:text-warm-300 transition-colors">
                Ventures
              </h2>
              <p className="text-warm-600 dark:text-warm-400 font-sans text-sm">
                Projects including Riti, CityConnect, iLag
              </p>
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home

