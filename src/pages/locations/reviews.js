import React from 'react'
import Layout, {siteData} from '../../components/templates/Layout'
import { Helmet } from 'react-helmet'
import ReviewsHero from '../../components/locations/reviews/ReviewsHero'

function ReviewsPage() {

  return (
    <Layout>
      <Helmet>
        <script src={process.env.ReviewsOnOurWebsiteSrc} type="text/javascript"></script>
      </Helmet>
      <ReviewsHero siteData={siteData} />
    </Layout>
  )
}

export default ReviewsPage
