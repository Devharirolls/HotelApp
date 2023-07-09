import { View, Text,ScrollView } from 'react-native'
import React,{useState,useEffect} from 'react'
import CategoryCard from './CategoryCard';
import client, { urlFor } from '../../sanity';

const Categories = () => {
  const [categories,setCategories] = useState([])

  useEffect(()=>{
    client.fetch(`
      *[_type == "category"]
    `).then((data)=>{
      setCategories(data);
    })
  })

  return (
    <ScrollView 
    contentContainerStyle={{
      paddingHorizontal:15,
      paddingTop:10
    }}
    horizontal
    showsHorizontalScrollIndicator={false}
    >
      {/* categoryCard */}
      
      {categories.map((categories)=>(
        <CategoryCard 
        key={categories._id}
        imgUrl= {urlFor(categories.image).width(200).url()} 
        title={categories.name}
        />
      ))}

  
    </ScrollView>
  )
}

export default Categories;