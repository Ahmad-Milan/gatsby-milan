import React, {useContext} from 'react'
import { Accordion, Card } from 'react-bootstrap'
import { Link } from 'gatsby'
import { useAccordionButton } from 'react-bootstrap/AccordionButton'
import AccordionContext from 'react-bootstrap/AccordionContext'
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa'

function ContextAwareToggle({ children, eventKey, callback }) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey),
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <div
      type="button"
      onClick={decoratedOnClick}
      className="text-right">
        {children}
        <span className="pe-2">Answer</span>
        {isCurrentEventKey ? <FaMinusCircle /> : <FaPlusCircle />}
      </div>
  );
}

function Faqs() {
  return (
    <section id="faqs" className="full-section">
      <div className="container">
        <Accordion className="row">
          <div className="d-flex flex-wrap mx-auto p-3 text-white rounded" style={{backgroundColor: '#D0F1FA'}}>
            <Card className="col-lg-12">
              <div className="wrapper darker-blue-bg">
                <Card.Header>
                  <ContextAwareToggle eventKey="0">
                    <h3 className="h5 mb-lg-4">Is laser hair removal safe?</h3>
                  </ContextAwareToggle>
                </Card.Header>
              </div>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <div className="col-lg-8 px-0">
                    <p>Your safety is a top priority at Milan! We use the safest laser in the industry, and take special care to prepare you for laser hair removal with our Pre and Post care guide.</p>
                    <p>Additionally, all of our treatment providers are <strong>Authorized Candela Practitioners</strong> who have been extensively trained by Independent Candela Trainers and are supervised by medical doctors. Their comprehensive training touches on everything from laser physics to medical conditions affecting hair growth, so you can rest assured that you’re in good hands with us!</p>
                  </div>
                  <div className="col-lg-4 text-center px-0 pb-4">
                    <img className="img-fluid" id="candela" src="https://milanlaser.com/images/Candela-Badge.png" alt="Candela Badge" style={{maxHeight: '200px'}} /> 
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card className="col-lg-4">
              <div className="wrapper darker-blue-bg">
                <Card.Header>
                  <ContextAwareToggle eventKey="1">
                    <h3 className="h5 mb-lg-4">Does laser hair removal really work?</h3>
                  </ContextAwareToggle>
                </Card.Header>
              </div>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <p>Yes! There are so many ways to temporarily remove hair, but for permanent results, laser hair removal (not IPL!) is the safest way to make unwanted body hair a thing of the past!</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card className="col-lg-4">
              <div className="wrapper darker-blue-bg">
                <Card.Header>
                  <ContextAwareToggle eventKey="2">
                    <h3 className="h5 mb-lg-4">How permanent is laser hair removal?</h3>
                  </ContextAwareToggle>
                </Card.Header>
              </div>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  <p>Hair is gone forever! Most of our clients are 95-100% hair-free in treated areas in 7-10 sessions. Hormones, pregnancy and the odd stubborn hair that just won’t quit, is why we include our <u><Link to="/specials/#guarantee">Unlimited Package</Link></u> with every purchase—so you never pay touch-up fees or need to buy additional sessions.</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card className="col-lg-4">
              <div className="wrapper darker-blue-bg">
                <Card.Header>
                  <ContextAwareToggle eventKey="3">
                    <h3 className="h5 mb-lg-4">Is laser hair removal safe &amp; effective on dark skin?</h3>
                  </ContextAwareToggle>
                </Card.Header>
              </div>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
                  <p >At Milan — Yes! Our laser hair removal works on all skin tones. Some hair removal methods are limited to light skin tones. But our laser is precise enough to target the hair follicle, and eliminate hair at the root without damaging your skin. Even the darkest of skin tones can be treated.</p>
                  <u><Link to="/process/quiz/">See if you’re a candidate for Laser Hair Removal.</Link></u>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </div>
        </Accordion>
      </div>
    </section>


  );
}

export default Faqs
