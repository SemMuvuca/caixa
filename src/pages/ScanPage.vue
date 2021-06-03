<template>
  <q-page style="{height: 100vh; width: 100vw}" class="bg-blue">
    <div class="fit row wrap justify-center items-center content-center fixed-center">
      <div class="bg-red col-3">
        <StreamBarcodeReader
          @decode="onDecode"
          @loaded="onLoaded"
        />
      </div>
      <div class="bg-green col-10 text-center">
        <!-- <p>Input Value: {{ text || "Nothing" }}</p> -->
      </div>
    </div>
  </q-page>
</template>

<script>
import { StreamBarcodeReader } from "vue-barcode-reader"
export default {
  name: 'PageIndex',
  components: {
    StreamBarcodeReader
  },
  methods: {
    loadData (product_list) {
      this.$q.loading.show()
      setTimeout(() => {
        this.$q.loading.hide()
      }, 3000);
      // api
      //   .post(``)
      //   .then(response => {
      //     this.item = response.data
      //     this.$q.loading.hide()
      //   })
      //   .catch(er => {
      //     // if (er.response.status === 404) {
      //     //   this.$q.notify({
      //     //     color: 'negative',
      //     //     position: 'top',
      //     //     message: 'O item escaneado não está na database',
      //     //     icon: 'report_problem'
      //     //   })
      //     // } else {
      //       this.$q.notify({
      //         color: 'negative',
      //         position: 'top',
      //         message: 'Oops, algo deu errado!',
      //         icon: 'report_problem'
      //       })
      //       this.$q.loading.hide()
      //     // }
      //   })
    },
    onDecode(product_list) {
      this.loadData(JSON.parse(product_list))
    },
    onLoaded() {
      console.log("load");
    },
  },
}
</script>
