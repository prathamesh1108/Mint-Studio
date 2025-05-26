import Image from "next/image"
import Link from "next/link"
import FadeInSection from "@/components/fade-in-section"

// Helper to statically generate projects list at build time
function getPortfolioProjects() {
  // This can be replaced with a static JSON or imported data for best performance
  return [
    {
      id: 1,
      title: "Aum Enterprises",
      images: [
        "/images/Aum Enterprises/1.jpg",
        "/images/Aum Enterprises/2.jpg",
        "/images/Aum Enterprises/3.jpg",
        "/images/Aum Enterprises/4.jpg",
        "/images/Aum Enterprises/5.jpg",
        "/images/Aum Enterprises/6.jpg",
        "/images/Aum Enterprises/7.jpg"
      ]
    },
    {
      id: 2,
      title: "Dosti Oak",
      images: [
        "/images/Dosti Oak/1.png",
        "/images/Dosti Oak/2.png",
        "/images/Dosti Oak/3.png",
        "/images/Dosti Oak/4.png",
        "/images/Dosti Oak/5.png",  
        "/images/Dosti Oak/6.png",
        "/images/Dosti Oak/7.jpg"
      ]
    },
    {
      id: 3,
      title: "Hiranandani Estate (woodpark)",
      images: [
        "/images/Hiranandani Estate (woodpark)/1.jpg",
        "/images/Hiranandani Estate (woodpark)/2.jpg",
        "/images/Hiranandani Estate (woodpark)/3.jpg",
        "/images/Hiranandani Estate (woodpark)/4.jpg",
        "/images/Hiranandani Estate (woodpark)/5.jpg",
        "/images/Hiranandani Estate (woodpark)/6.jpg"
      ]
    },
    {
      id: 4,
      title: "Ongoing",
      images: [
        "/images/ongoing/1.jpg",
        "/images/ongoing/2.jpg",
        "/images/ongoing/3.jpg",
        "/images/ongoing/4.jpg",
        "/images/ongoing/5.jpg"
      ]
    }
  ]
}

export default function Portfolio() {
  const projects = getPortfolioProjects()
  return (
    <FadeInSection>
      <div className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h1 className="mb-4">Our Portfolio</h1>
            <p className="text-lg text-neutral-600">
              Explore our diverse collection of projects. Each section below is a project folder, and all images inside are displayed.
            </p>
          </div>
          {projects.length === 0 && (
            <div className="text-center text-neutral-500">No portfolio images found.</div>
          )}
          {projects.map((project) => (
            <div key={project.id} className="mb-20">
              <h2 className="text-2xl font-semibold mb-10 mt-10 text-center">{project.title}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {project.images.map((img, i) => (
                  <div key={img} className="relative h-[250px] w-full overflow-hidden rounded-lg group">
                    <Image
                      src={img}
                      alt={`${project.title} ${i+1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      loading="lazy"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
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
    </FadeInSection>
  )
}

// No need for fs/path or Project interface since data is static

