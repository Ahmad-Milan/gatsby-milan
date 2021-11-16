import React, {useContext} from 'react'
import { Accordion, Card } from 'react-bootstrap'
import { Link } from 'gatsby'
import { useAccordionButton } from 'react-bootstrap/AccordionButton'
import AccordionContext from 'react-bootstrap/AccordionContext'
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa'
import openStoresDisplayed from '../../../functions/general/openStoresDisplayed'
import { MILAN_IMG_PATH} from '../../../constants/constants'

function ContextAwareToggle({ children, eventKey, callback }) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey),
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <div
      onClick={decoratedOnClick} role="button" tabIndex="0"
      onKeyDown={e => e.key === 'Enter' && decoratedOnClick}
      className="d-flex flex-column justify-content-between">
        {children}
      <aside className="text-end">
        <span className="pe-2">Answer</span>
        {isCurrentEventKey ? <FaMinusCircle /> : <FaPlusCircle />}
      </aside>
    </div>
  );
}

function Faqs() {
  const totalOpenStoresNum = openStoresDisplayed()
  return (
    <section id="faqs" className="full-section">
      <div className="container">
        <Accordion className="row">
          <div className="d-flex flex-wrap mx-auto p-3 text-white rounded" style={{backgroundColor: '#D0F1FA'}}>
            <Card className="col-12 col-lg-12">
              <div className="wrapper darker-blue-bg">
                <Card.Header>
                  <ContextAwareToggle eventKey="0">
                    <h3 className="h5 mb-lg-4">Is laser hair removal safe?</h3>
                  </ContextAwareToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body className="row mx-0">
                    <div className="col-12 col-lg-8 px-0">
                      <p>Your safety is a top priority at Milan! We use the safest laser in the industry, and take special care to prepare you for laser hair removal with our Pre and Post care guide.</p>
                      <p>Additionally, all of our treatment providers are <strong>Authorized Candela Practitioners</strong> who have been extensively trained by Independent Candela Trainers and are supervised by medical doctors. Their comprehensive training touches on everything from laser physics to medical conditions affecting hair growth, so you can rest assured that you’re in good hands with us!</p>
                    </div>
                    <div className="col-12 col-lg-4 text-center pt-2 pt-sm-0 px-0 pb-2">
                      <img className="img-fluid" src={`${MILAN_IMG_PATH}shared/other/Candela-Badge.png`}
                        alt="Candela Badge" style={{maxHeight: '200px'}} /> 
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </div>
            </Card>

            <Card className="col-12 col-lg-4">
              <div className="wrapper">
                <Card.Header>
                  <ContextAwareToggle eventKey="1">
                    <h3 className="h5 mb-lg-4">Does laser hair removal really work?</h3>
                  </ContextAwareToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <p>Yes! There are so many ways to temporarily remove hair, but for permanent results, laser hair removal (not IPL!) is the safest way to make unwanted body hair a thing of the past!</p>
                  </Card.Body>
                </Accordion.Collapse>
              </div>
            </Card>

            <Card className="col-12 col-lg-4">
              <div className="wrapper">
                <Card.Header>
                  <ContextAwareToggle eventKey="2">
                    <h3 className="h5 mb-lg-4">How permanent is laser hair removal?</h3>
                  </ContextAwareToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    <p>Hair is gone forever! Most of our clients are 95-100% hair-free in treated areas in 7-10 sessions. Hormones, pregnancy and the odd stubborn hair that just won’t quit, is why we include our <Link to="/specials/#guarantee">Unlimited Package</Link> with every purchase—so you never pay touch-up fees or need to buy additional sessions.</p>
                  </Card.Body>
                </Accordion.Collapse>
              </div>
            </Card>

            <Card className="col-12 col-lg-4">
              <div className="wrapper">
                <Card.Header>
                  <ContextAwareToggle eventKey="3">
                    <h3 className="h5 mb-lg-4">Is laser hair removal safe &amp; effective on dark skin?</h3>
                  </ContextAwareToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>
                    <p >At Milan — Yes! Our laser hair removal works on all skin tones. Some hair removal methods are limited to light skin tones. But our laser is precise enough to target the hair follicle, and eliminate hair at the root without damaging your skin. Even the darkest of skin tones can be treated.</p>
                    <p><Link to="/process/quiz/">See if you’re a candidate for Laser Hair Removal.</Link></p>
                  </Card.Body>
                </Accordion.Collapse>
              </div>
            </Card>

            <Card className="col-12 col-lg-8">
              <div className="wrapper dark-blue-bg">
                <Card.Header>
                  <ContextAwareToggle eventKey="4">
                    <h3 className="h5 mb-lg-4">How effective are at-home laser hair removal devices?</h3>
                  </ContextAwareToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="4">
                  <Card.Body>
                    <p>At-home devices use mostly IPL technology which is not as effective as our lasers. These devices are much smaller than our lasers &amp; don’t offer the cooling mist to ease your discomfort. Compared to our treatments, at-home devices are more time consuming, more painful and produce inferior results. Don’t be fooled by cheap products that take up your time without producing real effects.</p>
                    <p>A recent study of an FDA-approved Silk’n laser hair removal home device was published by Lasers in Surgery and Medicine, a leading scientific laser journal. The people in the study had 4 to 6 treatments each. 4 weeks after the last treatment they showed an average of 36% hair reduction. However, 12 weeks later the hair had mostly returned.</p>
                  </Card.Body>
                </Accordion.Collapse>
              </div>
            </Card>

            <Card className="col-12 col-lg-4">
              <div className="wrapper dark-blue-bg">
                <Card.Header>
                  <ContextAwareToggle eventKey="5">
                    <h3 className="h5 mb-lg-4">What body hair can I have removed with a laser?</h3>
                  </ContextAwareToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="5">
                  <Card.Body>
                    <p>We can help you permanently get rid of unwanted hair just about anywhere on your body. Whether it’s your underarms, lip/chin, back, chest, bikini area — basically anywhere except the scalp and right around your eyes — we can help you get the smooth skin you’ve always wanted!</p>
                  </Card.Body>
                </Accordion.Collapse>
              </div>
            </Card>

            <Card className="col-12 col-lg-12">
              <div className="wrapper darker-blue-bg">
                <Card.Header>
                  <ContextAwareToggle eventKey="6">
                    <h3 className="h5 mb-lg-4">Does laser hair removal work for blonde or red hairs?</h3>
                  </ContextAwareToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="6">
                  <Card.Body>
                    <p>Our lasers usually do, but the best way to determine if it will work for you is to <u><Link to="#consultation" className="main-blue">come in for a free consultation.</Link></u> If your hair is too light to work, we will let you know. Our #1 priority is customer satisfaction, so we absolutely will not sell you laser hair removal if it won’t produce absolutely stellar results!</p>
                    <p><strong>Blondes:</strong> Laser hair removal will work on most people with blonde hair as long as the hair isn’t “bleach blonde” or “platinum” in color.</p>
                    <p><strong>Reds:</strong> It will frequently work on red hair as long as there is some pigment for the laser to capture.</p>
                    <p><strong>Gray:</strong> Gray hair is, well, a gray area! We would have to see your hair to determine exactly how much pigment is left for the laser to target. This can be determined during your consultation!</p>
                    <p><Link to="/process/quiz/">See if you’re a candidate for Laser Hair Removal.</Link></p>
                  </Card.Body>
                </Accordion.Collapse>
              </div>
            </Card>

            <Card className="col-12 col-lg-4">
              <div className="wrapper dark-blue-bg">
                <Card.Header>
                  <ContextAwareToggle eventKey="7">
                    <h3 className="h5 mb-lg-4">How long does a treatment take?</h3>
                  </ContextAwareToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="7">
                  <Card.Body>
                    <p>Treatments are so quick you could do them during lunch! A lip or underarm treatment can be done in less than 10 minutes!</p>
                  </Card.Body>
                </Accordion.Collapse>
              </div>
            </Card>

            <Card className="col-12 col-lg-8">
              <div className="wrapper dark-blue-bg">
                <Card.Header>
                  <ContextAwareToggle eventKey="8">
                    <h3 className="h5 mb-lg-4">Why laser hair removal over waxing?</h3>
                  </ContextAwareToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="8">
                  <Card.Body>
                    <p>Laser hair removal treatments yield permanent results while waxing, shaving, or depilatories will only give you temporary results. Waxing is significantly more painful than laser hair removal, and while laser feels like a rubber-band snap we’ve never had a client leave because of how a treatment feels.</p>
                    <p>Once you’ve completed your laser hair removal treatments, you’re done forever. Unlike other hair removal solutions, you won’t have to come back monthly, for years on end. You’ll save thousands of dollars and hundreds of hours in time.</p>
                  </Card.Body>
                </Accordion.Collapse>
              </div>
            </Card>

            <Card className="col-12 col-lg-12">
              <div className="wrapper darker-blue-bg">
                <Card.Header>
                  <ContextAwareToggle eventKey="9">
                    <h3 className="h5 mb-lg-4">Can I get laser hair removal if I have a tattoo?</h3>
                  </ContextAwareToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="9">
                  <Card.Body>
                    <p>Yes! If you have a tattoo, you can still get laser hair removal but not directly over the tattoo—the same goes with removed tattoos. This is because, during treatment, the laser targets the pigment in your hair follicle to safely and effectively eliminate your hair at the root. However, the laser can’t tell the difference between ink pigment and hair follicle pigment. So if treated over, the ink pigment could scatter and result in a burn as it tries to escape the skin.</p>
                    <p>If you’re thinking about getting a tattoo, then laser hair removal is a great option to get beforehand. You can get a clean slate, so to speak, over the area you want tattooed.</p>
                    <p>It’s very important to disclose tattoos and removed tattoos before beginning treatments.</p>
                  </Card.Body>
                </Accordion.Collapse>
              </div>
            </Card>

            <Card className="col-12 col-lg-8">
              <div className="wrapper dark-blue-bg">
                <Card.Header>
                  <ContextAwareToggle eventKey="10">
                    <h3 className="h5 mb-lg-4">How many treatments will I need?</h3>
                  </ContextAwareToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="10">
                  <Card.Body>
                    <p>With our <Link to="/specials/#guarantee">Unlimited Package</Link> (included with every area), most people need between 7-10 treatments to get 95%+ hair removal. The best part of this package – besides never shaving again – is that no matter how many treatments you need, it’s the same price!</p>
                    <p>At Milan, you’ll never worry about buying additional treatments or paying touch-up fees. Unlike other places, once you’ve purchased an area with us it’s covered for the rest of your life.</p>
                    <p>Each treatment is completed 5 weeks apart.</p>
                  </Card.Body>
                </Accordion.Collapse>
              </div>
            </Card>

            <Card className="col-12 col-lg-4">
              <div className="wrapper dark-blue-bg">
                <Card.Header>
                  <ContextAwareToggle eventKey="11">
                    <h3 className="h5 mb-lg-4">How much does laser hair removal cost?</h3>
                  </ContextAwareToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="11">
                  <Card.Body>
                    <p>Payments can be as low as $29 a month with our 24-month 0% APR payment plans. Instead of spending $60-$70 a month to get your legs waxed for years on end, you’ll finish your payment plan and be hair-free for life.</p>
                    <p><Link to="/specials/estimate/">Get a custom quote</Link> today!</p>
                  </Card.Body>
                </Accordion.Collapse>
              </div>
            </Card>

            <Card className="col-12 col-lg-4">
              <div className="wrapper">
                <Card.Header>
                  <ContextAwareToggle eventKey="12">
                    <h3 className="h5 mb-lg-4">How do I know if I qualify for a payment plan?</h3>
                  </ContextAwareToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="12">
                  <Card.Body>
                    <p>Don’t worry, <strong>everyone is approved </strong>for at least one of our payment plans! You can even find out which payment options you pre-qualify for before coming in for a free consultation. Filling out the <u><a href="https://www.milanlaser.com/finance/" target="_blank" rel="noreferrer">prequalification application</a></u> <strong>does not affect your credit score,</strong> takes less than 2 minutes, and provides you with private results right away!</p>
                  </Card.Body>
                </Accordion.Collapse>
              </div>
            </Card>

            <Card className="col-12 col-lg-4">
              <div className="wrapper">
                <Card.Header>
                  <ContextAwareToggle eventKey="13">
                    <h3 className="h5 mb-lg-4">What does laser body hair removal feel like?</h3>
                  </ContextAwareToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="13">
                  <Card.Body>
                    <p>We’ve never had anyone leave because of how a laser pulse feels on the body. Most clients describe the sensation similar to the feeling of being snapped with a rubber band. Compared to waxing the treatment has very little discomfort. Our state of the art laser uses a cooling spray to safely cool the skin in the milliseconds prior to, as well as after, each laser pulse, which decreases discomfort as well.</p>
                  </Card.Body>
                </Accordion.Collapse>
              </div>
            </Card>

            <Card className="col-12 col-lg-4">
              <div className="wrapper">
                <Card.Header>
                  <ContextAwareToggle eventKey="14">
                    <h3 className="h5 mb-lg-4">Where can I find Laser Hair Removal near me?</h3>
                  </ContextAwareToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="14">
                  <Card.Body>
                    <p>We have more than {totalOpenStoresNum} convenient Locations across the country – making us the best solution to getting rid of your unwanted hair. <Link to="/locations/">Locate the Milan closest to you</Link> and take the first step toward never shaving again!</p>
                  </Card.Body>
                </Accordion.Collapse>
              </div>
            </Card>

            <Card className="col-12 col-lg-4">
              <div className="wrapper dark-blue-bg">
                <Card.Header>
                  <ContextAwareToggle eventKey="15">
                    <h3 className="h5 mb-lg-4">How should I prepare for laser hair removal?</h3>
                  </ContextAwareToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="15">
                  <Card.Body>
                    <ul className="ps-3" style={{listStyle: 'disc'}}>
                      <li>You can shave! In fact, we want you to shave the day before or day-of your treatment.</li>
                      <li>Your skin needs to be it’s natural skin tone (no sun, no tanning beds, no self-tanner).</li>
                      <li>Come in for your treatment with clean skin (no lotions or makeup).</li>
                    </ul>
                  </Card.Body>
                </Accordion.Collapse>
              </div>
            </Card>

            <Card className="col-12 col-lg-8">
              <div className="wrapper dark-blue-bg">
                <Card.Header>
                  <ContextAwareToggle eventKey="16">
                    <h3 className="h5 mb-lg-4">What are the risks of removing hair by laser?</h3>
                  </ContextAwareToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="16">
                  <Card.Body>
                    <p>Our lasers are incredibly safe, and you’re treated by highly trained medical professionals. We provide eye protection and take all necessary precautions so your treatments are effective, yet safe. Laser hair removal is a simple procedure and there’s almost no recovery time so you can return to work, apply makeup or be active immediately after your treatment. We only ask that you wear sunscreen to protect the treated area.</p>
                  </Card.Body>
                </Accordion.Collapse>
              </div>
            </Card>

            <Card className="col-12 col-lg-12">
              <div className="wrapper darker-blue-bg">
                <Card.Header>
                  <ContextAwareToggle eventKey="17">
                    <h3 className="h5 mb-lg-4">Can I get laser hair removal and maintain my personal or religious modesty standards?</h3>
                  </ContextAwareToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="17">
                  <Card.Body>
                    <p>At Milan, we do everything that we can to make you as comfortable as possible while helping you say goodbye to unwanted hair forever. We know that everyone has their modesty standards—whether they are religiously based or simply a personal choice—and we don’t want you to feel like you have to choose between being modest and being hairy.</p>
                    <p>That’s why we do our best to maintain your modesty throughout your laser hair removal journey. Here’s how we protect your modesty:</p>
                    <ul>
                      <li><strong>Private Consultations.</strong> During your consultation, you’ll have the opportunity to have all of your laser hair removal questions answered in a one-on-one setting with a laser hair removal expert.</li>
                      <li><strong>Female Providers.</strong> We have highly-trained female medical professionals at every location.</li>
                      <li><strong>Staying Covered.</strong> For many body areas, you can stay fully clothed during the treatment and only have the area being treated showing. Areas like the upper lip, chin, underarms, lower legs, and arms, can all be done without needing to undress or reveal any other parts of your body.</li>
                      <li><strong>Treatment Robes.</strong> If you need to remove any clothing to have your treatment completed, we provide robes for you to wear to help keep the rest of your body covered. While you are changing into the robe in the treatment room, no one else is in the room, and the treatment provider will knock to request permission to enter once you have put the robe on and are on the treatment table.</li>
                    </ul>
                  </Card.Body>
                </Accordion.Collapse>
              </div>
            </Card>

          </div>
        </Accordion>
      </div>
    </section>


  );
}

export default Faqs
