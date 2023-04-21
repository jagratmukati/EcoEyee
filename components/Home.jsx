import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

const Home = () => {
  return (
    <>
    
    <View>
    <View className="text-gray-400 bg-gray-900 body-font font-Raleway pt-16 border-b border-b-gray-800 pb-[110px]">
      <View className="container px-5 py-6 mx-auto">

        <View className="my-14 items-center">
          <Text className="sm:text-3xl text-4xl font-bold font-Nunito title-font text-white mb-4">EcoEye</Text>
        </View>

        <View className='flex items-center space-x-0 font-Poppins'>
          <View className="flex itmes-center ">
            <View className="block p-6 rounded-lg w-80 shadow-lg bg-gray-800 text-slate-300 space-y-4">
              <Text className=" text-xl leading-tight font-medium mb-2">Total Lodged Complains</Text>
              <Text className="text-3xl  ml-2">
                40
              </Text>
              <Button type="button" title="Learn More" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"></Button>
            </View>
          </View>

          
          <View className="flex items-center space-x-20 font-Poppins mt-2 ">
            <View className="block p-6 rounded-lg w-80 shadow-lg bg-gray-800 text-slate-300 space-y-8">
              <Text className=" text-xl leading-tight font-medium mb-0">Total Complains Resolved</Text>
              <Text className="text-3xl  ml-2">
                36
              </Text>
              <Button type="button" title="Learn More" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"></Button>
            </View>
          </View>

          
          <View className="flex items-center mt-2 ">
            <View className="block p-6 rounded-lg w-80 shadow-lg bg-gray-800 text-slate-300 space-y-8">
              <Text className=" text-xl leading-tight font-medium mb-2">Total Bins Installed</Text>
              <Text className="text-3xl  ml-2">
                4
              </Text>
              <Button type="button" title="Learn More" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"></Button>
            </View>
          </View>
        </View>

   </View>
    </View>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

export default Home
