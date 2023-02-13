const widthToStr = (w: number) => w.toString() + 'px'


const generateViewPort = (width: number) => {
  return {
    name: widthToStr(width),
    styles: {
      width: widthToStr(width),
      height: '1080px',
    },
  }
}
export const createViewPorts = (viewports: number[]) => {
  return Object.fromEntries(viewports.map((i) => [widthToStr(i), generateViewPort(i)]))
}


