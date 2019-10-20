import * as React from "react"
import { createUseStyles } from "react-jss";
import variant1 from "./sparkles/sparkle1.png"
import variant2 from "./sparkles/sparkle2.png"
import variant3 from "./sparkles/sparkle3.png"
import variant4 from "./sparkles/sparkle4.png"

const makeGifData = (width: number, height: number, image: string, name: string) => ({
  width,
  height,
  image,
  frames: width / height,
  seconds: width / height / 30 * 2,
  name
})

const variants = [
  makeGifData(2880 / 2, 96 / 2, variant1, "variant1"),
  makeGifData(2592 / 2, 96 / 2, variant2, "variant2"),
  makeGifData(2304 / 2, 96 / 2, variant3, "variant3"),
  makeGifData(4032 / 2, 96 / 2, variant4, "variant4")
]




// hack needed due to a bug :/
// https://github.com/cssinjs/jss/issues/1216

function useSparkle(variant = 0, delay = 0, resize = 1, positioning: object) {
  if (0 > variant || variant >= variants.length) variant = 0
  const useStyles = createUseStyles({
    sparkle: {
      display: 'block',
      position: 'absolute',
      width: variants[variant].height * resize,
      height: variants[variant].height * resize,
      backgroundImage: `url(${variants[variant].image})`,
      backgroundSize: `${variants[variant].width * resize}px ${variants[variant].height * resize}px`,
      animationDelay: delay===0?'0s':delay,
      animation: `$sparkles ${variants[variant].seconds}s steps(${variants[variant].frames},start) infinite forwards`,
      ...positioning
    },
    '@keyframes sparkles': {
      '25%': {
        backgroundPosition: -variants[variant].width * resize,
      },
      to: {
        backgroundPosition: -variants[variant].width * resize
      }
    }
  })
  return useStyles()
}

type Props = {
  className?: string,
  variant?: number,
  delayMS?: number,
  resizeScale?: number,
  left?:string,
  right?:string,
  top?:string,
  bottom?:string
}

const Sparkle = ({ className ,variant, delayMS, resizeScale,...positioning }: Props) => {
  let {sparkle} = useSparkle(variant, delayMS, resizeScale, positioning)
  if(className) sparkle += ` ${className}`
  return (
    <i className={sparkle} />
  )
}

Sparkle.defaultProps = {
  className: '',
  variant: 1
}


export default Sparkle