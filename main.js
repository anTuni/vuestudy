var app=new Vue({
    el :'#app',
    data:{
        product : 'Socks',
        description : 'are smells good',
        image:"assets/vmSocks-green-onWhite.jpg",
        cb:"color-blue",
        href: "index2.html",
        inventory : 13,
        onSale : true,
        details:["80% cotton","20% polyester","made in Korea"],
        variants:[
            {
                color:"blue",
                variantsId:"1"
            },
            {
                color:"green",
                variantsId:"2"
            },
            {
                color:"red",
                variantsId:"3"
            },
        ],
        sizes:["S",'M','L']
    }
})

var app2=new Vue({
    el :'#app2',
    data:{
        product : 'app2',
        value1 : 1,
        value2 : 2,
        description : 'app2 is warm'
    }
})