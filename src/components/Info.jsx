import React from 'react';
import pic from "../assets/pic.jpeg"

function Info() {
  return (
    <div>
      <img src={pic} alt='Image' className="image" />
      <h2>Iron man</h2>
      <h4>Avenger</h4>
      <a href='www.ironman.com'>ironman.com</a><br />
      <button className='email_button'>Email</button>
      <button className='linkd_button'>Linkdin</button>
    </div>
  );
}

export default Info;
