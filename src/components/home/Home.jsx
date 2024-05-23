import React from "react"
import Hero from "./hero/Hero"
import Location from "./location/Location"
import Recent from "../recent/Recent"
import Applications from "../applications/Applications" 

const Home = () => {
  return (
    <>
      <Hero />
      <Recent/>
      <Location />
      <Applications />
    </>
  )
}

export default Home
