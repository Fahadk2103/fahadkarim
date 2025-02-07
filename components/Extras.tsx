import Image from "next/image"

interface Project {
  title: string
  description: string
  link: string
  image: string
}

const projects: Project[] = [
  {
    title: "Urban Heat Island Analysis",
    description: "A Google Earth Engine project analyzing urban heat islands in major cities.",
    link: "https://example.com/urban-heat-island",
    image: "/urban-heat-island.jpg",
  },
  {
    title: "Interactive Watershed Explorer",
    description: "A WebGIS application for exploring watershed data and characteristics.",
    link: "https://example.com/watershed-explorer",
    image: "/watershed-explorer.jpg",
  },
  {
    title: "Global Forest Change Viewer",
    description: "A Google Earth Engine app visualizing global forest cover change over time.",
    link: "https://example.com/forest-change-viewer",
    image: "/forest-change-viewer.jpg",
  },
]

export default function Extras() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-6">Extras</h2>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 p-4">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={200}
                  height={200}
                  className="h-48 w-full object-cover rounded-lg"
                />
              </div>
              <div className="md:w-2/3 p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600 font-medium"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

