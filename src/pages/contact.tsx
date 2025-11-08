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
            <p className="text-lg text-warm-600 dark:text-warm-400 font-sans mb-12">
              Interested in collaboration, research discussions, or have questions? 
              I&apos;d love to hear from you.
            </p>

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

