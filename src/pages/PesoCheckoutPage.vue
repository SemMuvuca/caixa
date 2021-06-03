<template>
  <q-page style="{height: 100vh; width: 100vw}" class="bg-blue">
    <div class="fit row wrap justify-center items-center content-center fixed-center">
      <div @click="checkWeight" class="bg-red col-6">
        <div class="h1">Por favor, coloque sua cesta na balança</div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { api } from '../boot/axios'

export default {
  name: 'PageIndex',
  data () {
    return {
      // status: null
    };
  },
  methods: {
    checkWeight () {
      let status = setInterval(() => {
        api.get('/check_weight')
        .then(response => {
          console.log("status => ", response.status)
          this.$q.notify({
              color: 'green',
              position: 'top',
              message: 'Peso verificado com sucesso.'
            })
          clearInterval(status)
        })
        .catch(error => {
          this.$q.notify({
            color: 'negative',
            position: 'top',
            message: 'Oops, algo deu errado!',
            icon: 'report_problem'
          })
          console.log("status => ", error.response.status)
        })
      }, 2000)
    }
  }
}
</script>
