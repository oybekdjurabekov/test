<template>
  <ul id="nav-mobile" class="right navbar-list mr-2">
    <router-link v-for="(items, index) in listItems" :key="index" :to="items.url" tag="li">
        <a >{{items.title}}</a>
    </router-link>
    <li>
        <a class="waves-effect waves-block waves-light notification-button" href="#" data-target="notifications-dropdown">
            <i class="material-icons">notifications_none<small class="notification-badge">5</small></i>
        </a>
        <ul class="dropdown-content" id="notifications-dropdown" style="" tabindex="0">
          <li tabindex="0">
            <h6>NOTIFICATIONS<span class="new badge">5</span></h6>
          </li>
          <li class="divider" tabindex="0"></li>
          <li tabindex="0">
            <a class="grey-text text-darken-2" href="#!">
                <span class="material-icons icon-bg-circle cyan small">add_shopping_cart</span> 
                A new order has been placed!
            </a>
            <time class="media-meta" datetime="2015-06-12T20:50:48+08:00">2 hours ago</time>
          </li>
          <li tabindex="0">
            <a class="grey-text text-darken-2" href="#!">
                <span class="material-icons icon-bg-circle red small">stars</span> 
                Completed the task
            </a>
            <time class="media-meta" datetime="2015-06-12T20:50:48+08:00">3 days ago</time>
          </li>
          <li tabindex="0">
            <a class="grey-text text-darken-2" href="#!">
                <span class="material-icons icon-bg-circle teal small">settings</span> 
                Settings updated
            </a>
            <time class="media-meta" datetime="2015-06-12T20:50:48+08:00">4 days ago</time>
          </li>
          <li tabindex="0">
            <a class="grey-text text-darken-2" href="#!">
                <span class="material-icons icon-bg-circle deep-orange small">today</span> 
                Director meeting started
            </a>
            <time class="media-meta" datetime="2015-06-12T20:50:48+08:00">6 days ago</time>
          </li>
          <li tabindex="0">
            <a class="grey-text text-darken-2" href="#!">
                <span class="material-icons icon-bg-circle amber small">trending_up</span> 
                Generate monthly report
            </a>
            <time class="media-meta" datetime="2015-06-12T20:50:48+08:00">1 week ago</time>
          </li>
       </ul>
      </li>
</ul>
</template>
<script type="text/javascript">
  export default{
    props:['listItems']
  }
</script>