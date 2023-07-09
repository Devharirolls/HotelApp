import React, { useLayoutEffect,useState,useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {  View, Text, Image, TextInput, ScrollView } from 'react-native';
import { AdjustmentsVerticalIcon, ChevronDownIcon,ServerIcon,  UserIcon } from 'react-native-heroicons/outline';
import Categories from '../components/Category';
import FeaturedRow from '../components/FeaturedRow';
import client from '../../sanity';
import category from '../../sanity/schemas/category';
import { SafeAreaView } from 'react-native-safe-area-context';


const HomeScreen = () => {
    const navigation = useNavigation();
    const [featuredCategories,setFeaturedCategories] = useState([])

    useLayoutEffect (()=>{
        navigation.setOptions({
            headerShown:false,
        });
    },[]);

    useEffect(()=>{
      client.fetch(`
      *[_type == "featured"]{
        ...,
        restaurants[]->{
          ...,
          dishes[]->
        }
      }
      `).then((data)=>{
        setFeaturedCategories(data);
      })
    },[])


    console.log(featuredCategories);

  return (
    <SafeAreaView>
            
      {/* header */}
      <View className="flex-row pb-3 item-center space-x-2 ">
        <Image source={{
            uri:'https://links.papareact.com/wru'
        }}
        className='h-7 w-7 bg-gray-300 p-4 rounded-full'
        />

        <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">
                Deliver Now
                </Text>
            <Text className="font-bold text-xl">
                Current Location
                <ChevronDownIcon size={20} color={"#00CCBB"} />
            </Text>
        </View>

        <UserIcon size={35} color={"#00CCBB"}/>
      </View>
      {/* search */}

      <View className="flex-row items-center space-x-2 pb-2 mx-4 ">
        <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
               <ServerIcon  color={'grey'} size={20}/>
                <TextInput placeholder='Restaurants and cuisines'
                    keyboardType='default'

                />
        </View>
        <AdjustmentsVerticalIcon color={"#00CCBB"}/>
      </View>

      {/* Body */}

      <ScrollView 
      className="bg-gray-100" 
      contentContainerStyle={{paddingBottom:100}}
      >
        {/* categories */}
        <Categories/>


        {/* Features rows */}

        {featuredCategories?.map(category=>(
          <FeaturedRow 
          key={category._id}
          id = {category._id}
           title={category.name}
           description={category.short_description}
           />
        ))}


      </ScrollView>
    </SafeAreaView>
    
  )
}

export default HomeScreen;