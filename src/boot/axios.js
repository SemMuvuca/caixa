import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$axios = axios

const api = axios.create({ baseURL: 'localhost:5000' })
Vue.prototype.$api = api

export { api }
