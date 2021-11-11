import React, {useState} from 'react'
import Layout, {siteData}  from '../../components/templates/Layout'
import SpecialsHero from '../../components/specials/SpecialsHero'
import SignUpModal from '../../components/modals/SignUpModal'
import MilanCredit from '../../components/specials/MilanCredit'

function SpecialsPage() {
  const [showSignUpModal, setShowSignUpModal] = useState(false)

  return (
    <Layout>
      <SpecialsHero siteData={siteData} setShowSignUpModal={setShowSignUpModal} />
      {
        showSignUpModal &&
        <SignUpModal showSignUpModal={showSignUpModal} setShowSignUpModal={setShowSignUpModal} />
      }
      <MilanCredit setShowSignUpModal={setShowSignUpModal} />
    </Layout>
  )
}

export default SpecialsPage
