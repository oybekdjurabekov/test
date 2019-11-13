<template>
    <div class="vertical-layout vertical-menu-collapsible page-header-dark vertical-modern-menu 1-column  blank-page" :class="isLoggedIn ?  '' : 'login-bg'">
    <div class="row"  v-show="isLoggedIn">
        <div class="col12">
            <div class="content-wrapper-before light-blue"></div>
            <nav style="box-shadow: none;" class="navbar-main navbar-color nav-collapsible sideNav-lock navbar-dark light-blue no-shadow">
                <div class="nav-wrapper">
                    <router-link class="brand-logo left ml-3" :to="{name:'dashboard'}" tag="a">
                        {{$t("homepage")}}
                    </router-link>
                    <appMenu :listItems="listItems" :isLoggedIn="isLoggedIn" @logout="logout"></appMenu>
                </div>
            </nav>
        </div>   
    </div>
    <div class="row">
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
    <footer v-show="isLoggedIn" class="page-footer footer footer-static light-blue gradient-shadow navbar-border navbar-shadow">
      <div class="footer-copyright">
        <div class="container">
            <span>&copy; 2019 г. Ташкент. Все права защищены.</span>
            <span class="right hide-on-small-only">Нашли ошибку? Номеру телефона технической поддержке  
                <a href="tel:+998 71 210 02 60">+998 71 210 02 60.</a>
            </span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import appMenu from './components/menu/menu';
import { mapGetters } from 'vuex';
export default {
    computed:{
      ...mapGetters({
        isLoggedIn: 'Login/isLoggedIn',
        listItems: 'menu/listItems'
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