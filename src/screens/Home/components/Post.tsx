import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {
  ActiveHeartIcon,
  ActiveProfileIcon,
  CommentIcon,
  HeartIcon,
  Image,
  LinearGradientView,
  LinkShareIcon,
  SearchInput,
  Text,
  ThreeDotsIcon,
  Touchable,
  View,
} from 'ui';

export const Post = () => {
  const [isLiked, setIsLiked] = useState(false);
  const {control} = useForm();

  const renderInformationDetail = (label: string, value: string) => {
    return (
      <View flexDirection="row">
        <Text fontSize={13} fontWeight="700">
          {`\u2022  ${label}: `}
        </Text>
        <Text>{value}</Text>
      </View>
    );
  };

  return (
    <View
      backgroundColor="white"
      padding="m"
      borderRadius={10}
      width="100%"
      marginBottom="m">
      <View flexDirection="row" justifyContent="space-between" marginBottom="m">
        <View flexDirection="row" alignItems="center">
          <ActiveProfileIcon />
          <Text fontWeight="700" marginLeft="s">
            Mai Nguyen
          </Text>
        </View>
        <View flexDirection="row" alignItems="center">
          <Touchable marginRight="s">
            <LinearGradientView
              paddingVertical="xs"
              paddingHorizontal="m"
              borderRadius={8}>
              <Text color="grey5" fontWeight="500" fontSize={12}>
                View Detail
              </Text>
            </LinearGradientView>
          </Touchable>
          <Touchable>
            <ThreeDotsIcon />
          </Touchable>
        </View>
      </View>
      <Text fontWeight="700" fontSize={15}>
        Lorem ipsum dolor sit amet
      </Text>
      <Text fontSize={13}>
        Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua.
      </Text>
      <View
        flexDirection="row"
        justifyContent="space-between"
        alignItems="flex-end"
        marginVertical="s">
        <View>
          {renderInformationDetail('Nickname', 'Soc')}
          {renderInformationDetail('Name', 'Mai Linh')}
          {renderInformationDetail('Hometown', 'Quang Binh')}
        </View>
        <View>
          {renderInformationDetail('Gender', 'Female')}
          {renderInformationDetail('Dob', '20/05/2005')}
        </View>
      </View>
      <Image
        height={250}
        width="100%"
        borderTopLeftRadius={10}
        borderTopRightRadius={10}
        source={{
          uri: 'https://www.adobe.com/content/dam/cc/us/en/creativecloud/photography/discover/portrait-photography/CODERED_B1_portrait_photography-P4a_438x447.jpg.img.jpg',
        }}
      />
      <View
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        marginVertical="m">
        <View flexDirection="row" alignItems="center">
          <View flexDirection="row" alignItems="center" marginRight="m">
            <Touchable onPress={() => setIsLiked(!isLiked)}>
              {isLiked ? (
                <ActiveHeartIcon width={20} height={20} />
              ) : (
                <HeartIcon />
              )}
            </Touchable>
            <Text marginLeft="xs">2.4K</Text>
          </View>
          <View flexDirection="row" alignItems="center">
            <Touchable>
              <CommentIcon />
            </Touchable>
            <Text marginLeft="xs">78</Text>
          </View>
        </View>
        <Touchable>
          <LinkShareIcon />
        </Touchable>
      </View>
      <View flexDirection="row" alignItems="center" marginBottom="m">
        <ActiveProfileIcon />
        <SearchInput
          marginLeft="s"
          backgroundColor="grey6Opacity5"
          borderWidth={0}
          inputProps={{
            name: 'search',
            control,
            placeholder: 'Write a comment...',
            style: {
              fontSize: 12,
            },
          }}
        />
      </View>
      <View flexDirection="row" flex={1}>
        <ActiveProfileIcon />
        <View marginLeft="s" flex={1}>
          <View flexDirection="row" alignItems="center">
            <Text fontSize={13} color="black1" fontWeight="700" marginRight="s">
              Trung Jamin
            </Text>
            <Text color="grey7" fontSize={11}>
              1 minute ago
            </Text>
          </View>
          <View flex={1} flexShrink={3}>
            <Text
              fontSize={13}
              color="black1"
              numberOfLines={2}
              ellipsizeMode="tail">
              Se ha actualizado el manifiesto de e ha manifiesto de e ha
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
