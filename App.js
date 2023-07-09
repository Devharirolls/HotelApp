import 'react-native-url-polyfill/auto';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import RestaurantScreen from './src/screens/RestaurantScreen';
import PreparingOrderScreen from './src/screens/PreparingOrderScreen';
import BasketScreen from './src/screens/BasketScreen';
import DeliveryScreen from './src/screens/DeliveryScreen';
import { Provider } from 'react-redux';
import { store } from './store';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
     <Provider store={store}>
     <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='Restaurant' component={RestaurantScreen}/>
        <Stack.Screen name='Basket' component={BasketScreen}
          options={{presentation:'modal',headerShown:false}}
        />
        <Stack.Screen name='PreparingOrderScreen' component={PreparingOrderScreen}
        options={{presentation:'modal' ,headerShown:false}}
        />
         <Stack.Screen name='Delivery' component={DeliveryScreen}
        options={{presentation:'modal' ,headerShown:false}}
        />
      </Stack.Navigator>
     </Provider>
    </NavigationContainer>
  );
}


