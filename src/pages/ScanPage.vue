<template>
  <q-page style="{height: 100vh; width: 100vw}" class="bg-blue">
    <div class="fit row wrap justify-center items-center content-center fixed-center">
      <div class="col-5">
        <StreamBarcodeReader
          @decode="onDecode"
          @loaded="onLoaded"
        />
      </div>
      <!-- <div class="bg-green col-10 text-center">
        <p>Input Value: {{ text || "Nothing" }}</p>
      </div> -->
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
    loadData () {
      console.log("entrou")
      this.$q.loading.show()
      setTimeout(() => {
      this.$q.loading.hide()
      this.$router.push('balance')
      }, 6000)
    }
    ,
    onDecode() {
      this.loadData()
    },
    onLoaded() {
      console.log("load");
    },
  }
}
</script>
