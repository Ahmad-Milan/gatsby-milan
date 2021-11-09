import React from 'react'
import Layout, {siteData} from '../../components/templates/Layout'
import ContactHero from '../../components/locations/contact/ContactHero'
import SocialMedia from '../../components/locations/contact/SocialMedia'

function ContactPage() {
  return (
    <Layout>
      <ContactHero siteData={siteData}/>
      <span id="facebook"></span>
      <SocialMedia siteData={siteData} />
    </Layout>
  )
}

export default ContactPage