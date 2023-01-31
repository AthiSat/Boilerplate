import { View, Text } from 'react-native'
import React, { useState, useContext, useEffect } from 'react'
import Tab1 from './Tab1'
import Tab2 from './Tab2'
import Tab3 from './Tab3'
import Tab4 from './Tab4'
import Tab5 from './Tab5'
import NavigationContext from '../context/NavigationContext'
import ScreenWrapper from '../components/ScreenWrapper'
import Animated, { FadeInLeft, FadeInRight, FadeIn, FadeOutLeft, FadeOutRight, FadeOut, FadeInDown, FadeOutUp } from 'react-native-reanimated'


export default function Tabs() {
  const navigationContext = useContext(NavigationContext)
  const [component, setComponent] = useState('home')
  useEffect(() => {
    console.log(navigationContext.tabPosition)
  }, [navigationContext.tabPosition])

  return (
    <ScreenWrapper>
      <View style={{
        padding:10,
        paddingTop:70,
      }}>
        {
          navigationContext.tabPosition === 'search' ?
            <Animated.View
              entering={FadeInLeft}
              exiting={FadeOutRight}
            >
              <Tab1 />
            </Animated.View>
            :
            null
        }
        {
          navigationContext.tabPosition === 'camera' ?
            <Animated.View
              entering={FadeInLeft}
              exiting={FadeOutRight}
            >
              <Tab2 />
            </Animated.View>
            :
            null}
        {
          navigationContext.tabPosition === 'home' ?
            <Animated.View
              entering={FadeInDown}
              exiting={FadeOutUp}
            >
              <Tab3 />
            </Animated.View>
            :
            null
        }
        {
          navigationContext.tabPosition === 'filter' ?
            <Animated.View
              entering={FadeInRight}
              exiting={FadeOutLeft}
            >
              <Tab4 />
            </Animated.View>
            :
            null
        }
        {
          navigationContext.tabPosition === 'new' ?
            <Animated.View
              entering={FadeInRight}
              exiting={FadeOutLeft}
            >
              <Tab5 />
            </Animated.View>
            :
            null
        }
      </View>
    </ScreenWrapper>
  )
}