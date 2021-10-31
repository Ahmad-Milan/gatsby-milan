import React from 'react'
import Layout from '../../components/templates/Layout'
import { Link } from 'gatsby'

function SpecialsPage() {
  return (
    <Layout>
      <div className="mt-5 pt-5"></div>
      <h1>Specials Page</h1>
      
      <Link to="/specials/estimate/">Customm Quote</Link>
    </Layout>
  )
}

export default SpecialsPage
