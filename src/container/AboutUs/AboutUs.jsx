import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">At Our Steakhouse, we pride ourselves on offering an unparalleled dining experience that celebrates the art of steak. From the moment you step through our doors, you'll be immersed in a warm and inviting ambiance that sets the stage for a memorable culinary journey.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Our Steakhouse: A Legacy of Excellence

Since our inception, Our Steakhouse has been synonymous with exceptional dining and the finest steaks. Our rich history dates back to [year], when [founder's name] first established this iconic establishment with a vision to create a culinary haven for steak enthusiasts.

</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;