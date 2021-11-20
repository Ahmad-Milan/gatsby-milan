import React from "react"
import HomeHero from "../components/home/HomeHero"
import Layout, {siteData} from '../components/templates/Layout'

import "../styles/main.css"

export default function Home() {
  return (
    <Layout>
      <HomeHero siteData={siteData} />
    </Layout>
  )
}