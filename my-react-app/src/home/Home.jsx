import React, { useEffect } from 'react'
import Header from "../Components/Header/Header"
import SliderComponent from '../SliderComponent/SliderComponent';
import Card1 from '../Components/card1f/Card1';
import Blog from "../Blog/Blog"
import Card3 from "../Card3/Card3"
import Sofa from '../sofa/Sofa';
import Fot from '../fot/Fot';
import Footer from '../footer/Footer';
import NewArrival  from '../Components/NewArrival/Card';

function Home() {
useEffect(() =>{
const token = localStorage.getItem('token');
if (!token){
  window.location.href = '/'
}
},[])
    
  return (
    <>
     <Header/>
  <SliderComponent/>
  <Card1/>
  <NewArrival />
  <Sofa/>
  <Card3/>
  <Blog/>
  <Fot/>
  <Footer/>
    
    </>
  )
}

export default Home