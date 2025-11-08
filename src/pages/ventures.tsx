import type { NextPage } from 'next'
import Head from 'next/head'

interface Venture {
  name: string
  description: string
  mission: string
  link?: string
  status: 'active' | 'completed' | 'ongoing'
}

const ventures: Venture[] = [
  {
    name: 'Riti',
    description: 'A platform exploring the intersection of technology and consciousness, building tools that enhance human understanding and connection.',
    mission: 'To create systems that bridge the gap between technical capability and human wisdom.',
    status: 'active',
  },
  {
    name: 'CityConnect',
    description: 'An initiative focused on improving urban connectivity and accessibility through data-driven solutions and community engagement.',
    mission: 'Making cities more livable and connected through intelligent systems design.',
    status: 'active',
  },
  {
    name: 'iLag',
    description: 'A research and development project exploring intelligent lag compensation and optimization in distributed systems.',
    mission: 'Reducing latency and improving responsiveness in networked applications.',
    status: 'ongoing',
  },
]

const Ventures: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ventures | Pankaj Kumar Sinha</title>
        <meta name="description" content="Projects and ventures including Riti, CityConnect, iLag - applying research to real-world impact" />
        <meta property="og:title" content="Ventures | Pankaj Kumar Sinha" />
        <meta property="og:description" content="Projects and ventures applying research to real-world impact" />
      </Head>
      <main className="min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-serif font-semibold text-warm-900 dark:text-warm-100 mb-4">
              Ventures
            </h1>
            <p className="text-lg text-warm-600 dark:text-warm-400 font-sans mb-12">
              Projects and ventures that apply research insights to create real-world impact, 
              bridging the gap between academia and practice.
            </p>

            <div className="space-y-8">
              {ventures.map((venture) => (
                <article
                  key={venture.name}
                  className="p-8 rounded-lg border border-warm-200 dark:border-warm-800 bg-warm-50 dark:bg-warm-950 hover:bg-warm-100 dark:hover:bg-warm-900 transition-colors"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h2 className="text-3xl font-serif font-semibold text-warm-900 dark:text-warm-100">
                      {venture.name}
                    </h2>
                    <span
                      className={`px-3 py-1 text-xs rounded-full font-sans ${
                        venture.status === 'active'
                          ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300'
                          : venture.status === 'ongoing'
                          ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                          : 'bg-warm-200 dark:bg-warm-800 text-warm-700 dark:text-warm-300'
                      }`}
                    >
                      {venture.status}
                    </span>
                  </div>
                  <p className="text-warm-600 dark:text-warm-400 font-sans leading-relaxed mb-4">
                    {venture.description}
                  </p>
                  <p className="text-warm-700 dark:text-warm-300 font-sans italic">
                    {venture.mission}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Ventures

