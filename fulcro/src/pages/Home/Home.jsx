import React from 'react'
import NavigationBar from '../../components/Navbar/Navbar';
import LandingPage from '../../components/LandingPage/LandingPage';
import Service from '../../components/Service/Service';

const Home = () => {
  return (
    <div className="overflow-hidden">
    <NavigationBar/>
    <LandingPage/>
    <Service/>
    {/* <LandingPage/> */}
    </div>
  )
}

export default Home
