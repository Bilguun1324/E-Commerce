import React from 'react';
import { SuperSpace, SuperView } from '../components';

export const SuperStack: React.FC<StackType> = ({ space, width, height, children }) => {
  return (
    <SuperView width={width} height={height}>
      {React.Children.toArray(children).map((child, index) => {
        return (
          <SuperView key={index} width='100%'>
            <SuperSpace mt={space} />
            {child}
          </SuperView>
        );
      })}
    </SuperView>
  );
};

type StackType = {
  space?: number | string,
  width?: number | string,
  height?: number | string,
};
