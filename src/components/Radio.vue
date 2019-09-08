<template>
	<div>
		<h2>{{name}}</h2>
		<label v-for="(items, index) in answers">
			<input :type="type" @change="changeInput()" name="items" />
			{{items}}<br>
		</label>
		<button  @click="showData()">Send</button>      
	</div>
</template>
<script>
	export default{
		props:['type', 'name', 'answers', 'hide'],
		methods:{
			changeInput(){
				this.$emit('changeInp')
			}
		}
	}
</script>