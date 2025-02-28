"use client"
import dynamic from "next/dynamic"
import { ArrowRight } from "lucide-react"

const Map = dynamic(() => import("./Map"), { ssr: false })

const projects = [
  {
    title: "Urban Density and Aerosol Index Analysis (Lahore)",
    description:
      "In this project, I assessed urban density and air quality in Lahore, Pakistan in 2024 using Landsat 8 Collection 2 Tier 1 Level 2 data (LANDSAT/LC08/C02/T1_L2) and Sentinel-5P products (COPERNICUS/S5P/OFFL/L3_CO, NRTI/L3_NO2, NRTI/L3_HCHO, NRTI/L3_SO2, OFFL/L3_CH4, NRTI/L3_O3, NRTI/L3_AER_AI). Landsat composite is used to compute spectral indices (NDBI and NBR2) and derive built-up and urban density. These are compared with the 2020 urban density and Aerosol Index to monitor changes.",
    layers: [
      { name: "Urban Density 2024", url: "/tiles/lahoresmog/ub2024/{z}/{x}/{y}.png" },
      { name: "Urban Density 2020", url: "/tiles/lahoresmog/ub2020/{z}/{x}/{y}.png" },
      { name: "Aerosol Index 2024", url: "/tiles/lahoresmog/smog2024/{z}/{x}/{y}.png" },
      { name: "Aerosol Index 2020", url: "/tiles/lahoresmog/smog2020/{z}/{x}/{y}.png" },
    ],
    zoom: 10,
    center: [74.3587, 31.5204] as [number, number],
  },
  {
    title: "Drought Analysis (Punjab, Pakistan)",
    description:
      "In this project, I developed a Composite Drought Index for Punjab, Pakistan (2001–2022) by integrating calculated Soil Moisture Condition Index (SMCI), the Temperature Vegetation Dryness Index (TVDI), and the Standardized Precipitation Evapotranspiration Index (SPEI). Drought conditions were assessed using MODIS remote sensing data from MOD13Q1 (MODIS/Terra Vegetation Indices 08-Day L3 Global 250m) for NDVI and MOD11A1 (MODIS/Terra Land Surface Temperature/Emissivity Daily L3 Global 1km) for LST, with 2022 drought maps prominently displayed.",
    layers: [
      { name: "CDI 2022", url: "/tiles/punjabdrought/cdi/{z}/{x}/{y}.png" },
      { name: "SMCI 2022", url: "/tiles/punjabdrought/smci/{z}/{x}/{y}.png" },
      { name: "SPEI 2022", url: "/tiles/punjabdrought/spei/{z}/{x}/{y}.png" },
      { name: "TVDI 2022", url: "/tiles/punjabdrought/tvdi/{z}/{x}/{y}.png" },
    ],
    zoom: 7,
    center: [72.7097, 31.1704] as [number, number],
  },
  {
    title: "Drought Analysis (Balochistan, Pakistan)",
    description:
      "In this project, I conducted drought analysis for Balochistan, Pakistan (2001–2022) by calculating key indices Precipitation Condition Index (PCI), Vegetation Health Index (VHI), Standradized Precipitation Evapotranspiration Index (SPEI), and Water Use Efficiency (WUE) using MODIS data. The Project employed MOD13Q1 (MODIS/Terra Vegetation Indices 08-Day L3 Global 250m) for NDVI and MOD11A1 (MODIS/Terra Land Surface Temperature/Emissivity Daily L3 Global 1km) for LST, with 2001-2022 drought maps prominently displayed.",
    layers: [
      { name: "PCI 2001-2022", url: "/tiles/balochistandrought/pci/{z}/{x}/{y}.png" },
      { name: "SPEI 2001-2022", url: "/tiles/balochistandrought/spei/{z}/{x}/{y}.png" },
      { name: "VHI 2002-2022", url: "/tiles/balochistandrought/vhi/{z}/{x}/{y}.png" },
      { name: "WUE 2001-2022", url: "/tiles/balochistandrought/wue/{z}/{x}/{y}.png" },
    ],
    zoom: 7,
    center: [65.0958, 28.4907] as [number, number],
  },
  {
    title: "Drought Analysis (Huahie River Basin, China)",
    description:
      "In this project, I assessed drought conditions in the Huaihe River Basin, China (2015), by calculating NDVI using MODIS data. NDVI from MOD13Q1 (MODIS/Terra Vegetation Indices 16-Day L3 Global 250m) was analyzed for March, August, and December, while 40 cm soil moisture was interpolated from 37 observation points to generate detailed maps. The resulting drought and vegetation maps provide comprehensive seasonal insights into basin dynamics.",
    layers: [
      { name: "March NDVI 2015", url: "/tiles/huaihe/marchndvi/{z}/{x}/{y}.png" },
      { name: "August NDVI 2015", url: "/tiles/huaihe/augustndvi/{z}/{x}/{y}.png" },
      { name: "December NDVI 2015", url: "/tiles/huaihe/decndvi/{z}/{x}/{y}.png" },
      { name: "40 CM Soil Moisture", url: "/tiles/huaihe/sm/{z}/{x}/{y}.png" },
    ],
    zoom: 7,
    center: [116.67, 33.76] as [number, number],
  },
  {
    title: "2022 Flood Analysis (Sindh, Pakistan)",
    description:
      "In this project, I assessed the 2022 flood's impact on agricultural land in Sindh, Pakistan. Project integrate datasets including the Dynamic World V1 Land Use/Land Cover dataset (WRI, August 2022), DEM data from HydroSHEDS (2000), Global Surface Water data (1984–2022), CHIRPS precipitation data (2022), and Sentinel-1 SAR GRD data (ESA) to map flood extent and evaluate its effects on productivity and food security. Below are the Cropland before and after flood rasters, Rough Flood Extent, and Sindh's surface water.",
    layers: [
      { name: "Cropland Before Flood", url: "/tiles/sindhflood/cropbeforeflood/{z}/{x}/{y}.png" },
      { name: "Cropland After Flood", url: "/tiles/sindhflood/cropafterflood/{z}/{x}/{y}.png" },
      { name: "Flood Extent", url: "/tiles/sindhflood/floodextent/{z}/{x}/{y}.png" },
      { name: "Surface Water", url: "/tiles/sindhflood/swater/{z}/{x}/{y}.png" },
    ],
    zoom: 7,
    center: [68.0958, 26.1704] as [number, number],
  },
]

