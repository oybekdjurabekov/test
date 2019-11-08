<template>
	<div class="col s12">
          <div class="container">
            <div class="section mt-2" id="blog-list">
              <div class="row">
                <div class="col s12 m6 l4 animate fadeUp" v-for="(releaseItem, index) in releaseItems">
                  <div class="card-panel border-radius-6 mt-10 card-animation-1">
                    <router-link :to="'release/'+releaseItem.id">
                        <img :src='releaseItem.file' alt="" class="responsive-img border-radius-8 z-depth-4 image-n-margin" />
                    </router-link>
                    <h6 class="deep-purple-text text-darken-3 mt-5">
                        <router-link :to="'release/'+releaseItem.id">
                            {{releaseItem.title}}
                        </router-link>
                    </h6>
                    <span>{{releaseItem.description}}</span>
                    <div class="row mt-4">
                      <div class="col s6 mt-1">
                        <img src="../../../assets/img/img3.jpg" class="circle mr-3 width-30 vertical-text-middle">
                        <span class="pt-2">{{releaseItem.admin}}</span>
                      </div>
                      <div class="col s6 mt-3 right-align social-icon">
                        <span class="material-icons">alarm_on</span> 
                        <span class="ml-3 vertical-align-top">{{releaseItem.data}}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
</template>
<script>
    import {mapGetters} from "vuex"
	export default{
        computed:{
            ...mapGetters('Release', {
                "releaseItems":'releaseItems'
            })
        }
	}
</script>