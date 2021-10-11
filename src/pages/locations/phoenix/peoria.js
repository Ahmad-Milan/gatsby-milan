import React from 'react'
import Layout, {city} from '../../../components/layout/Layout'
import Hero from '../../../components/locations/Hero'

function Store({location}) {

  const store = city.locations.find(store => `/locations/${city.pathname}/${store.pathname}/` === location.pathname)

  return (
    <Layout>
      <Hero city={city} store={store} />
      
    </Layout>
  )
}

export default Store
