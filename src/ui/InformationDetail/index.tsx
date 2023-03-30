import React from 'react';
import {Text, View} from 'ui';

export const InformationDetail = ({
  label,
  value,
  labelProps,
  valueProps,
  showBullet = true,
  ...rest
}: {
  label: string;
  value: string;
  labelProps?: React.ComponentProps<typeof Text>;
  valueProps?: React.ComponentProps<typeof Text>;
  showBullet?: boolean;
} & React.ComponentProps<typeof View>) => {
  return (
    <View flexDirection="row" {...rest}>
      <Text fontSize={13} fontWeight="700" {...labelProps}>
        {showBullet ? '\u2022' : ''} {`${label}: `}
      </Text>
      <Text {...valueProps}>{value}</Text>
    </View>
  );
};
