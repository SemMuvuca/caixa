import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$axios = axios

const api = axios.create({ baseURL: 'url goes here' })
Vue.prototype.$api = api

export { api }
