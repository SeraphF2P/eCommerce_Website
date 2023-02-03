import { useState } from "react"
import { throttle } from "../performance"
import useEventListener from "./useEventListener"

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  useEventListener("resize", throttle(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight })
  }, 200))

  return windowSize
}
