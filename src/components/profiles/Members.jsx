import React from 'react';
import './member.css';

import
  memberData
 from "../../util/memberlist.js"

const Members = () => {
  return (
    <div className='list'>
      {memberData.map((member, index) => (
        <div className="card" key={index}>
          <div className="lines"></div>
          <div className="imgBx">
            <img src={member.img} alt="person-image" />
          </div>
          <div className="content" style={{ marginTop: "30px" }}>
            <div className="details">
              <h2>
                {member.name}<br /><span>{member.role}</span>
              </h2>
              <h4 style={{color:"whitesmoke",fontWeight:"500"}}>{member.year}</h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Members;
