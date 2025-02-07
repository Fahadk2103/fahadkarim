"use client"

import { useEffect, useRef, useState } from "react"
import "ol/ol.css"
import Map from "ol/Map"
import View from "ol/View"
import TileLayer from "ol/layer/Tile"
import XYZ from "ol/source/XYZ"
import { fromLonLat } from "ol/proj"

interface Layer {
  name: string
  url: string
}

interface MapProps {
  layers: Layer[]
  zoom?: number
  center?: [number, number]
}

export default function MapComponent({ layers, zoom = 2, center = [0, 0] }: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const [map, setMap] = useState<Map | null>(null)
  const [activeLayers, setActiveLayers] = useState<string[]>([layers[0]?.name])

  useEffect(() => {
    if (!mapRef.current) return

    const initialMap = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new XYZ({
            url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
            maxZoom: 19,
          }),
        }),
      ],
      view: new View({
        center: fromLonLat(center),
        zoom: zoom,
      }),
    })

    setMap(initialMap)

    return () => initialMap.setTarget(undefined)
  }, [zoom, center])

  useEffect(() => {
    if (!map) return

    // Remove all existing overlay layers
    map
      .getLayers()
      .getArray()
      .slice(1)
      .forEach((layer) => map.removeLayer(layer))

    // Add active layers
    activeLayers.forEach((layerName) => {
      const layer = layers.find((l) => l.name === layerName)
      if (layer) {
        map.addLayer(
          new TileLayer({
            source: new XYZ({
              url: layer.url,
              maxZoom: 19,
            }),
          }),
        )
      }
    })
  }, [map, layers, activeLayers])

  const toggleLayer = (layerName: string) => {
    setActiveLayers((prev) =>
      prev.includes(layerName) ? prev.filter((name) => name !== layerName) : [...prev, layerName],
    )
  }

  return (
    <div className="relative">
      <div ref={mapRef} className="w-full h-96"></div>
      <div className="absolute top-4 right-4 flex flex-col gap-2">
        {layers.map((layer, index) => (
          <button
            key={index}
            onClick={() => toggleLayer(layer.name)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ease-in-out border ${
              activeLayers.includes(layer.name)
                ? "bg-blue-500 text-white border-blue-600 shadow-md"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100 hover:border-gray-400"
            }`}
          >
            {layer.name}
          </button>
        ))}
      </div>
    </div>
  )
}

