import Image from "next/image"
import Link from "next/link"
import FadeInSection from "@/components/fade-in-section"

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Residential Interior Design",
      description:
        "Transforming homes into personalized sanctuaries with tailored layouts, color palettes, and furnishings that reflect your lifestyle.",
      details: [
        "Comprehensive space planning and layout design",
        "Custom furniture and decor selection",
        "Lighting and material consultation",
        "Color palette and mood board creation",
        "Project management from concept to completion",
      ],
      imagePath: "/images/Hiranandani Estate (woodpark)/1.JPG",
    },
    {
      id: 2,
      title: "Commercial Interior Design",
      description:
        "Designing inspiring and functional workspaces, retail, and hospitality environments that enhance productivity and brand identity.",
      details: [
        "Brand-aligned concept development",
        "Space optimization for workflow and customer experience",
        "Furniture, fixtures, and equipment specification",
        "Lighting and acoustic solutions",
        "On-site coordination and styling",
      ],
      imagePath: "/images/Aum Enterprises/1.JPG",
    },
    {
      id: 3,
      title: "Renovation Consulting",
      description:
        "Expert guidance through the renovation process, ensuring seamless execution and design integrity for your space.",
      details: [
        "Site assessment and feasibility studies",
        "Design and material recommendations",
        "Vendor and contractor coordination",
        "Budget planning and timeline management",
        "Quality checks and final walkthroughs",
      ],
      imagePath: "/images/ongoing/3.JPG",
    },
    {
      id: 4,
      title: "Space Planning & Styling",
      description:
        "Optimizing layouts and styling interiors to maximize functionality, flow, and aesthetic appeal for any space.",
      details: [
        "Furniture arrangement and layout planning",
        "Decor and accessory curation",
        "Custom storage solutions",
        "Seasonal and event-based styling",
        "Personalized finishing touches",
      ],
      imagePath: "/images/Dosti Oak/1.PNG",
    },
    {
      id: 5,
      title: "Furniture & Decor Selection",
      description:
        "Curated selection of furniture, art, and decor to complement your space and design vision.",
      details: [
        "Sourcing from trusted vendors and artisans",
        "Custom furniture design options",
        "Artwork and accessory recommendations",
        "Procurement and delivery coordination",
        "Installation and styling support",
      ],
      imagePath: "/images/Aum Enterprises/2.JPG",
    },
  ]

  return (
    <FadeInSection>
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
    </FadeInSection>
  )
}

