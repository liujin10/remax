import * as React from 'react';
import { View, Text } from '@remax/one';
import C from '@/components/C';
import './index.css';

export default () => {
  const props = {};
  const TextElement = React.cloneElement(<Text />);

  function handleTap() {}

  function handleTouchStart() {}

  return (
    <View className="pageA-index">
      <C className="a" />
      <View onTap={handleTap} onTouchStart={handleTouchStart} id="view" data-foo="bar" {...props}>
        foo
      </View>
      {TextElement}
    </View>
  );
};
