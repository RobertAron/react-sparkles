# React Sparkles

This react module is used to make some cute sparkly elements.

### Usage

* Set parent element to be `display:relative`
* Set the sparkle container. This will fill the parent element, and make the sparkles unclickable.
* Set the sparkle elements.
  * Select a varient. There are 4. (0-3)
  * Poition using `top`,`right`,`bottom`,`left`. These take css atributes.
  * Set the delay in ms

```jsx
import React from 'react';
import './YourCss.css';
import { Sparkle, SparklesCanvas } from 'react-sparkles'



const exampleComponent = () => {
    <div className='container'>
        <h1>Hi Mom!</h1>
        <SparklesCanvas>
            <Sparkle variant={1} right='-90px' top='40%' delayMS={1000}/>
            <Sparkle variant={2} right='-70px' top='0%' delayMS={300}/>
            <Sparkle variant={3} left='-90px' top='30%'/>
            <Sparkle variant={0} left='-70px' top='80%'/>
        </SparklesCanvas>
    <div>
}
```
