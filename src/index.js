import React from 'react';
import ReactDom from 'react-dom';

// CSS 
import './styles/index.css'

// Components 
import Header from './components/header/header'
import FirstSection from './components/firstBox/firstBox' 
import SecondSection from './components/secondBox/secondBox'
import ThirdSection from './components/thirdBox/thirdBox'
import Footer from './components/footer/footer'


const Main = () => {
  return <>
  <Header/>
  <FirstSection/>
  <SecondSection/>
  <ThirdSection/>
  <Footer/>
  </>
}

ReactDom.render(<Main/>, document.getElementById(`root`))



