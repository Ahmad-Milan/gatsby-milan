import React from 'react'
import Layout, {city} from '../../components/templates/Layout'
import { Helmet } from 'react-helmet'
import ReviewsHero from '../../components/locations/reviews/ReviewsHero'

function ReviewsPage() {

  return (
    <Layout>
      <Helmet>
        <script src={process.env.ReviewsOnOurWebsiteSrc} type="text/javascript"></script>
      </Helmet>
      <ReviewsHero city={city} />
    </Layout>

  )
}

export default ReviewsPage
