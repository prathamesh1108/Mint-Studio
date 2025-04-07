import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
  // Sample portfolio projects
  const projects = [
    {
      id: 1,
      title: "Botanical Illustrations",
      category: "Illustration",
      description: "A series of detailed botanical illustrations showcasing native plant species.",
      imagePath: "/placeholder.svg?height=500&width=700&text=Botanical+Illustrations",
    },
    {
      id: 2,
      title: "Brand Identity: Eco Cafe",
      category: "Branding",
      description:
        "Complete brand identity design for an eco-friendly cafe, including logo, color palette, and packaging.",
      imagePath: "/placeholder.svg?height=500&width=700&text=Brand+Identity",
    },
    {
      id: 3,
      title: "Abstract Art Collection",
      category: "Fine Art",
      description: "A collection of abstract paintings exploring themes of movement and emotion.",
      imagePath: "/placeholder.svg?height=500&width=700&text=Abstract+Art",
    },
    {
      id: 4,
      title: "Minimalist Home Decor",
      category: "Product Design",
      description: "Minimalist home decor pieces designed with simplicity and functionality in mind.",
      imagePath: "/placeholder.svg?height=500&width=700&text=Home+Decor",
    },
    {
      id: 5,
      title: "Nature Photography Series",
      category: "Photography",
      description: "A series of nature photographs capturing the beauty of landscapes and wildlife.",
      imagePath: "/placeholder.svg?height=500&width=700&text=Nature+Photography",
    },
    {
      id: 6,
      title: "Digital Art Explorations",
      category: "Digital Art",
      description: "Experimental digital artworks created using various digital techniques and tools.",
      imagePath: "/placeholder.svg?height=500&width=700&text=Digital+Art",
    },
  ]

  return (
    <div className="py-16">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="mb-4">Our Portfolio</h1>
          <p className="text-lg text-neutral-600">
            Explore our diverse collection of projects spanning various artistic disciplines and design categories.
          </p>
        </div>

        {/* Portfolio Filter - Could be made interactive with client components */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="px-4 py-2 bg-neutral-800 text-white rounded-md">All</button>
          <button className="px-4 py-2 bg-white border border-neutral-300 text-neutral-800 rounded-md hover:bg-neutral-100">
            Illustration
          </button>
          <button className="px-4 py-2 bg-white border border-neutral-300 text-neutral-800 rounded-md hover:bg-neutral-100">
            Branding
          </button>
          <button className="px-4 py-2 bg-white border border-neutral-300 text-neutral-800 rounded-md hover:bg-neutral-100">
            Fine Art
          </button>
          <button className="px-4 py-2 bg-white border border-neutral-300 text-neutral-800 rounded-md hover:bg-neutral-100">
            Product Design
          </button>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group">
              <div className="relative h-[300px] w-full mb-4 overflow-hidden rounded-lg">
                <Image
                  src={project.imagePath || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-medium mb-2">{project.title}</h3>
              <p className="text-neutral-500 mb-2">{project.category}</p>
              <p className="text-neutral-600">{project.description}</p>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-20 text-center">
          <h2 className="mb-4">Have a Project in Mind?</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto mb-8">
            Let's collaborate to bring your vision to life with our artistic expertise.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Start a Conversation
          </Link>
        </div>
      </div>
    </div>
  )
}

