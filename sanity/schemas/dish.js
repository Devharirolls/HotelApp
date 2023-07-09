export default {
    name:'dish',
    title:'Dish',
    type:'document',
    fields:[
        {
            name:"name",
            type:"string",
            title:"Nmae of dish",
            validation:(Rule)=>Rule.required(),
        },
        {
            name:"short_description",
            type:"string",
            title:"Short description",
            validation:(Rule)=>Rule.max(200),
        },
        {
            name:"image",
            type:"image",
            title:"Image of the Dish",
        },
        {
            name: "price",
            type: 'number',
            title: 'Price per person (in IND)',
        }
    ]
}