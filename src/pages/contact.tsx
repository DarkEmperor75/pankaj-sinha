import type { NextPage } from 'next'
import Head from 'next/head'
import { useState, FormEvent } from 'react'

const Contact: NextPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('submitting')

    // Using Formspree endpoint - replace with your Formspree form ID
    // For now, this is a placeholder that shows the form structure
    // To use Formspree: 1) Sign up at formspree.io, 2) Create a form, 3) Replace the action URL below
    
    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <>
      <Head>
        <title>Contact | Pankaj Kumar Sinha</title>
        <meta name="description" content="Get in touch with Pankaj Kumar Sinha for collaborations, inquiries, or discussions" />
        <meta property="og:title" content="Contact | Pankaj Kumar Sinha" />
        <meta property="og:description" content="Get in touch for collaborations, inquiries, or discussions" />
      </Head>
      <main className="min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-serif font-semibold text-warm-900 dark:text-warm-100 mb-4">
              Contact
            </h1>
            <p className="text-lg text-warm-600 dark:text-warm-400 font-sans mb-8">
              Interested in collaboration, research discussions, or have questions? 
              I&apos;d love to hear from you.
            </p>

            {/* Direct Contact Information */}
            <div className="mb-12 p-6 rounded-lg border border-warm-200 dark:border-warm-800 bg-warm-50 dark:bg-warm-950">
              <h2 className="text-xl font-serif font-semibold text-warm-900 dark:text-warm-100 mb-4">
                Get in Touch
              </h2>
              <div className="space-y-3">
                <a
                  href="mailto:pankajksinha.123@gmail.com"
                  className="flex items-center text-warm-700 dark:text-warm-300 hover:text-warm-900 dark:hover:text-warm-100 transition-colors font-sans group"
                >
                  <svg
                    className="w-5 h-5 mr-3 text-warm-600 dark:text-warm-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="group-hover:underline">pankajksinha.123@gmail.com</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/pankaj-sinha-0a191a129/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-warm-700 dark:text-warm-300 hover:text-warm-900 dark:hover:text-warm-100 transition-colors font-sans group"
                >
                  <svg
                    className="w-5 h-5 mr-3 text-warm-600 dark:text-warm-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <span className="group-hover:underline">LinkedIn Profile</span>
                </a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-warm-700 dark:text-warm-300 mb-2 font-sans"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-warm-200 dark:border-warm-800 bg-warm-50 dark:bg-warm-950 text-warm-900 dark:text-warm-100 focus:outline-none focus:ring-2 focus:ring-warm-500 dark:focus:ring-warm-400 font-sans"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-warm-700 dark:text-warm-300 mb-2 font-sans"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-warm-200 dark:border-warm-800 bg-warm-50 dark:bg-warm-950 text-warm-900 dark:text-warm-100 focus:outline-none focus:ring-2 focus:ring-warm-500 dark:focus:ring-warm-400 font-sans"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-warm-700 dark:text-warm-300 mb-2 font-sans"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-warm-200 dark:border-warm-800 bg-warm-50 dark:bg-warm-950 text-warm-900 dark:text-warm-100 focus:outline-none focus:ring-2 focus:ring-warm-500 dark:focus:ring-warm-400 font-sans resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="px-6 py-3 rounded-lg bg-warm-700 dark:bg-warm-300 text-warm-50 dark:text-warm-900 font-sans font-medium hover:bg-warm-800 dark:hover:bg-warm-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <p className="text-green-600 dark:text-green-400 font-sans">
                  Thank you! Your message has been sent. I&apos;ll get back to you soon.
                </p>
              )}

              {status === 'error' && (
                <p className="text-red-600 dark:text-red-400 font-sans">
                  There was an error sending your message. Please try again or reach out directly.
                </p>
              )}
            </form>

            <div className="mt-12 pt-8 border-t border-warm-200 dark:border-warm-800">
              <p className="text-warm-600 dark:text-warm-400 font-sans text-sm">
                Note: To enable the contact form, please set up a Formspree account and replace 
                the form action URL in the contact page code with your Formspree form ID.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Contact

