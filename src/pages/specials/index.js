import React from 'react'
import Layout, {siteData}  from '../../components/templates/Layout'
import { Link } from 'gatsby'
import SpecialsHero from '../../components/specials/SpecialsHero'

function SpecialsPage() {
  return (
    <Layout>
      <SpecialsHero siteData={siteData} />
      
      <Link to="/specials/estimate/">Customm Quote</Link>
    </Layout>
  )
}

export default SpecialsPage
