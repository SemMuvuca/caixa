<template>
  <q-page style="{height: 100vh; width: 100vw}" class="bg-green">
    <div class="fit row wrap justify-center items-center content-center fixed-center">
      <div class="bg-red col-4">
        <StreamBarcodeReader
          @decode="onDecode"
          @loaded="onLoaded"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import { StreamBarcodeReader } from "vue-barcode-reader"
import { api } from '../boot/axios'

export default {
  name: 'ScanPage',
  components: {
    StreamBarcodeReader
  },
  methods: {
    loadData (products_quantity) {
      let products_list = {'products_quantity': products_quantity}
      this.$q.loading.show()
      // setTimeout(() => {
      //   this.$q.loading.hide()
      //   this.$router.push('balance')
      // }, 3000);
      api
        .post('/scan', {
          products_list
        })
        .then(response => {
          this.$q.loading.hide()
          this.$router.push('balance')
        })
        .catch(er => {
          this.$q.notify({
            color: 'negative',
            position: 'top',
            message: 'Oops, algo deu errado!',
            icon: 'report_problem'
          })
          this.$q.loading.hide()
        })
    },
    onDecode(products_quantity) {
      this.loadData(JSON.parse(products_quantity))
    },
    onLoaded() {
      console.log("load");
    },
  }
}
</script>
