import React from 'react'
import Layout from '../../components/layout/Layout'
import Quote from '../../components/forms/quote/Quote'
import scrollTo from 'gatsby-plugin-smoothscroll'

function estimate() {
  const scrollTop = () => scrollTo('#custon-quote')
  return (
    <Layout>
      <section id="custon-quote" className="full-section background hero light-blue-bg">
        <div className="container">
          <div id="quote-header">
            <h1 className="text-center mb-3">Get a Custom Quote</h1>
            <h2 className="h4 text-center">Fill out the form below to request your quote.</h2>
          </div>
          
          <div className="row justify-content-center">
            <div className="quote-wrapper col-lg-10 mx-auto py-3 mt-3 bg-white shadow">
              <div className="my-3 text-center">
                <img src="https://www.milanlaser.com/images/lp/logo-blue-1.png" alt="Milan Laser Hair Removal Logo" style={{maxWidth: "180px"}}/>
              </div>

              <Quote scrollTop={scrollTop}  />

            </div>
          </div>

        </div>
      </section>
    </Layout>
  )
}

export default estimate
