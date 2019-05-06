<template>
    <div class="cards">
  <div class="card incidents">
    <h1>{{incident.title}}</h1>
    <div
      class="incident_item"
      v-for="i in incident.update_set"
      :key="i.id"
     >
       <p>{{i.description}}</p>
       <div class="half">{{i.date}}</div><div class="half right">Status: {{i.status}}</div>
     </div>
  </div>
  <router-link :to="{ name: 'Home'}">
    <div class="back">&larr; back</div>
  </router-link>
</div>
</template>

<script>
export default {
    data () {
        return {
            incidents: [{id: 1, title: 'Connectivity issues', update_set: [{'title': 'Connectivity issues: slow response time API', 'description': 'We are experiencing connectivity issues on our API. We are investigating this issue and will keep you up to date on this.', 'date': '2018-9-12 12:30:00', 'status': 'identified'}, {'title': 'We are still investigating this issue.', 'description': 'We are still working hard on investigating this issue. We appreciate your support and patience.', 'date': '2018-8-23 12:23:23', 'status': 'investigating'}]}],
            incident: []
        }
    },
    mounted () {
          this.incident = this.incidents.find(a => a.id === parseInt(this.$route.params.id))
    }
}
</script>

<style scoped>
    .half {
    display: inline-block;
    width: 50%;
    color: #999999;
    }
    .right {
    text-align: right;
    }
    h2 {
    margin-bottom: 10px;
    }
</style>
