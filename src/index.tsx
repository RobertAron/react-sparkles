import * as React from "react"
import jss from 'jss'
import preset from 'jss-preset-default'
import variant1 from "./sparkles/sparkle1.png"
import variant2 from "./sparkles/sparkle2.png"
import variant3 from "./sparkles/sparkle3.png"
import variant4 from "./sparkles/sparkle4.png"

jss.setup(preset())

const makeGifData = (width: number, height: number, image: string, name: string, animationDelay = 0 ) => ({
  width,
  height,
  image,
  animationDelay,
  frames: width / height,
  seconds: width / height / 30 * 1.5,
  name
})

const variants = [
  makeGifData(2880 / 2, 96 / 2, variant1,"variant1"),
  makeGifData(2592 / 2, 96 / 2, variant2,"variant2"),
  makeGifData(2304 / 2, 96 / 2, variant3,"variant3"),
  makeGifData(4032 / 2, 96 / 2, variant4,"variant4")
]

const styleSheet = variants.map((props,index) => ({
  [props.name]: {
    width: props.height,
    height: props.height,
    backgroundImage: `url(${props.image})`,
    backgroundSize: `${props.width}px ${props.height}px`,
    animationDelay: props.animationDelay,
    animation: `$sparkle-animation-${index} ${props.seconds}s steps(${props.frames},start) infinite forwards`
  },
  [`@keyframes sparkle-animation-${index}`]: {
    '25%': { backgroundPosition: -props.width },
    to: { backgroundPosition: -props.width }
  }
})).reduce((acc,next)=>({...acc,...next}),{})

const {classes} = jss.createStyleSheet({
  big: {
    width: 700,
    height: 700,
    '& > *': {
      display: 'block'
    }
  }
}).attach()

const {classes: sparkleCss} = jss.createStyleSheet(styleSheet).attach()


type Props = {
  className?: string
}


const Sparkles = ({ className }: Props) => {
  return (
    <div className={`${classes.big} ${className}`}>
      <i className={`${sparkleCss['variant1']}`} />
      <i className={`${sparkleCss['variant2']}`} />
      <i className={`${sparkleCss['variant3']}`} />
      <i className={`${sparkleCss['variant4']}`} />
    </div>
  )
}

Sparkles.defaultProps = {
  className: ''
}


export { Sparkles }