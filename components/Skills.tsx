import { MapPin, Globe, Database, Code, Cpu, BarChart } from "lucide-react"

const skills = [
  {
    name: "Geospatial Analysis",
    icon: MapPin,
    description: "Expert in spatial analysis using remote sensing, cartography, and geospatial data management.",
  },
  {
    name: "Web Mapping",
    icon: Globe,
    description: "Creating interactive and responsive web maps using OpenLayers, Leaflets and Mapbox GL JS.",
  },
  {
    name: "Spatial Databases",
    icon: Database,
    description: "Designing and optimizing databases for efficient spatial data storage and retrieval using PostgreSQL, PostGIS and MySQL.",
  },
  {
    name: "GIS Development",
    icon: Code,
    description: "Building backend web applications with a focus on geospatial functionality.",
  },
  {
    name: "Machine & Deep Learning",
    icon: Cpu,
    description: "Applying ML algorithms (Random Forest, SVM, KNN, etc.) to solve complex spatial problems and predict patterns. Using Python, and TensorFlow.",
  },
  {
    name: "Google Earth Engine",
    icon: Globe,
    description: "Using Google Earth Engine to analyze and visualize geospatial data.",
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center mb-12">Technical Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="tech-card group hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-4">
                <skill.icon className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                  {skill.name}
                </h3>
              </div>
              <p className="text-foreground/70">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

