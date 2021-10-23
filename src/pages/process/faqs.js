import React from 'react'
import Layout from '../../components/layout/Layout'
import Faqs from '../../components/process/faqs/Faqs'
import FaqsHero from '../../components/process/faqs/FaqsHero'
import Divider from '../../components/shared/Divider'

function FaqsPage() {
  return (
    <Layout>
      <FaqsHero />
      <Divider />
      <Faqs />
    </Layout>
  )
}

export default FaqsPage
