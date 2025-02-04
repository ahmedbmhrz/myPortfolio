import React, { PureComponent } from "react";
import "./Services.css";
import theme_pattenrn from "../../assets/fire-About.png";
import Services_Data from "../../assets/services_data.js";
import arrow_icon from "../../assets/arrow_icon.png";
const Services = () => {
  return (
    <div id="services" className="services">
      <div className="services-title">
        <h1>My Services</h1>
        <img src={theme_pattenrn} alt="" />
      </div>
      <div className="services-container">
        {Services_Data.map((services, index) => {
          return (
            <div key={index} className="services-format">
              <h3>{services.S_on}</h3>
              <h2>{services.S_name}</h2>
              <p>{services.S_desc}</p>
              <div className="services-readmore">
                <p>Read More </p>
                <img src={arrow_icon} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
