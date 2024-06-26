import React from 'react'
import { Col, Row, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import HeaderMain from '../Components/HeaderMain'


function LandingPage() {
  return (
    <>
      <HeaderMain />
      <div className='w-full h-full bg-black'>
          <div>
            <Row>
              <Col className='w-full flex items-center' sm={12} lg={6}>
                <div className='md:ms-10 mt-5'>
                  <h1 className='text-center'>Welcome to <span className='text-red-700 font-bold'>Black Pepper</span></h1>
                  <p className='mt-4 text-center'>We understand how much taste matters. The spicier, the better. we bring the spice, bring the adventure. Believe ! Nobody does it better.</p>
                  <div className='flex justify-center mt-5'>
                    <Link to={'/menu'}><Button className='btn btn-lg text-black' style={{backgroundColor:"#C53030",border:'0'}}><span className='font-bold px-2'>Explore the Menu</span></Button></Link>
                  </div>
                </div>
              </Col>
              <Col sm={12} lg={6}>
                <div className='w-full h-full flex justify-center'>
                  <img className='w-11/12 h-11/12' src="https://media0.giphy.com/media/3fg5liRZ7N4Ur5P5uV/source.gif" alt="" />
                </div>
              </Col>
            </Row>
          </div>
  
          {/* Our Graciousness*/}
          <div className='mt-7'>
            <h4 className='text-center text-yellow-400 font-extrabold md:-ms-5'>OUR GRACIOUSNESS</h4>
            <div className='mt-5'>
              <Row>
                <Col sm={12} lg={4}>
                  {/* card 1 */}
                  <Card className='ms-5 p-4 shadow mb-5' style={{ width: '18rem' }}>
                    <Card.Img className='ms-3' style={{height:'200px',width:'200px'}} variant="top" src="https://www.finedininglovers.com/sites/g/files/xknfdk626/files/2021-07/chef%20(1).jpg" />
                    <Card.Body className='mt-4'>
                      <Card.Title><span className='font-bold'>Master Chefs</span></Card.Title>
                      <Card.Text className='mt-2'>
                        <p className='text-black h-15'>
                          Our Chefs are highly skillfull certified cooks.They experiment with dishes, plan menus and prepare food.Our BackBone.
                        </p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col sm={12} lg={4}>
                  {/* card 2 */}
                  <Card className='ms-5 p-4 shadow mb-5' style={{ width: '18rem' }}>
                    <Card.Img className='ms-3' style={{height:'200px',width:'200px'}} variant="top" src="https://austinot.com/wp-content/uploads/2015/12/Geraldines-Interior-1024x682.jpg" />
                    <Card.Body className='mt-4'>
                    <Card.Title><span className='font-bold'>Great Ambience</span></Card.Title>
                      <Card.Text className='mt-2'>
                        <p className='text-black h-15'>
                          We have the fine dining in the world that provides you the pleasant and lovely atmosphere to enjoy your meal with great music
                        </p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col sm={12} lg={4}>
                  {/* card 3 */}
                  <Card className='ms-5 p-4 shadow mb-5' style={{ width: '18rem' }}>
                    <Card.Img className='ms-3' style={{height:'200px',width:'200px'}} variant="top" src="https://sinisaristic.com/assets/uploads/pageuploads/20180227192223_1181QueenStWest4.jpg" />
                    <Card.Body className='mt-4'>
                    <Card.Title><span className='font-bold'>Huge Garage</span></Card.Title>
                      <Card.Text className='mt-2'>
                        <p className='text-black h-15'>
                          Park your Precious Toy in this Amazing Garage. Your toy in the garage will be  a way of showcasing your cars like works of art and its is very secure.
                        </p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          </div>
  
          {/* Location */}
          <div className='w-full  md:h-96 flex justify-center mt-5 mb-5'>
            <div className='w-4/5 border-2 border-red-700'>
              <h4 className='text-center text-yellow-400 font-extrabold mt-4'>OUR PARADISE</h4>
              <div>
                <Row>
                  <Col sm={12} lg={6}>
                    <div className='px-5 mt-3 mb-5'>
                      <h4><i className="fa-solid fa-pepper-hot fa-bounce text-red-700 mt-5"></i><span className='ms-2 font-bold'>Black Pepper</span></h4>
                      <h6> 
                        <i class="fa-solid fa-location-dot text-white mt-2"></i>
                        <p>
                        Plot 67-173, <br/>
                        Bishop Tucker Road,<br/>
                         Mukono
                          </p>
                      </h6> 
                    </div>                
                  </Col>
                  <Col sm={12} lg={6}>
                    <div className='flex justify-center mt-3 mb-3'>
                      {/* <iframe src="https://www.google.com/maps/place/Uganda+Christian+University+Mukono/@0.3552778,32.7257764,14z/data=!4m6!3m5!1s0x177dc7bd7d9ecc33:0xe7db325168bf53ad!8m2!3d0.355277!4d32.7392386!16s%2Fm%2F026t33d?entry=ttu" style={{border:'1',width:'250px',height:'250px'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                      <iframe
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15953.973566356893!2d32.738743290083185!3d0.35641738250179655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMywzMi4yNzMgU0U!5e0!3m2!1sen!2sug!4v1647273927866!5m2!1sen!2sug"
                              style={{ border: '1px solid black', width: '400px', height: '300px' }}
                              allowFullScreen=""
                              loading="lazy"
                              referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>

                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default LandingPage