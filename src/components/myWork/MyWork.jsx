import React, { PureComponent } from 'react';
import './MyWork.css';
import fireAbout from "../../assets/fire-About.png";
import mywork_data from '../../assets/myWork.js';
import arrow_icon from "../../assets/arrow_icon.png"

const MyWork = () => {
    return (
        <div id='work' className='mywork'>
            <div className="mywork-title">
            <h1>My latest work</h1>
            <img src={fireAbout} alt="" />
            </div>
            <div className="mywork-container"> 
                {mywork_data.map((work,index)=>{
                    return <img key={index} src={work.w_img} alt="" />
                })}

            </div>
            <div className="mywork-showmore">
                <p>Show More</p>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
    )
  }


export default MyWork;