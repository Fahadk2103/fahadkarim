import Image from "next/image"
export default function Profile() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden" id="home">
      <video 
        autoPlay 
        loop 
        muted 
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/hvv.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/50 z-0"></div> {/* Increased overlay opacity slightly */} 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10 text-center">
        <div className="flex flex-row items-center space-x-6">
          {/* Smaller Profile Picture */}
          <div className="relative w-40 h-40 rounded-full overflow-hidden ring-4 ring-primary/30 shadow-lg">
            <Image
              src="/pf.png" // Assuming this is the correct path for the profile picture
              alt="Fahad Karim"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Text container */}
          <div className="text-left">
          <h1 className="text-3xl font-bold text-white">
            Fahad Karim
          </h1>
          <p className="text-l text-gray-300">
            GIS and Remote Sensing Expert/Dev
          </p>
          </div>
        </div>
      </div>
    </section>
  )
}

