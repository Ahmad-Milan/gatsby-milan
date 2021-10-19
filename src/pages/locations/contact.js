import React from 'react'
import Layout, {siteData, city} from '../../components/layout/Layout'
import ContactHero from '../../components/locations/contact/ContactHero'
import './styles.css'

function ContactPage() {

  return (
    <Layout>
      <ContactHero siteData={siteData} city={city} />
    </Layout>

  )
}

export default ContactPage