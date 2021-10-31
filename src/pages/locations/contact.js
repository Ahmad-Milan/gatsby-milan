import React from 'react'
import Layout, {siteData, city} from '../../components/templates/Layout'
import ContactHero from '../../components/locations/contact/ContactHero'
import SocialMedia from '../../components/locations/contact/SocialMedia'
import './styles.css'

function ContactPage() {

  return (
    <Layout>
      <ContactHero siteData={siteData} city={city} />
      <span id="facebook"></span>
      <SocialMedia city={city} />
    </Layout>

  )
}

export default ContactPage