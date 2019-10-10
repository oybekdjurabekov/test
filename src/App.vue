<template>
    <div class="page-container">
    <div class="row">
        <div class="col12">
            <nav style="box-shadow: none;" class="navbar-main navbar-color nav-collapsible sideNav-lock navbar-dark gradient-45deg-indigo-purple no-shadow">
                <div class="nav-wrapper">
                    <router-link class="brand-logo left ml-3" :to="{name:'home'}" tag="a">
                        Главная страница
                    </router-link>
                    <appMenu :listItems="listItems"></appMenu>
                </div>
            </nav>
        </div>   
    </div>
    <div class="row">
        <div class="content-wrapper-before gradient-45deg-indigo-purple"></div>
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
  </div>
</template>

<script>
import router from './routes';
import appMenu from './components/menu/menu';
import { mapGetters } from 'vuex';
export default {
    computed:{
      ...mapGetters('menu', {
        'listItems':'listItems'
      })
    },
    components:{
        appMenu
    }
}
</script>

<style type="text/css">
    .fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>