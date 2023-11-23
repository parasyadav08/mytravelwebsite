import { Heading } from "@chakra-ui/react";
import React from "react";
import "../styles/About.css";
import { GiCommercialAirplane } from "react-icons/gi";
import { BsFillPeopleFill } from "react-icons/bs";
import { CiPercent } from "react-icons/ci";

const About = () => {
  return (
    <div id='about'>
      <div id='text'>
        <Heading>We offer the Best</Heading>
        <div className='desc'>
          <h2>
          
        Embark on a travel experience like never before with Travelease! 
        Our expert team is committed to ensuring your vacation is nothing short of spectacular. 
        Choose Travelease for your next adventure and discover firsthand why we stand out in the travel industry. 
        Your exceptional journey starts now! 
        
        #TraveleaseAdventures #ExploreWithEase
          </h2>
        </div>
      </div>
      <div className='aboutContainer'>
        <div id='box'>
          <div id='icon'>
            <GiCommercialAirplane />
          </div>
          <Heading id='cardHeading'>International Tours</Heading>
          Explore the world with travelease like never before with out International tours.
          Discover new cultures meet new people and create memories that will
          last a lifetime.
        </div>
        <div id='box'>
          <div id='icon'>
            <BsFillPeopleFill />
          </div>
          <Heading id='cardHeading'>Travel Community</Heading>
          Join our travel commnunity and connect with like minded travelers from
          around the world, Share tips stories and advice on your next
          advanture.
        </div>
        <div id='box'>
          <div id='icon'>
            <CiPercent />
          </div>
          <Heading id='cardHeading'>Great Offers</Heading>
          Dont miss out our exclusive discounts and deals on flights, hotel and
          vacation packages. Save big and travel more with our special offers.
        </div>
      </div>
    </div>
  );
};

export default About;
