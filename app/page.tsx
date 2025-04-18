import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full">
        <Image
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1920&auto=format&fit=crop"
          alt="Mint Studio Interior Design - Modern living room with elegant furniture"
          fill
          priority
          className="object-cover brightness-[0.85]"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Mint Studio</h1>
          <p className="text-xl md:text-2xl text-white max-w-2xl">
            Transforming spaces into extraordinary experiences
          </p>
          <Link href="/contact" className="mt-8 btn btn-primary">
            Book a Consultation
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">About Mint Studio</h2>
              <p className="mb-4">
                Welcome to Mint Studio, where we blend creativity with functionality to create spaces that inspire. 
                Our interior design approach focuses on crafting environments that reflect your personality and lifestyle.
              </p>
              <p className="mb-4">
                With an eye for detail and a passion for innovative design, we transform ordinary spaces into 
                extraordinary experiences that elevate everyday living.
              </p>
              <p>
                Whether you're looking to redesign a single room or renovate an entire home, our team of expert 
                designers will guide you through every step of the process.
              </p>
            </div>
            <div className="relative h-[400px] w-full">
              <Image
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=600&auto=format&fit=crop"
                alt="Interior Design Studio workspace with designers collaborating"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom">
          <h2 className="text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Modern Minimalist Apartment", category: "Residential" },
              { title: "Luxury Boutique Hotel", category: "Hospitality" },
              { title: "Contemporary Office Space", category: "Commercial" }
            ].map((project, index) => (
              <div key={index} className="group">
                <div className="relative h-[300px] w-full mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={index === 0 
                      ? "https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=400&auto=format&fit=crop" 
                      : index === 1 
                      ? "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=400&auto=format&fit=crop" 
                      : "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=400&auto=format&fit=crop"
                    }
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-medium">{project.title}</h3>
                <p className="text-neutral-600">{project.category}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/portfolio" className="btn btn-primary">
              View All Projects
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
                title: "Residential Design",
                description: "Creating beautiful, functional living spaces tailored to your lifestyle and preferences.",
              },
              {
                title: "Commercial Design",
                description: "Designing productive and inspiring workspaces that reflect your brand identity.",
              },
              {
                title: "Renovation Consulting",
                description: "Expert guidance through the renovation process, from concept to completion.",
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

      {/* Design Process */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom">
          <h2 className="text-center mb-12">Our Design Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "We begin with understanding your vision, requirements, and budget.",
                image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=300&auto=format&fit=crop"
              },
              {
                step: "02",
                title: "Concept Development",
                description: "Our designers create detailed concepts based on your preferences.",
                image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=300&auto=format&fit=crop"
              },
              {
                step: "03",
                title: "Design Refinement",
                description: "We refine the designs based on your feedback until perfect.",
                image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=300&auto=format&fit=crop"
              },
              {
                step: "04",
                title: "Implementation",
                description: "We oversee the execution to ensure the design vision comes to life.",
                image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=300&auto=format&fit=crop"
              }
            ].map((process, index) => (
              <div key={index} className="text-center p-6">
                <div className="relative h-[150px] w-full mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={process.image}
                    alt={`${process.title} process`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-neutral-800 text-white text-xl font-semibold mb-4">
                  {process.step}
                </div>
                <h3 className="mb-3">{process.title}</h3>
                <p className="text-neutral-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Showcase */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-center mb-12">See Our Work in Action</h2>
          <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg mx-auto max-w-4xl">
            <iframe 
              src="https://www.youtube.com/embed/8JTkUdHi4oc?controls=1&rel=0&showinfo=0&autoplay=0" 
              title="Mint Studio Interior Design Process" 
              className="absolute top-0 left-0 w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

    

      {/* Contact CTA */}
      <section className="py-16 bg-neutral-800 text-white">
        <div className="container-custom text-center">
          <h2 className="mb-6">Ready to Transform Your Space?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Let's collaborate to create a space that reflects your style and meets your needs.
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
                Mint Studio
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

