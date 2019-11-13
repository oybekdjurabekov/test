<template>
	<div class="col s12">
    <div class="container">
      <div class="section">
          <div class="card">
              <div class="card-content">
                  <h1 class="caption mb-0">
                      {{items.title}}
                  </h1>
                  <img :src="items.img" alt=""/>
                  <p class="caption mb-0">
                      {{items.content}}
                  </p>
                  <em>{{items.moderator}}</em>
                  <p>{{items.created_at}}</p>
              </div>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    computed:{
      id(){
          return this.$route.params.id
      },
      items(){
          return this.$store.getters['Release/item'](this.id)
      }
    }
  }
</script>