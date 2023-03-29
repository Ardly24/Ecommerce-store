
const MenuData = {
menuItems: [
   {
    id:1,
    name: "Laptops",
    url: "/",
    submenu:[
        {    id:10,
            name:'Macbook',
            url: 'mac'
        },

        {
            id:11,
            name:'Hp',
            url: 'hp'
        },

        {    
            id:12,
            name:'Lenovo',
            url: 'len'
        },
    ]
   },

   {
    id:2,
    name: "Phones",
    url: "/",
    submenu:[
        {
            name:'Samsung',
            url: 'sam'
        },

        {
            name:'Huawei',
            url: 'hauwei'
        },

        {
            name:'iPhones',
            url: 'ip'
        },
    ]
   },

   {
    id:3,
    name: "Tablets",
    url: "/",
    submenu:[
        {
            name:'Amazon',
            url: 'kindle'
        },

        {
            name:'iPad',
            url: 'ipad'
        },

        {
            name:'Samsung galaxy',
            url: 'sam'
        },
    ]
   }
       
]
}

export default MenuData