import Header from "../components/Header"
import Profile from "../components/Profile"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Experience from "../components/Experience"
import Education from "../components/Education"
import Contact from "../components/Contact"

export default function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Header />
      <main>
        <Profile />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
    </div>
  )
}

