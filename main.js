var app=new Vue({
    el :'#app',
    data:{
        brand : 'Vue Mastery', 
        product : 'Socks',
        description : 'are smells good',
        selectedVariant : 0,
        cb:"color-blue",
        href: "index2.html",
        onSale : true,
        details:["80% cotton","20% polyester","made in Korea"],
        variants:[
            {
                color:"green",
                variantsId:"2",
                variantsQuantity:10,
                image:"assets/vmSocks-green-onWhite.jpg"
            },
            {
                color:"blue",
                variantsId:"1",
                variantsQuantity:0,
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
        changeProduactColor(index){
            this.selectedVariant=index;
        },
        removeFromCart(){
            this.cart -=1;
        }
    },
    computed:{
        title(){
            return this.brand +' '+this.product
        },
        selectedObj(){
            return this.variants[this.selectedVariant]
        },
        image(){
            return this.selectedObj.image
        },
        inventory(){
            return this.selectedObj.variantsQuantity
        },
        inStock(){
            return this.inventory>0
        },
        saleNow(){
            return this.onSale ?  this.brand +' '+this.product + ' is ' + "Now Sale" : "No Sale" 
        },
        classObj(){
            return {disabledButton : !this.inStock}
        }
    }
})