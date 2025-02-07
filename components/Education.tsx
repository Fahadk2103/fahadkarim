import { GraduationCap } from "lucide-react"

const education = [
  {
    degree: "Bachelor of Science in Geographical Information Systems and Remote Sensing",
    school: "PMAS Arid Agriculture University, Rawalpindi",
    year: "2020-2024",
    description: "Focused on advanced spatial analysis techniques and web-based GIS application development.",
  },
  {
    degree: "FSC Pre-Engineering",
    school: "Chenab College Jhang",
    year: "2018-2020",
    description: "Studied Mathematics, Physics, and Computer Science, preparing for a career in engineering.",
  },
]

export default function Education() {
  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center mb-12">Educational Background</h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="tech-card hover:border-primary transition-colors duration-300">
              <div className="flex items-center mb-4">
                <GraduationCap className="w-6 h-6 text-primary mr-3" />
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
              </div>
              <p className="text-foreground/70 mb-2">
                {edu.school}, {edu.year}
              </p>
              <p className="text-foreground/80">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

