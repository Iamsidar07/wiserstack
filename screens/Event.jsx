import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { Image, Pressable, ScrollView, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { cameraVideo, dot, logo, setting, user } from '../assets'
import { camerSetupDeta } from '../config'
const Event = () => {
  const navigation = useNavigation()
  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])

  return (
    <SafeAreaView className="max-w-7xl mx-auto w-full">
      {/* Header  */}
      <View className="flex-row items-center justify-between p-2 gap-x-4">
        <View className="flex-row items-center gap-x-1">
          <View className="w-12 h-6">
            <Image source={logo} resizeMode='contain' className="w-full h-full" />
          </View>
          <Text className="hidden lg:flex font-bold text-[#090E82]">WiserStack</Text>
        </View>
        <TextInput placeholderTextColor={"#090E82"} className="rounded-full border bg-[#ECEDFF] border-gray-300 py-3 px-6 mt-1.5 flex-1" type="password" placeholder='RecentEventId' />
        <View className="flex-row items-center ">
          <View className="w-10 h-10 rounded-full">
            <Image source={user} resizeMode='contain' className="w-full h-full" />
          </View>
          <View className="hidden lg:flex">
            <Text className="text-sm ml-2 font-semibold">Test User</Text>
            <Text className="text-xs text-gray-600 ml-2">abc@work.com</Text>
          </View>
        </View>
      </View>
      <View className="p-2 mt-6">
        {/* Manage event  */}
        <View className="px-3 py-4 rounded-lg border border-gray-400">
          <Text className="text-xs mb-4 lg:mb-0">WED, 25 JAN 2024</Text>
          <View className="lg:flex-row lg:items-baseline lg:justify-between  gap-3">
            <View>
              <Text className="text-lg font-semibold">Saurabh's Birthday Party</Text>
              <Text className="text-xs flex-row items-center" numberOfLines={1}>Happy Dreams Hotel <Image source={dot} /> Hall <Image source={dot} /> 5 New Delhi</Text>
            </View>
            <View>
              <Text className="text-sm font-semibold">250 attendees</Text>
              <Text className="text-xs text-gray-500">Min. commitment</Text>
            </View>
            <Pressable className="max-w-sm shadow-lg">
              <View className="bg-[#090E82] rounded-full py-3 px-6 mt-5">
                <Text className="text-white text-center">Start Event</Text>
              </View>
            </Pressable>
          </View>
        </View>
      </View>

      {/* Camera Setup  */}
      <View className="p-2 mt-3 ">
        <View className="flex-row justify-between items-center">
          <View>
            <Text className="font-bold text-lg">Camera Setup</Text>
            <Text className="text-gray-600 mb-3">Finalise current event’s camera setup & get started</Text>
          </View>
          <Image source={setting} className="w-6 h-6" />
        </View>
        <ScrollView horizontal className="w-full py-2 gap-4">
          {
            camerSetupDeta.map(({ image, location, name, isCamera }, index) => <View key={index} className="">
              {
                isCamera ?
                  <>
                    <Image source={image} className="rounded-xl border h-64 w-48" />
                    <Text className="text-center mt-4 text-lg">{name}</Text>
                    <Text className="text-center text-[#090E82]">{location}</Text>
                  </> :
                  <View className="rounded-xl h-64 w-48 justify-center items-center border border-gray-300">
                    <Image source={cameraVideo} className="w-12 h-12" />
                    <Text className="text-center mt-4 text-lg">No Camera</Text>
                  </View>
              }
            </View>)
          }
        </ScrollView>
      </View>

    </SafeAreaView>
  )
}

export default Event
