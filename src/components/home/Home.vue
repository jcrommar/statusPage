<template>
  <div>
      <div class="cards">
          <div 
          class="card incidents"
          v-if="openIncidents.length > 0"
          >
          <div 
          class="incident_item"
          v-for="i in openIncidents"
          :key="i.id"
          >
          <router-link :to="{ name: 'IncidentDetail', params: { id: i.id }}">
              <IncidentListItem :incident="i" />
          </router-link>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import IncidentListItem from './IncidentListItem.vue'
export default {
  name: 'Home',
  components: {
      IncidentListItem
  },
  data () {
      return {
              openIncidents: [{'id': 1, 'title': 'Connectivity Issues', update_set: [{'description': 'We have noticed some connectivity issues', 'date': '2019-02-02 13:00:12', 'status': 'Investigating'}]}]
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
