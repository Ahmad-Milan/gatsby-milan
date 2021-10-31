import React from 'react'
import Layout from '../../components/templates/Layout'
import AskNewQuestion from '../../components/process/faqs/AskNewQuestion'
import Faqs from '../../components/process/faqs/Faqs'
import FaqsHero from '../../components/process/faqs/FaqsHero'
import Divider from '../../components/shared/Divider'

function FaqsPage() {
  return (
    <Layout>
      <FaqsHero />
      <Divider />
      <Faqs />
      <AskNewQuestion />
    </Layout>
  )
}

export default FaqsPage
