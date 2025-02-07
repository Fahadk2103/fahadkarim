import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center mb-12">Get In Touch</h2>
        <div className="tech-card hover:border-primary transition-colors duration-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-primary">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-primary mr-3" />
                  <p>fahad.fhk2103@gmail.com</p>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-primary mr-3" />
                  <p>+92349-0029815</p>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-primary mr-3" />
                  <p>Islamabad, Pakistan</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-primary">Send a Message</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 bg-secondary text-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 bg-secondary text-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-2 bg-secondary text-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
                <button
                  type="submit"
                  className="px-6 py-2 bg-primary text-background rounded-md hover:bg-highlight transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

