import React, {useEffect, useState} from 'react'
import {Carousel, Image, Row} from "react-bootstrap";
import CarouselBg from '../../assets/carousel_1.svg';
import ethos from '../../assets/ethos.png';
import evolution from '../../assets/evolution.png';
import customers from '../../assets/customers.png';
import people from '../../assets/people.png';
import impact from '../../assets/impact.png';
import learnings from '../../assets/learnings.png';
import HomeLinkCard from "../../components/HomeLinkCard";

function Home() {
  const [carouselItems, setCarouselItems] = useState([])

  const getCarouselItems = () => {
    setCarouselItems([
      {
        'heading': 'Discover a culture of',
        'sub_heading': 'Possibilities.'
      },
      {
        'heading': 'Discover a culture of',
        'sub_heading': 'Possibilities.'
      },
    ])
  }

  useEffect(() => {
    getCarouselItems()
    const {innerWidth: width, innerHeight: height} = window;
    console.log(width, height)
  }, [])

  return (
    <main id="home_page">
      <section id="home_carousel">
        <Carousel>
          {carouselItems.map((k, v) => (
            <Carousel.Item key={v.toString()}>
              <Image src={CarouselBg}/>
              <Carousel.Caption>
                <div>
                  <h3>{k.heading}</h3>
                  <h2>{k.sub_heading}</h2>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>
      <section id={'home_links'}>
        <Row className={'no-gutters'}>
          <HomeLinkCard link='/ethos/' color='#D3DF4D' title='Our Ethos' icon_url={ethos}/>
          <HomeLinkCard link='/evolution/' color='#FF824F' title='Our Evolution' icon_url={evolution}/>
          <HomeLinkCard link='/customers/' color='#F9D05E' title='Our Customers' icon_url={customers}/>
          <HomeLinkCard link='/people/' color='#01C6D9' title='Our People' icon_url={people}/>
          <HomeLinkCard link='/impact/' color='#A18CF6' title='Our Impact' icon_url={impact}/>
          <HomeLinkCard link='/learnings/' color='#4E99DB' title='Our Learnings' icon_url={learnings}/>
        </Row>
      </section>
    </main>
  )
}

export default Home
