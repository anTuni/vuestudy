Vue.component('product',{
    props : {
        premium :{
            type : Boolean,
            required:true
        }
    },
    template:`
    <div class="product">
            <div class="product-image">
                <img :src="image" />
            </div>
            <div class="product-info">
                <h1 :class="cb">{{title}}</h1>
                <p >{{saleNow}}</p>
                <p>{{inventory}}개 남음</p>
                <p v-if="inventory >10">In Stock</p>
                <p v-else-if="inventory<=10 && inventory>0">Almost sold out Hurry!!</p>
                <p v-else :class="{textDeco : !inStock}">Out of Stock</p>
                <p>Shipping : {{shipping}}</p>
                <ul>
                    <li v-for="content in details">{{content}}</li>
                </ul>
                <colorbox :variants="variants" :onMuseMethod="changeMethod"></colorbox>
                <ul>
                    <option v-for="size in sizes" value="size">{{size}}</option>
                </ul>
                <h2>{{product}} {{description}}</h2>
                <div class="d-flex">
                    <button 
                        @click="addToCart" 
                        :disabled="!inStock"
                        :class="classObj"
                        >Add to Cart</button>
                    <button @click="removeFromCart">remove from Cart</button>
                    <div class="btn-style">
                        <p>Cart({{cart}})</p>
                    </div>
                </div>
            </div>
        </div>
    `,
    data(){
        return {
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
        }
    }
    ,
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
            return this.inventory > 0
        },
        saleNow(){
            return this.onSale ?  this.brand +' '+this.product + ' is ' + "Now Sale" : "No Sale" 
        },
        classObj(){
            return {disabledButton : !this.inStock}
        },
        shipping(){
            return this.premium ? 'Free': '$2.99';
        },
        changeMethod(){
            return this.changeProduactColor
        }

    }
})
Vue.component('colorbox',{
    props:{
        variants:{
            type:Array,
            required:true
        },
        onMuseMethod:{
            type:Function,
            required:false
        },
    },
    template:`
    <div>
        <div v-for="(variant,index) in variantss" 
            :key="variant.variantsId"
            class="color-box"
            :style="{backgroundColor:variant.color}"
            @mouseover="onMuseMethod(index)" 
        ></div>
    </div>
    `,
    data(){
        return {}
    },
    methods:{

    },
    computed:{
        variantss(){
            console.log("this.variants "+this.variants)
            return this.variants
        },
    }

})
var app=new Vue({
    el :'#app',
    data : {
        premium : false
    }
})