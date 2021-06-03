<template>
  <q-page @click="checkWeight" style="{height: 100vh; width: 100vw}" class="bg-blue">
    <div class="fit row wrap justify-center items-center content-center fixed-center">
      <div class=" text-white text-center col-8">
        <div class="text-h2">Por favor, coloque sua cesta na balança</div>
      </div>
    </div>
  </q-page>
</template>

<script>
// import { api } from '../boot/axios'

export default {
  name: 'PageIndex',
  data () {
    return {
      // status: null
    };
  },
  methods: {
    checkWeight () {
      this.$q.loading.show()
      setTimeout(() => {
        this.$q.notify({
          color: 'green',
          position: 'top',
          message: 'Peso validado com sucesso, por favor escaneie o qrcode ao lado com o app do mercado pago para pagar',
          icon: 'done'
        })
      this.$q.loading.hide()
      this.$router.push('/')
      }, 5000)
    }
  }
}
</script>
