import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  strict: debug,
  state: {
    socket: {
      isConnected: true,
      message: '',
      reconnectError: false
    }
  },
  mutations: {
    SOCKET_ONOPEN (state, event) {
      console.log('What can I do for you?')
      state.socket.isConnected = true
    },
    SOCKET_ONCLOSE (state, event) {
      console.log('Oh dang, I can\'t reach you anymore!')
      state.socket.isConnected = false
    },
    SOCKET_ONERROR (state, event) {
      console.error(state, event)
    },
    // default handler called for all methods
    SOCKET_ONMESSAGE (state, message) {
      state.socket.message = message
    },
    // mutations for reconnect methods
    SOCKET_RECONNECT (state, count) {
      console.info(state, count)
    },
    SOCKET_RECONNECT_ERROR (state) {
      console.log('we are back up and sailing guys! Nothing to worry about.')
      state.socket.reconnectError = true
    }
  },
  actions: {
  }
})
