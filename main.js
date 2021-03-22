var app=new Vue({
    el :'#app',
    data:{
        name: appName,
        product : 'Socks',
        description : 'are smells good',
        image:"assets/vmSocks-green-onWhite.jpg",
        cb:"color-blue",
        href: "index2.html",
        inventory : 13,
        inStock :true,
        onSale : true,
        details:["80% cotton","20% polyester","made in Korea"],
        variants:[
            {
                color:"green",
                variantsId:"2",
                image:"assets/vmSocks-green-onWhite.jpg"
            },
            {
                color:"blue",
                variantsId:"1",
                image:"assets/vmSocks-blue-onWhite.jpg"
            },
        ],
        sizes:["S",'M','L'],
        cart:0,
    },
    methods:{
        addToCart : function(){
            this.cart +=1;
            console.log("You added product to this")
        },
        changeProduactColor(image){
            this.image=image;
        },
        removeFromCart(){
            this.cart -=1;
        }
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