<template>
	<div>
		<p v-for="(select, index) in this.$store.state.slectCount"  @dblclick="removeSelected(select, index)">{{select.name.name}}</p>
		<input type="text" name=""  @input="inputVal($event.target.value)">
		<ul>
			<li style="display: block;"  v-for="(countryName, index) in this.$store.state.selected" @click="selectedCounty(countryName, index)" v-show="countryName.selected">{{countryName.name}} </li>
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
				value.selected = false
				this.$store.commit('selectedCounty', {name:value, key:index});

			},

			removeSelected(value, index){
				value.name.selected = true	
				this.$store.commit('removeSelected', index)
			}
		},
	}
</script>