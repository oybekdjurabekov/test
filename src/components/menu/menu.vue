<template>
  <div class="right col m3">
    <ul id="nav-mobile" class="left navbar-list">
      <router-link v-for="(items, index) in listItems" :key="index" :to="items.url" tag="li">
          <a >{{items.title}}</a>
      </router-link>
      <span v-if="isLoggedIn"><a @click="logout">Logout</a></span>
  </ul>
  <md-menu  md-align-trigger class="right">
    <md-badge md-content="1" md-menu-trigger>
      <md-button class="md-icon-button">
        <md-icon>notifications</md-icon>
      </md-button>
    </md-badge>
    <md-menu-content>
      <md-menu-item>My Item 1</md-menu-item>
      <md-menu-item>My Item 2</md-menu-item>
      <md-menu-item>My Item 3</md-menu-item>
    </md-menu-content>
  </md-menu>
  </div>
</template>
<script type="text/javascript">
  export default{
    props:['listItems', 'isLoggedIn'],
    methods:{
      logout(){
        $this.$emit('logout')
      }
    }
  }
</script>