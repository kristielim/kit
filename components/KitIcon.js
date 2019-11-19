import React from 'react';
import { Image } from 'react-native';

export default function KitIcon(props) {
  return (
    <Image
      source={props.source}
      style={{width: 20, height: 20}}
    />
  );
}