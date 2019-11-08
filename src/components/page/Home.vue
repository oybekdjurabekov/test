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
          events: [
            {
                title  : 'event1',
                description:'asd123123123',
                start  : '2019-10-10',
            },
            {
                title  : 'event2',
                description:'eventPopover ',
                start  : '2019-10-12',
            },
            {
                title  : 'event5',
                description:'eventPopover eventPopover ',
                start  : '2019-10-12',
            },
            {
                title  : 'event72',
                description:'eventPopover eventPopover eventPopover ',
                start  : '2019-10-12',
            },
            {
                title  : 'event33',
                description:'eventPopover eventPopover eventPopover eventPopover ',
                start  : '2019-10-12',
            },
            {
                title  : 'event3',
                description:'asdjnkj123123',
                start  : '2019-10-09',
            },
          ],
          config: {
            locale: 'Ru',
            eventLimit:1,
            eventColor: '#458CC7',
            columnFormat: 'dddd',
            selectHelper: true,
            header: {
              left: 'prev, next today',
              right: '',
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
                            <em>${moment(event.start).format('DD.MM.YYYY')}</em>
                            <h4 class="media-heading">${event.title}</h4>
                            <p>${event.description}</p></div>
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
             $(document).on("click", ".popover .close, .fc-close" , function(){
                $(".popover").popover('hide');
            });
            
        },
        addTask(event){
          this.$store.commit('ToDoList/addTasks', {title:event.title, date:moment(event.start).format('DD.MM.YYYY'), description:event.description})
          this.showSnackbar = true
        }
      }, 
      components: {
        FullCalendar,
        
      }
    }
</script>
