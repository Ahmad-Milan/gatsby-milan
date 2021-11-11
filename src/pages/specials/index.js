import React, {useState} from 'react'
import Layout, {siteData}  from '../../components/templates/Layout'
import { Link } from 'gatsby'
import SpecialsHero from '../../components/specials/SpecialsHero'
import SignUpModal from '../../components/modals/SignUpModal'

function SpecialsPage() {
  const [showSignUpModal, setShowSignUpModal] = useState(false)

  return (
    <Layout>
      <SpecialsHero siteData={siteData} setShowSignUpModal={setShowSignUpModal} />
      {
        showSignUpModal &&
        <SignUpModal showSignUpModal={showSignUpModal} setShowSignUpModal={setShowSignUpModal} />
      }
      <Link to="/specials/estimate/">Customm Quote</Link>
    </Layout>
  )
}

export default SpecialsPage
