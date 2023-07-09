/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    './src/screens/HomeScreen.{js,jsx,ts,tsx}',
    './src/components/CategoryCard.{js,jsx,ts,tsx}',
    './src/components/FeaturedRow.{js,jsx,ts,tsx}',
    './src/components/RestaurantCard.{js,jsx,ts,tsx}',
    './src/screens/RestaurantScreen.{js,jsx,ts,tsx}',
    './src/components/DishRow.{js,jsx,ts,tsx}',
    './src/components/BasketIcon.{js,jsx,ts,tsx}',
    './src/screens/BasketScreen.{js,jsx,ts,tsx}',
    './src/screens/PreparingOrderScreen.{js,jsx,ts,tsx}',
    './src/screens/DeliveryScreen.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
