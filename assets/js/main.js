// Vue.component('product',{
// 	props:{
// 		premium:{
// 			type:Boolean,
// 			required:true,
// 		}
// 	},
// 	template:`<div class="wrapper">
// 			<header></header>
// 			<div class="content">
// 				<div class="product">
// 					<div class="product-image">
// 						<img v-bind:src="image">
// 					</div>
// 					<div class="product-title">
// 						<h1>{{title}}</h1>
// 						<p v-if="inStock">In Stock</p>
// 						<p v-else>Out Stock</p>
// 						<p>Shipping {{shipping}}</p>
// 						<ul>
// 							<li v-for="detail in details">{{detail}}</li>
// 						</ul>
// 						<div v-for="(variant, index) in variants" :key="variant.variantId">
// 							<p v-on:click="updateImage(index)">{{variant.variansColor}}<p>
// 						</div>
// 						<button v-on:click="addCart" :disabled="!inStock">AddCart</button>
						
// 					</div>
// 				</div>
// 			</div>
// 		</div>`,
// 	data(){
// 		return {
// 			brand:'Mening ovozim',
// 			product:'Носки',
// 			images:'../img/img1.jpg',
// 			selectedVariant:0,
// 			details:['80% cotton', "20% polyster", "Gender-neutral"],
// 			variants:[
// 				{
// 					variantsID:2234,
// 					variansColor:'blue',
// 					variantImage:'../img/img3.jpg',
// 					variantQuality:10
// 				},
// 				{
// 					variantsID:2235,
// 					variansColor:'green',
// 					variantImage:'../img/img2.jpg',
// 					variantQuality:0
// 				}
// 			],
			
// 		}
// 	},
// 	methods:{
// 		addCart(){
// 			this.$emit('add-to-card')
// 		},
// 		updateImage: function (index){
// 			this.selectedVariant =  index;
// 		}
		
// 	},
// 	computed:{
// 		title(){
// 			return this.brand + ' ' +this.product
// 		},
// 		image(){
// 			return this.variants[this.selectedVariant].variantImage
// 		},
// 		inStock(){
// 			return this.variants[this.selectedVariant].variantQuality
// 		},
// 		shipping(){
// 			if(this.premium){
// 				return 'free'
// 			}
// 			return '2.99'
// 		}
// 	}
	
// })

// var app = new Vue({
// 	el:'.form',
// 	data:{
// 		Guest:{},
// 		showGuest:false,
// 		email:'',
// 		name:'',
// 		surname:'',
// 		counter:0,
// 		phone:'',
// 	},
// 	methods:{
// 		addGuests(){
// 			this.counter++;
// 			this.$set(this.Guest,  this.counter, '');
// 		},
// 		removeGuest(index){
// 			this.$delete(this.Guest, index)
// 		},
// 		showForm(){
// 			this.showGuest = true
// 		}
// 	},
// 	computed:{
// 		FullName(){
// 			return this.name + ' ' + this.surname
// 		}
// 	}
// })

// let app = new Vue({
// 	el:'.form',
// 	data:{
// 		disableButton:false,
// 		info:[
// 			{
// 				name:'Имя',
// 				pattern:/^[a-zA-Z ]{2,30}$/,
// 				value:'',
// 			},
// 			{
// 				name:'Номер',
// 				pattern:/^[0-9]{7,14}$/,
// 				value:'',
// 			},
// 			{
// 				name:'Email',
// 				pattern:/.+/,
// 				value:'',
// 			}
// 		],
// 		controls:[],
// 	},
// 	beforeMount(){
// 		for(let i = 0; i < this.info.length; i++){
// 			this.controls.push({
// 				error:true,
// 				activated:false
// 			});
// 		}
// 	},
// 	methods:{
// 		onInput(index, value){
// 			let data = this.info[index];
// 			let control = this.controls[index];
// 			data.value = value;
// 			control.error = !data.pattern.test(value);
// 			control.activated = true;

// 		}
// 	},
// 	computed:{
// 		done(){
// 			let done = 0;
// 			for(let i =0; i < this.controls.length; i++){
// 				if(!this.controls[i].error){
// 					done++

// 				}
				
// 			}
// 			if(done == this.controls.length){
// 				this.disableButton = true
// 			}else{
// 				this.disableButton = false
// 			}
// 			return done;
// 		},
// 		progressWidth(){
// 			return {
// 				width: (this.done / this.info.length * 100)+'%'
// 			}

// 		}
// 	}
// })
// Vue.component('card-todo',{
// 	template:`<table>`,
// 	props:['items', 'index']
// });
// let app = new Vue({
// 	el:'.form',
// 	data:{
// 		toDoName: "",
// 		buttons:[
// 			{
// 				name:'all',
// 				value:"all",
// 			},
// 			{
// 				name:'active',
// 				value:false,
// 			},
// 			{
// 				name:'done',
// 				value:true,
// 			}
// 		],
// 		status: 'all',
// 		toDoContent: [],
// 	},
// 	computed: {
// 	  filteredTodos: function () {
// 	  	if (this.status === 'all') return this.toDoContent;

// 	    return this.toDoContent.filter((todo) => {
// 	      return todo.done === this.status
// 	    })
// 	  },
// 	  toDoLeft(){
// 	  	return this.toDoContent.filter(items => !items.done).length;
// 	  }
// 	},
// 	methods:{
// 		addToDoList(){
// 			this.toDoContent.push({
// 				title:this.toDoName,
// 				done: false
// 			});
// 			this.toDoName = "";
// 		},
// 		deleteCard(index){
// 			this.toDoContent.splice(index, 1);
// 		},
// 		changeCheck(item){
// 			item.done = !item.done;
// 		},
// 		selectStatus(value){
// 			this.done = value;
// 		}
// 	}
// })
let app = new Vue({
	el:'.form',
	data:{
		info:[
			{id: 1, name: "Антон", lastname: "Воробьев",},
			{id: 2, name: "Айбек", lastname: "Петрович"},
			{id: 3, name: "Антонина", lastname: "Молев"},
			{id: 4, name: "Иван", lastname: "Иванов"},
			{id: 5, name: "Босит", lastname: "Андрейев"},
			{id: 6, name: "Сарвар", lastname: "Туйчиев"},
			{id: 7, name: "Ботир", lastname: "Курбонов"},
			{id: 8, name: "Акром", lastname: "Рахмедов"},
			{id: 9, name: "Ислом", lastname: "Хасанов"},
			{id: 10, name: "Хусниддин", lastname: "Тарвузчи"},
			{id: 11, name: "Босит", lastname: "Хайдаров"},
		],
		filter:'all',
		pagination:[],
		sorts: false
	},
	methods:{
		changeVal(info){
			this.filter = info;
		},
		sort(){
		  	if(!this.sorts){
		  		this.info.sort(function(a, b) { return b.id - a.id; });
		  		this.sorts = true;
		  	}else{
		  		this.info.sort(function(a, b) { return a.id - b.id; });
		  		this.sorts = false
		  	}
		  }

	},
	computed:{
		filteredList: function () {
	  	if (this.filter === 'all') return this.info;
	    return this.info.filter((item) => {
	      return item.name === this.filter
	    })
	  },

	}
})