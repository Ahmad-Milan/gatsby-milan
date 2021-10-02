import React from 'react'
import Layout, {siteData, city} from '../../components/layout/Layout'
import Lp_Modal from '../../components/modals/Lp_Modal'


function index() {

  return (
    <Layout>
      <div className="full-section background hero">
      <Lp_Modal/>
      </div>
      
    </Layout>
  )
}

export default index
