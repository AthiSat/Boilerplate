import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import ScreenWrapper from '../components/ScreenWrapper';
import LargeButton from '../components/Buttons/LargeButton';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';

export default function Tab3() {
  const [isCamPermitted, setIsCamPermitted] = useState(false);
  const qrCodes = useSelector(state => state.qrCode.qrCodeStoreState);
  // const count = useSelector(state => state.counter.value);
  useEffect(() => {
    console.log('QR Codes', qrCodes);
  }, [qrCodes]);
  const navigation = useNavigation();
  const clickHandler = () => {
    console.log('click handler pressed');
    navigation.navigate('CamView');
  };
  return (
    <View
      style={{
        backgroundColor: 'pink',
      }}>
      <Text>Screen 3</Text>
      <Text>Screen 3</Text>
      <Text>Screen 3</Text>
      <Text>Screen 3</Text>
      <Text>Screen 3</Text>
      <Text>Screen 3</Text>
      <Text>Screen 3</Text>
      <Text>Screen 3</Text>
      <Text>Screen 3</Text>
      <Text>Screen 3</Text>
      <LargeButton label="Camera" onPress={clickHandler} />
      <Text>Screen 3</Text>
      <Text>Screen 3</Text>
      <Text>Screen 3</Text>
      <Text>Screen 3</Text>
      <Text>Screen 3</Text>
      <Text>Screen 3</Text>
      <Text>Screen 3</Text>
      <Text>Screen 3</Text>
      <Text>Screen 3</Text>
    </View>
  );
}
