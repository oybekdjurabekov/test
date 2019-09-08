<template>
	<div>
		<p v-for="(selected, index) in this.$store.state.slectCount"  @dblclick="removeSelected(index)">{{selected.name}}</p>
		<input type="text" name=""  @input="inputVal($event.target.value)">
		<ul>
			<li style="display: block;"  v-for="(countryName, index) in this.$store.state.selected" @click="selectedCounty(countryName.name, index)">{{countryName.name}} </li>
		</ul>
	</div>
</template>
<script>
	export default{
		methods:{
			inputVal(value){
				this.$store.commit('searchCountry', value)
			},
			selectedCounty(value, index){
				this.$store.commit('selectedCounty', {name:value, key:index})
			},
			removeSelected(index){
				this.$store.commit('removeSelected', index)
			}
		},
	}
</script>