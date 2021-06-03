import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$axios = axios

const api = axios.create({ baseURL: 'https://sem-muvuca.rj.r.appspot.com' })
Vue.prototype.$api = api

export { api }
