import * as React from "react"
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    position: 'absolute',
    pointerEvents: 'none',
    top:0,
    right:0,
    bottom:0,
    left:0
  },
})

type Props = {
  className?: string,
  children: React.ReactNode
}

const SparklesCanvas = ({ className, children }: Props) => {
  let { root } = useStyles()
  if (className) root += ` ${className}`
  return (
    <div className={root}>
      {children}
    </div>
  )
}

export default SparklesCanvas