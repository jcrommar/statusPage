<template>
<div>
    <h2>History</h2>
    <div
        class="calendar-item"
        v-for="(i, index) in dates"
        :key="index"
    >
    <p>{{i.toDateString()}}</p>
    <div v-if="getIncidents(i).length == 0">
        <i class="fas fa-check-circle green-color"></i>
        <div class="subtext">No Incidents</div>
    </div>
    <div v-for="i in getIncidents(i)" :key="i.id">
        <i class="fas fa-exclamation-circle orange-color"></i>
      <div class="subtext issue-name">
        <router-link :to="{ name: 'IncidentDetail', params: { id: i.id }}">
          {{i.title}}
        </router-link>
        <div class="issue-resolved">Resolved on: {{i.end | dateFormat}}</div>
      </div>
     </div>
    </div>
</div>    
</template>

<script>
import moment from 'moment'
export default {
    mounted () {
        var start = new Date()
        var end = new Date().setDate(start.getDate() - 6)
        // eslint-disable-next-line
        for (this.dates = []; end <= start; start.setDate(start.getDate() - 1)){
        this.dates.push(new Date(start))
        }
    },
    data () {
        return {
        closedIncidents: [{'id': 1, 'title': 'Slow response times', 'end': '2018-8-2 13:00:12', 'start': '2018-8-1 13:00:12', update_set: [{'description': 'We have noticed some connectivity issues', 'date': '2018-8-1 13:00:12', 'status': 'Investigating'}]}],
        dates: []
        }
    },
    methods: {
        getIncidents: function (i) {
            return this.closedIncidents.filter(a => moment(moment(a.start).startOf('day')).isSame(moment(i).startOf('day')))
        }
    },
    filters: {
        dateFormat: function (value) {
            return moment.utc(value).format('11')
        }
    }
}
</script>

<style scoped>
.calendar {
  font-family: Montserrat;
  font-weight: 300;
  max-width: 700px;
  margin: 30px auto 0px;
  font-size: 16px;
}
.calendar h2 {
  font-weight: 500;
  margin-bottom: 10px;
}
.green-color { color: #2EE779; }
.orange-color { color: #f3b34c; }
.subtext {
  color: lightgrey;
  display: inline-block;
  position: relative;
  left: 10px;
}
a, a:hover, a:visited, a:focus {
  color: #7d7d7d;
}
.issue-resolved {
  display: block;
  font-size: 12px;
  color: #a2a2a2;
}
.fa-exclamation-circle {
  vertical-align: top;
  top: 2px;
  position: relative;
}
.calendar-item {
  margin-bottom: 10px;
}
.calendar-item p{
  margin-bottom: 5px;
}
.small-square-indicator {
  width: 100%;
  height: 5px;
  display: inline-block;
}
.issue-name {
  color: #7d7d7d;
}
</style>

