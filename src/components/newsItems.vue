<template>
	<div>

		<div class="blog-box wow fadeIn">
	        <div class="post-media">
	            <router-link :to="'Blog/'+id">
	            	<img :src='img' alt="" class="img-fluid">
	                <div class="hovereffect">
	                    <span></span>
	                </div>
	            </router-link>
	        </div>
	        <!-- end media -->
	        <div class="blog-meta big-meta text-center">
	            <div class="post-sharing">
	                <ul class="list-inline">
	                    <li><a href="#" class="fb-button btn btn-primary"><i class="fa fa-facebook"></i> <span class="down-mobile">Share on Facebook</span></a></li>
	                    <li><a href="#" class="tw-button btn btn-primary"><i class="fa fa-twitter"></i> <span class="down-mobile">Tweet on Twitter</span></a></li>
	                    <li><a href="#" class="gp-button btn btn-primary"><i class="fa fa-google-plus"></i></a></li>
	                </ul>
	            </div><!-- end post-sharing -->
	            <router-link tag="h4" :to="'Blog/'+id">
	            	<a>{{title}}</a>
	            </router-link>
	            <p>{{description}}</p>
	            <small><a href="#" title="">{{category}}</a></small>
	            <small><a href="#" title="">{{author}}</a></small>
	            <small><a href="#" title="">{{date}}</a></small>
	            <small><a href="#" title=""><i class="fa fa-eye"></i> {{see}}</a></small>
	        </div><!-- end meta -->
	    </div><!-- end blog-box -->
	    <hr class="invis">
	</div>	
</template>
<script type="text/javascript">
	export default{
		props:['id','title', 'img', 'date', 'category', 'author', 'description', 'see']
	}
</script>