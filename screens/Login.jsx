import React from 'react'
import { Image, Pressable, Text, TextInput, View } from 'react-native'
import logo from "../assets/logo.png"
import rectangle from "../assets/rectangle.png"
const Login = () => {
  return (
    <View className="flex-1 w-full max-w-7xl mx-auto">

      <Image source={rectangle} className="hidden lg:flex w-full max-w-md" />
      <View className="items-center p-5 ">
        <View className="flex-row items-center gap-x-1 mt-6">
          <View className="w-12 h-6">
            <Image source={logo} resizeMode='contain' className="w-full h-full" />
          </View>
          <Text className="font-bold text-[#090E82]">WiserStack</Text>
        </View>
        <Text className="font-bold text-2xl mt-6">Welcome Back</Text>
        <Text className="text-sm text-gray-500">Enter your details</Text>
        <View className="mt-5 w-full">
          <Text className="text-sm text-neutral-950 font-medium">Email</Text>
          <TextInput className="rounded-full border border-gray-300 py-3 px-6 mt-1.5" type="text" placeholder='abc@work.com' />
        </View>
        <View className="mt-5 w-full">
          <Text className="text-sm text-neutral-950 font-medium">Password</Text>
          <TextInput className="rounded-full border border-gray-300 py-3 px-6 mt-1.5" type="password" placeholder='Enter Password' />
        </View>
        <Text className="text-sm text-gray-500 mt-2 text-right w-full">Forgot Password?</Text>

        <Pressable className="w-full">
          <View className="bg-[#090E82] rounded-full py-3 px-6 mt-5">
            <Text className="text-white text-center">Sign In</Text>
          </View>
        </Pressable>
        <Text className="text-xs text-gray-700 text-center w-full mt-12">Don't have an account? <Text className="text-[#090E82] text-xs">Sign Up</Text></Text>
      </View>
    </View>
  )
}

export default Login
