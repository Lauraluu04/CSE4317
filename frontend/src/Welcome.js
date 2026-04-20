import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

function WelcomePage() {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     navigate('/Home'); // Redirect to the '/home' path
  //   }, 10000); // 2000 milliseconds = 2 seconds

  //   return () => clearTimeout(timer); // Cleanup the timer
  // }, [navigate]);

  return (
    //  {
    //   constructor(parameters) {
        
    //   }
    // }>
    <main className='Welcome'>
      <center><br/>
        {/* <img className='Pic1' src='../iced-coffee.png'/> */}
        <img className='Pic1' src='../logo.png'/>
        <br/><br/><a href="login"><h3>Sign-in</h3></a><a href="register"><h3>Sign-up</h3></a><br/>
        <a href="https://platform.fatsecret.com">
            <img alt="Nutrition information provided by fatsecret Platform API" src="https://platform.fatsecret.com/api/static/images/powered_by_fatsecret_horizontal_brand.svg" border="0"/>
        </a>        
      </center>
    </main>
  );
}

export default WelcomePage;