const extraProjects = [
  {
    title: "Comparative Urban Air Quality Analysis Tool",
    description: "This interactive Earth Engine application enables users to monitor and compare air quality across major cities by visualizing pollutant concentrations over two distinct time periods. Users can select a city, set custom date ranges, and toggle multiple atmospheric layers to observe changes in air composition, facilitating detailed before-and-after analyses.",
    image: "/images/aqi.png",
    link: "https://code.earthengine.google.com/5fb39c7cffba934b1725efb0a748e885"
  },
  {
    title: "Vegetation Health Index (VHI) Monitoring Tool",
    description: "This interactive Earth Engine tool computes the Vegetation Health Index (VHI) by analyzing MODIS NDVI and LST data over user-defined date ranges and geographic areas. Users can select a country as the area of interest and visualize vegetation health through a color-coded map, providing insights into tree and ecosystem vitality.",
    image: "/images/vhi.png",
    link: "https://code.earthengine.google.com/9860f73b3be455953ef07dd81e629bfd"
  },
  {
    title: "Wildfire Impact Assessment via dNBR Calculation",
    description: "This interactive Earth Engine application quantifies wildfire impacts by calculating the difference in Normalized Burn Ratio (dNBR) between pre-fire and post-fire periods using Landsat 8 data. Users can select custom date ranges and areas of interest to generate composite images that highlight burned regions. The app visualizes the extent of fire damage and computes an approximate burned area, offering valuable insights for wildfire management and environmental monitoring.",
    image: "/images/wf.png",
    link: "https://code.earthengine.google.com/e4d3d4a027d8be622ac0d597535db88a"
  },
  {
    title: "AI Image Segmentation and GeoTIFF Downloader App",
    description: "This application enables users to retrieve high-resolution GeoTIFF imagery from Google Satellite basemaps and perform semantic segmentation via the Segment-Geospatial Python library. It automates the extraction of geospatial features, generating vectorized GeoJSON outputs for downstream analysis. The tool integrates raster data acquisition, Deep Learning-based segmentation, and vector data export into a streamlined workflow. This solution optimizes geospatial analysis workflows by bridging satellite imagery acquisition and feature extraction.",
    link: "https://github.com/Fahadk2103/Segmentation-App",
    image: "/images/seg3.png",
  },
]

const certificates = [
  {
    title: "Pakistan Meteorological Department Internship Certificate",
    description: "During my internship I worked on Google Earth Engine (NDWLNDVI Index For Punjab), ArcGIS (Interpolation, Masking, Raster Analysis), PMD Stations Data Analysis, and Crop Water Requirement: Crop Monitoring Using Satellite Based Indices",
    image: "/images/pmd.png"
  },
  {
    title: "Experience Certificate from SpatialOX PVT LTD",
    description: "In this tensure I worked on webGIS based format converter app. I also contributed in the map generation process of the SpatialOX product MapBakes.",
    image: "/images/ox.png"
  },
  {
    title: "Best Performance Award from JABS PVT LTD",
    description: "I received this award for my outstanding performance in the Remote Sensing techniques in the multiple projects from American JABS PVT LTD and SpatialOX PVT LTD",
    image: "/images/jab.jpg"
  }
]

export default function Projects() {
  return (
    <>
      <section id="projects" className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-12">Featured Projects</h2>
          <div className="space-y-20">
            {projects.map((project, index) => (
              <div key={index} className="tech-card backdrop-blur-sm">
                <h3 className="text-2xl font-semibold mb-4 text-primary">{project.title}</h3>
                <p className="text-foreground/80 mb-6">{project.description}</p>
                <Map layers={project.layers} zoom={project.zoom} center={project.center} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="extra-projects" className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-12">Extra Projects</h2>
          <div className="space-y-8">
            {extraProjects.map((project, index) => (
              <div key={index} className="bg-card rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-border/50">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 p-4">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 md:h-full object-contain rounded-lg"
                    />
                  </div>
                  <div className="md:w-2/3 p-6 md:p-8">
                    <h3 className="text-xl md:text-2xl font-semibold mb-4 text-primary">
                      {project.title}
                    </h3>
                    <p className="text-foreground/80 mb-6">
                      {project.description}
                    </p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary hover:text-highlight transition-colors duration-300"
                    >
                      View Project <ArrowRight className="ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="certificates" className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-12">Certificates and Awards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <div key={index} className="bg-muted rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-border/50">
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-48 object-contain p-2"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-primary">
                    {cert.title}
                  </h3>
                  <p className="text-foreground/80">
                    {cert.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

