import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full">
        <Image
          src="https://sjc.microlink.io/_P98f6lMSoV5-qKiN4OGrwJ9cR2eHDjNYzyFtlQ8cYklTklR9nNBxfyxM65JerWnm92cn0huGqc9xAjrVC6ahw.jpeg"
          alt="Amulya Artistry Studio"
          fill
          priority
          className="object-cover brightness-[0.85]"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Amulya Artistry</h1>
          <p className="text-xl md:text-2xl text-white max-w-2xl">
            Creating beautiful art and designs that tell your story
          </p>
          <Link href="/contact" className="mt-8 btn btn-primary">
            Get in Touch
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">About Amulya Artistry</h2>
              <p className="mb-4">
                Welcome to Amulya Artistry, where creativity meets purpose. We specialize in creating meaningful art and
                designs that capture the essence of your vision.
              </p>
              <p className="mb-4">
                Our studio combines traditional artistic techniques with modern design principles to deliver unique and
                impactful visual experiences.
              </p>
              <p>
                Whether you're looking for custom artwork, branding solutions, or creative direction, we're here to
                bring your ideas to life with passion and precision.
              </p>
            </div>
            <div className="relative h-[400px] w-full">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Art Studio"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom">
          <h2 className="text-center mb-12">Featured Work</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group">
                <div className="relative h-[300px] w-full mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={`/placeholder.svg?height=300&width=400&text=Project ${item}`}
                    alt={`Project ${item}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-medium">Project Title {item}</h3>
                <p className="text-neutral-600">Category</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/portfolio" className="btn btn-primary">
              View All Work
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Custom Artwork",
                description: "Unique pieces created specifically for your space and style.",
              },
              {
                title: "Brand Design",
                description: "Cohesive visual identities that communicate your brand's essence.",
              },
              {
                title: "Art Direction",
                description: "Creative guidance to ensure your visual projects achieve their goals.",
              },
            ].map((service, index) => (
              <div key={index} className="p-6 border border-neutral-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="mb-3">{service.title}</h3>
                <p className="text-neutral-600 mb-4">{service.description}</p>
                <Link href="/services" className="text-neutral-800 font-medium hover:underline">
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom">
          <h2 className="text-center mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote:
                  "Working with Amulya Artistry was a transformative experience. They truly understood my vision and brought it to life in ways I couldn't have imagined.",
                author: "Sarah J.",
              },
              {
                quote:
                  "The attention to detail and creative approach made all the difference in our project. Highly recommended for anyone seeking unique artistic solutions.",
                author: "Michael T.",
              },
            ].map((testimonial, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-sm">
                <p className="italic mb-4">{testimonial.quote}</p>
                <p className="font-medium">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-neutral-800 text-white">
        <div className="container-custom text-center">
          <h2 className="mb-6">Ready to Start Your Project?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Let's collaborate to create something beautiful and meaningful together.
          </p>
          <Link href="/contact" className="btn bg-white text-neutral-800 hover:bg-neutral-100">
            Contact Us
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-white border-t border-neutral-200">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Link href="/" className="font-bold text-lg">
                Amulya Artistry
              </Link>
              <p className="text-neutral-600 text-sm mt-1">© {new Date().getFullYear()} All Rights Reserved</p>
            </div>
            <div className="flex space-x-6">
              <Link href="/portfolio" className="text-neutral-600 hover:text-neutral-900">
                Portfolio
              </Link>
              <Link href="/services" className="text-neutral-600 hover:text-neutral-900">
                Services
              </Link>
              <Link href="/contact" className="text-neutral-600 hover:text-neutral-900">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

