<template>
	<div class="col s12">
          <div class="container">
			<div class="section" id="user-profile">
			  <div class="row">
			    <!-- User Profile Feed -->
			    <div class="sidebar animate fadeUp left user-section-negative-margin">
			      <div class="row">
			        <div class="col s8 center-align offset-m2">
			          <img class="responsive-img circle z-depth-5" width="200" src="/assets/img/12.jpg" alt="">
			        </div>
			      </div>
			      <div class="row mt-5">
			      	<div class="sidebarMenu">
			      		<div class="sidebar-content">
			      			<div class="sidebar-menu">
			      				<ul>
							      <router-link v-for="(menu, index) in profileMenu" 
						        				 :to="'/profile/'+menu.url" 
						        				 :key="index"
						        				 tag="li"
			        				>
			        				    <a>{{menu.title}}</a>
			        				</router-link>
							    </ul>
			      			</div>
			      		</div>
			      	</div>
			      </div>
			    </div>
			    <md-content class="col m9  right">
		            <router-view class="animate fadeUp"></router-view>
			    </md-content>
			  </div>
			</div>
          </div>
        </div>
</template>
<script type="text/javascript">
	    import { mapGetters } from 'vuex';
	    export default {
	       data(){
	       	return{
	       		profileMenu:[
	       			{
	       				title:'Задачи',
	       				url:''
	       			},
	       			{
	       				title:'Запрос на встречу',
	       				url:'meeting'
	       			},
	       			{
	       				title:'Запрос на получение информации',
	       				url:'info'
	       			},
	       			{
	       				title:'Отправленные запросы',
	       				url:'sender'
	       			},
	       			{
	       				title:'Вопрос модератору',
	       				url:'answer'
	       			}
	       		]
	       	}
	       },
	       computed:{
	           
	       }
	    }
</script>
