import Image from "next/image"
import Link from "next/link"

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Custom Artwork",
      description:
        "Unique, handcrafted pieces created specifically for your space and style. Our custom artwork service includes consultation, concept development, creation, and installation guidance.",
      details: [
        "Personal consultation to understand your vision",
        "Custom concept sketches and proposals",
        "Creation of original artwork in your preferred medium",
        "Professional finishing and preparation for display",
        "Installation guidance and support",
      ],
      imagePath: "/placeholder.svg?height=400&width=600&text=Custom+Artwork",
    },
    {
      id: 2,
      title: "Brand Design",
      description:
        "Comprehensive brand identity design that communicates your brand's essence and values. We create cohesive visual systems that resonate with your target audience.",
      details: [
        "Brand strategy and positioning",
        "Logo design and visual identity development",
        "Color palette and typography selection",
        "Brand guidelines documentation",
        "Collateral design (business cards, letterheads, etc.)",
      ],
      imagePath: "/placeholder.svg?height=400&width=600&text=Brand+Design",
    },
    {
      id: 3,
      title: "Art Direction",
      description:
        "Creative guidance for your visual projects to ensure they achieve their goals. Our art direction service helps maintain visual consistency and quality across all touchpoints.",
      details: [
        "Creative concept development",
        "Visual storytelling strategy",
        "Project management and coordination",
        "Quality control and feedback",
        "Execution oversight",
      ],
      imagePath: "/placeholder.svg?height=400&width=600&text=Art+Direction",
    },
    {
      id: 4,
      title: "Illustration",
      description:
        "Custom illustrations for various applications including editorial, advertising, packaging, and digital content. Our illustration style adapts to your project needs.",
      details: [
        "Style exploration and development",
        "Concept sketches and refinement",
        "Final artwork creation",
        "Format preparation for various applications",
        "Usage rights and licensing",
      ],
      imagePath: "/placeholder.svg?height=400&width=600&text=Illustration",
    },
  ]

  return (
    <div className="py-16">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="mb-4">Our Services</h1>
          <p className="text-lg text-neutral-600">
            We offer a range of creative services to help bring your vision to life, from custom artwork to
            comprehensive brand design.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-20">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
            >
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <h2 className="mb-4">{service.title}</h2>
                <p className="mb-6 text-neutral-600">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.details.map((detail, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-neutral-800 mr-2">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className={`relative h-[400px] w-full rounded-lg overflow-hidden ${
                  index % 2 === 1 ? "md:order-1" : ""
                }`}
              >
                <Image
                  src={service.imagePath || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-24">
          <h2 className="text-center mb-12">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Discovery",
                description: "We begin by understanding your needs, goals, and vision through in-depth consultation.",
              },
              {
                step: "2",
                title: "Concept",
                description: "Based on our discovery, we develop concepts and ideas that align with your objectives.",
              },
              {
                step: "3",
                title: "Creation",
                description: "We bring the approved concept to life with our artistic expertise and technical skills.",
              },
              {
                step: "4",
                title: "Delivery",
                description: "The final work is delivered, along with any necessary support for implementation.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-neutral-800 text-white flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="mb-2">{item.title}</h3>
                <p className="text-neutral-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Note */}
        <div className="mt-24 bg-neutral-50 p-8 rounded-lg">
          <h3 className="mb-4 text-center">Pricing</h3>
          <p className="text-center text-neutral-600 mb-6">
            Our pricing is customized based on the scope, complexity, and specific requirements of each project. We
            provide detailed quotes after the initial consultation.
          </p>
          <div className="text-center">
            <Link href="/contact" className="btn btn-primary">
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

