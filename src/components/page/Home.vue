<template>
    <div class="col m12 right">
        <div class="card">
            <div class="col m12" style="padding:40px 20px">
              <full-calendar :defaultView="dayGridMonth" :editable="editable" :events="events" @event-render="eventRender"  :config="config"></full-calendar>   
            </div>
        </div>
        <md-snackbar :md-position="position" :md-duration="duration" :md-active.sync="showSnackbar" md-persistent>
        <span>Посмотреть в задачах</span>
        <router-link :to="{name:'task'}" tag="md-button" class="btn cyan waves-effect waves-light">Задачи</router-link>
      </md-snackbar>
    </div>
</template>
<script>
    import Vue from 'vue'
    import 'bootstrap'
    import moment from 'moment'
    // import 'bootstrap/dist/css/bootstrap.min.css'  
    import $ from 'jquery'
    import { FullCalendar } from 'vue-full-calendar'
    import { mapGetters } from 'vuex'
    import 'fullcalendar/dist/fullcalendar.css'
    export default {
        
       data() {
        return {
          showSnackbar: false,
          dayGridMonth:'month',
          position: 'left',
          editable:false,
          duration: 3000,
          show:true,
          contentButton:`<a href="#"
                           class="md-primary md-raised md-theme-default add">Добавить к себе</a>
                        </div>`,
          
          config: {
            locale: 'Ru',
            eventLimit:true,
            eventColor: '#458CC7',
            columnFormat: 'dddd',
            selectHelper: true,
            header: {
              left: '',
              right: 'prev, next',
            },
          },
        }
      },
      methods:{
        eventRender(event, element) {
          $(element).popover({
            html : true,
            placement: 'auto',
            boundary: 'scrollParent',
            boundaryPadding: 5,
            animation:true,
            title : 'Мероприятия <a href="#" class="close">&times;</a>',
            content : ` <div class="media">
                          <div class="media-body">
                            <em>${moment(event.start).format('DD.MM.YYYY h:m')}</em>
                            <h5 class="media-heading">${event.title}</h5>
                            </div>
                          </div>
                        <div>${this.contentButton}`
            });
          // document.querySelector('div').addEventListener('click', e => {alert(e.target.tagName)})
            $(document).off('click').on("click", ".add", e =>{
                this.addTask(event)
            });
            $('body').on('click', function (e) {
                if (!element.is(e.target) && element.has(e.target).length === 0 && $('.popover').has(e.target).length === 0)
                    element.popover('hide');
            });
             $(document).on("click", ".popover .close, .fc-close" , function(e){
                e.preventDefault();
                $(".popover").popover('hide');
            });
            
        },
        addTask(event){
          this.$store.commit('ToDoList/addTasks', {title:event.title, date:moment(event.start).format('DD.MM.YYYY'), description:event.description})
          this.showSnackbar = true
        }
      }, 
      computed:{
        ...mapGetters('Events', {
          'events':'getEvents'
        })
      },
      components: {
        FullCalendar,
        
      }
    }
</script>
