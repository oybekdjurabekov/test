<template>
    <div class="page-container">
    <div class="row">
        <div class="col12">
            <nav style="box-shadow: none;" class="navbar-main navbar-color nav-collapsible sideNav-lock navbar-dark light-blue no-shadow">
                <div v-show="isLoggedIn" class="nav-wrapper">
                    <router-link class="brand-logo left ml-3" :to="{name:'dashboard'}" tag="a">
                        Главная страница
                    </router-link>
                    <appMenu :listItems="listItems" :isLoggedIn="isLoggedIn" @logout="logout"></appMenu>
                </div>
            </nav>
        </div>   
    </div>
    <div class="row">
        <div class="content-wrapper-before light-blue"></div>
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
      ...mapGetters('Login', {
        'isLoggedIn': 'isLoggedIn',
      }),  
      ...mapGetters('menu', {
        'listItems':'listItems'
      })
    },
    created: function () {
        this.$http.interceptors.response.use(undefined, function (err) {
          return new Promise(function (resolve, reject) {
            if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
              this.$store.dispatch('Login/logout')
            }
            throw err;
          });
        });
    },
    methods:{
        logout: function () {
            this.$store.dispatch('Login/logout')
            .then(() => {
              this.$router.push('/signin')
            })
          }
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