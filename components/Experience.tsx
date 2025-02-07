import { Briefcase } from "lucide-react"

const experiences = [
  {
    title: "GIS Developer",
    company: "TechGIS PVT Limited",
    period: "2024 - Present",
    description:
      "Lead the development of cutting-edge geospatial web applications, integrating machine learning models for predictive mapping.",
  },
  {
    title: "GIS Analyst Intern",
    company: "SpatialOX PVT LTD",
    period: "2023 - 2024",
    description:
      "Designed and implemented spatial databases, created format converting web services for geospatial data services, and contributed in Mapbakes's (SpatilOX's Product).",
  },
  {
    title: "Google Earth Engine Developer Intern",
    company: "Pakistan Meteorological Department",
    period: "2022",
    description:
      "worked on Google Earth Engine (NDWLNDVI Index For Punjab), ArcGIS (Interpolation, Masking, Raster Analysis), PMD Stations Data Analysis.",
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center mb-12">Professional Journey</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="tech-card hover:border-primary transition-colors duration-300">
              <div className="flex items-center mb-4">
                <Briefcase className="w-6 h-6 text-primary mr-3" />
                <h3 className="text-xl font-semibold">{exp.title}</h3>
              </div>
              <p className="text-foreground/70 mb-2">
                {exp.company} | {exp.period}
              </p>
              <p className="text-foreground/80">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

