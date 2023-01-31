import {FlatList, SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import CameraPermissionCheckWrapper from '../components/CameraPermissionCheckWrapper';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import {BarcodeFormat, useScanBarcodes} from 'vision-camera-code-scanner';
import {useState, useEffect} from 'react';
import 'react-native-reanimated';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
// import {setQrcode} from '../../store/qrCodeSlice';
import {setQrCodeDispatcher} from '../../store/qrCodeSlice';

export default function CamView() {
  const dispatch = useDispatch();
  const devices = useCameraDevices();
  const device = devices?.back;
  const [frameProcessor, qrcodes] = useScanBarcodes([BarcodeFormat.QR_CODE]);
  const [qrcode, setQrCode] = useState([]);
  const [isScanned, setIsScanned] = useState(false);
  const [qrcodeState, setQrcodeState] = useState('');
  const isFocused = useIsFocused();
  const navigation = useNavigation();

  useEffect(() => {
    if (isFocused) {
      setQrcodeState('');
    } else {
      setQrcodeState('');
    }
  }, [isFocused]);

  // const toggleActiveState = async () => {
  //   // console.log(qrcodes[0]?.rawValue);
  //   setQrCode(state => [...state, qrcodes[0]?.rawValue]);
  //   console.log(qrcode);
  //   setIsScanned(true);
  // };

  useEffect(() => {
    if (qrcodes !== null) {
      if (qrcodes.length > 0) {
        if (typeof qrcodes[0]?.content?.data !== 'undefined') {
          const qrcode = qrcodes[0]?.content?.data;
          if (qrcode !== '') {
            setQrcodeState(qrcode);
            dispatch(setQrCodeDispatcher(qrcode));
            // dispatch(increment());
            navigation.navigate('Tabs');
          }
        }
      }
    }
    // if (qrcodes.length !== 0) {
    //   toggleActiveState();
    // }
  }, [qrcodes]);

  // return isScanned == false ? (
  return (
    <CameraPermissionCheckWrapper>
      <View style={{flex: 1}}>
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
          }}>
          {device == null ? null : (
            <Camera
              style={{flex: 1}}
              device={device}
              isActive={true}
              frameProcessor={frameProcessor}
              frameProcessorFps={5}
            />
          )}
        </View>
      </View>
      {/* {qrcode && <></>} */}
    </CameraPermissionCheckWrapper>
  );
  // : (
  //   <View style={{backgroundColor: 'green', flex: 1}}>
  //     <FlatList
  //       data={qrcode}
  //       renderItem={({item}) => (
  //         <SafeAreaView style={{marginTop: 50, flex: 1}}>
  //           <Text
  //             style={{
  //               justifyContent: 'center',
  //               alignItems: 'center',
  //               color: 'black',
  //               backgroundColor: 'white',
  //               padding: 20,
  //               marginVertical: 8,
  //               marginHorizontal: 16,
  //             }}>
  //             {item}
  //           </Text>
  //         </SafeAreaView>
  //       )}
  //     />
  //     {/* {setIsScanned(false)} */}
  //   </View>
  // );
}
