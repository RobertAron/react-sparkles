import React from 'react';
import './App.css';
import { Sparkle, SparklesCanvas } from 'react-sparkles'



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <h1>HELLO THERE</h1>
          <SparklesCanvas>
            <Sparkle variant={1} left='-50px' top='10%'/>
            <Sparkle variant={3} left='-90px' top='30%'/>
            <Sparkle variant={0} left='-70px' top='80%'/>
            
            <Sparkle variant={2} right='-70px' top='0%' delayMS={300}/>
            <Sparkle variant={1} right='-90px' top='40%' delayMS={1000}/>
            <Sparkle variant={3} right='-70px' top='90%' delayMS={400}/>
            
            <Sparkle variant={4} top='-50px' left='5%' delayMS={700}/>
            <Sparkle variant={2} top='-80px' left='40%' delayMS={1500}/>
            <Sparkle variant={1} top='-70px' left='80%' delayMS={1200}/>

            <Sparkle variant={3} bottom='-60px' left='15%' delayMS={700}/>
            <Sparkle variant={0} bottom='-50px' left='50%' delayMS={1700}/>
            <Sparkle variant={0} bottom='-70px' left='95%' delayMS={300}/>
          </SparklesCanvas>
        </div>
      </header>
    </div>
  );
}

export default App;
