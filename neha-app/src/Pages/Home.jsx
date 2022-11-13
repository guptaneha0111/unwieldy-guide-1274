import React from "react";
import { Heading } from "@chakra-ui/react";
function Home() {
  return (
    <div>
      <div className="maindiv123">
        <div className="bgdiv">
          <img
            className="homeimg"
            src="https://play-lh.googleusercontent.com/R3soEg6oL3HYXFNGgUfZiz5RyS-X6bzG0HadXvyMm1V2GfG6rBxOy8p9XQ_QJDVI1Q"
          />
        </div>
      </div>
      <div>
        
        <Heading as="h1" size="2xl" noOfLines={1} margin="1.5rem">
          Popular professional services
        </Heading>
        <div className="imgdiv"><img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png" alt="" />
        <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/ae11e2d45410b0eded7fba0e46b09dbd-1598561917003/wordpress-2x.png" alt="" />
        <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741669/voiceover-2x.png" alt="" />
        <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png" alt="" />
        <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741667/social-2x.png" alt="" />
        </div>

        <div>
          <div className="img123">
          <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png" alt="" />
          </div>
        </div>
        </div>

        <div>
        <Heading as="h1" size="2xl" noOfLines={1} margin="2rem">
        Fiverr guides
        </Heading>
        <div className="imgdiv">
          <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_450,dpr_1.0/v1/attachments/generic_asset/asset/d532c0ad4feed007b3899cebad595286-1599611560157/guide-start-online-business-552-x2.png" alt="" />
          <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_450,dpr_1.0/v1/attachments/generic_asset/asset/d532c0ad4feed007b3899cebad595286-1599611560168/guide-digital-marketing-552-x2.png" alt="" />
          <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_450,dpr_1.0/v1/attachments/generic_asset/asset/d532c0ad4feed007b3899cebad595286-1599611560155/guide-create-a-logo-552-x2.png" alt="" />
          
        </div>
        </div>

        <div className="lastimg">
          <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_1400,dpr_1.0/v1/attachments/generic_asset/asset/50218c41d277f7d85feeaf3efb4549bd-1599072608122/bg-signup-1400-x1.png" alt="" />
        </div>
<hr />
        <div>
        <Heading as="h1" size="2xl" noOfLines={1} margin="2rem">
        Find the talent needed to get your business growing.
Get Started
        </Heading>
        </div>
        <div>
        <Heading as="h1" size="2xl" noOfLines={1} margin="2rem">
     
        </Heading>
        </div>
    </div>
  );
}

export default Home;
