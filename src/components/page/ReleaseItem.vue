<template>
	<div class="col s12">
    <div class="container">
      <div class="section">
          <div class="card">
              <div class="card-content">
                  <p class="caption mb-0">
                      Sample blank page for getting start!! Created and designed by Google, Material Design is a design
                      language that combines the classic principles of successful design along with innovation and
                      technology.
                  </p>
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
                return this.$store.getters['news/item'](this.id)
            }
        }
  }
</script>