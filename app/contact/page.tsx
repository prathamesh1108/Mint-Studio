"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitMessage("Thank you for your message! We'll get back to you soon.")
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <div className="py-16">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="mb-4">Get in Touch</h1>
          <p className="text-lg text-neutral-600">
            Have a question or want to work together? Reach out to us using the form below or contact information.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="md:col-span-1">
            <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="w-5 h-5 mt-1 mr-3 text-neutral-700" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-neutral-600">hello@amulyaartistry.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="w-5 h-5 mt-1 mr-3 text-neutral-700" />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-neutral-600">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mt-1 mr-3 text-neutral-700" />
                <div>
                  <h3 className="font-medium">Studio Location</h3>
                  <p className="text-neutral-600">
                    123 Creative Avenue
                    <br />
                    Artsville, CA 90210
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-medium mb-3">Studio Hours</h3>
              <p className="text-neutral-600 mb-1">Monday - Friday: 9am - 6pm</p>
              <p className="text-neutral-600">Weekends: By appointment only</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block mb-2 font-medium">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-500"
                >
                  <option value="">Select a subject</option>
                  <option value="Custom Artwork">Custom Artwork</option>
                  <option value="Brand Design">Brand Design</option>
                  <option value="Art Direction">Art Direction</option>
                  <option value="Illustration">Illustration</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-500"
                ></textarea>
              </div>

              <button type="submit" disabled={isSubmitting} className="btn btn-primary flex items-center">
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message <Send className="w-4 h-4 ml-2" />
                  </>
                )}
              </button>

              {submitMessage && <div className="mt-4 p-4 bg-green-50 text-green-800 rounded-md">{submitMessage}</div>}
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-24">
          <h2 className="text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: "What is your typical turnaround time?",
                answer:
                  "Turnaround time varies depending on the project scope and complexity. Small projects may take 1-2 weeks, while larger projects can take several weeks to months. We'll provide a specific timeline during our initial consultation.",
              },
              {
                question: "Do you offer consultations before starting a project?",
                answer:
                  "Yes, we offer complimentary initial consultations to discuss your project needs, goals, and vision. This helps us understand your requirements and determine if we're the right fit for your project.",
              },
              {
                question: "How do you handle revisions?",
                answer:
                  "We include a specific number of revision rounds in our project quotes. Minor revisions are typically accommodated within the project scope, while significant changes may require additional fees. We'll clearly outline our revision policy before starting your project.",
              },
              {
                question: "Do you work with clients remotely?",
                answer:
                  "Yes, we work with clients both locally and remotely. We use video calls, email, and project management tools to ensure smooth communication regardless of location.",
              },
              {
                question: "What payment methods do you accept?",
                answer:
                  "We accept various payment methods including credit cards, bank transfers, and PayPal. For larger projects, we typically require a deposit upfront with the remaining balance due upon completion.",
              },
            ].map((faq, index) => (
              <div key={index} className="border-b border-neutral-200 pb-6">
                <h3 className="font-medium mb-2">{faq.question}</h3>
                <p className="text-neutral-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

