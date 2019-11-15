import React from 'react'
import Svg from 'react-native-svg';

export default function KitSvg(props) {
  const width = props.width
  const height = props.height
  const scale = props.scale ? props.scale : 1
  const viewBoxAttr = `0 0 ${width} ${height}`

  return (
  <Svg width={width*scale} height={height*scale} fill={"none"} viewBox={viewBoxAttr}>
    {props.children}
  </Svg>
  );
}