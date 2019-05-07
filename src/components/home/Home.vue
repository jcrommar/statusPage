<template>
  <div>
      <div class="cards">
          <div 
          class="card incidents"
          v-if="openIncidents.length > 0"
          >
          <div 
          class="incident_item"
          v-for="incident in openIncidents"
          :key="incident.id"
          >
          <router-link :to="{ name: 'IncidentDetail', params: { id: incident.id }}">
              <IncidentListItem :incident="incident" />
          </router-link>
          </div>
        </div>
        <div
        class="card status"
        v-for="site in sites"
        :key="site.id"
        > 
        <SiteStatus :site="site"></SiteStatus>
      </div>
      </div>
  </div>
</template>

<script>
import IncidentListItem from './IncidentListItem.vue'
import SiteStatus from './SiteStatus.vue'
export default {
  name: 'Home',
  components: {IncidentListItem, SiteStatus},
  data () {
      return {
        openIncidents: [{'id': 1, 'title': 'Connectivity Issues', update_set: [{'description': 'We have noticed some connectivity issues', 'date': '2019-02-02 13:00:12', 'status': 'Investigating'}]}],
        sites: [{'title': 'API', 'status': 'up', 'uptime_set': [{'date': '2018-07-12T13:42:58.085870', 'id': 1, 'response_time': 352, 'status': 'up'}, {'date': '2018-07-12T13:43:58.085870', 'id': 2, 'response_time': 231, 'status': 'up'}, {'date': '2018-07-12T13:44:58.085870', 'id': 3, 'response_time': 123, 'status': 'down'}, {'date': '2018-07-12T13:45:58.085870', 'id': 4, 'response_time': 344, 'status': 'issue'}]}]
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card.status {
    margin-bottom: 10px;
}
</style>
