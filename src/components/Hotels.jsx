import { Heading } from "@chakra-ui/react";
import React from "react";
import "../styles/Hotels.css";

const Hotels = () => {
  return (
    <div id='hotels'>
      <div id='text'>
        <Heading>Great Locations across the World</Heading>
        <div className='desc'>
          <p>
            Travel to the most breathtaking and exotic location across the globe
            with us. From the majestic mountains of Patagonia to the pristine
            beaches of Bali. we'll take you there.
          </p>
        </div>
      </div>
      <div>
        <img id= "globe"
          src='https://images.pexels.com/photos/1275393/pexels-photo-1275393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='map'
        />
      </div>
    </div>
  );
};

export default Hotels;
