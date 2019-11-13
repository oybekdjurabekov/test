<template>
  <div class="right col m3">
    <ul id="nav-mobile" class="left navbar-list">
      <router-link  :to="{path:'release'}" tag="li">
          <a >{{$t("release")}}</a>
      </router-link>
      <router-link  :to="{path:'profile'}" tag="li">
          <a >{{$t("profile")}}</a>
      </router-link>
      <li><a @click="logout">{{ $t("exit") }}</a></li>
      <li>
        <md-menu  md-align-trigger class="">
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
      </li>
  </ul>
  
  </div>
</template>
<script type="text/javascript">
  export default{
    props:['listItems'],
    methods:{
      logout(){
        this.$emit('logout')
      }
    }
  }
</script>