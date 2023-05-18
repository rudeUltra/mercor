import React from 'react'
import ReactDOM from 'react-dom'
import logo from './logo.svg';
import './App.css';
import './index.css';
import Disclosure from './navbar'
import Text from './text'
import FadeInText from './fade-text';
import Example from './section-2'
import SliderWithScrollBar from './scroll-window';
function App() {
  const slides = [
    <img src="slide1.jpg" alt="Slide 1" />,
    <img src="slide2.jpg" alt="Slide 2" />,
    <img src="slide3.jpg" alt="Slide 3" />,
    <img src="slide4.jpg" alt="Slide 4" />,
  ];



  return (
    <div>
    <Disclosure></Disclosure>
    <div className='title'>
    Rudhra Deep Biswas <br/>
    Section-1 Scroll to see animation<br/>
    </div>
    <FadeInText></FadeInText>
    <br/>
    <br/>
    <br/>
    <hr className='line'/>
    <div className='title'>
    Section-2<br/>
    </div>
    <Example></Example>
   
    

    </div>
    
  );
}


export default App;
