import React from 'react'
import {statsData} from "@//data/landing"
const StatsSection = () => {
  return (
    <div className="bg-gray-900 text-white py-16 px-6 mt-10">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Achievements</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-bold text-yellow-400">{stat.value}</span>
              <span className="text-lg text-gray-300">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default StatsSection
