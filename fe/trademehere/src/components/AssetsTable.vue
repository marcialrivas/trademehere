<template>
    <w-flex>
        <w-table
            :headers="headers"
            :items="assets"
            fixed-headers
        >
        </w-table>
    </w-flex>
</template>

<script>
import AssetsApi from '../../api/assets.js'

export default {
  name: 'AssetsTable',
  props: {
  },
  data () {
      return {
          assets: [],
          headers: [
              {label: "id",  key: 'id' },
              {label: "class",  key: 'class' },
              {label: "exchange",  key: 'exchange' },
              {label: "symbol",  key: 'symbol' },
              {label: "status",  key: 'status' },
              {label: "tradable",  key: 'tradable' },
              {label: "marginable",  key: 'marginable' },
              {label: "shortable",  key: 'shortable' },
              {label: "easy_to_borrow",  key: 'easy_to_borrow' },
              {label: "fractionable",  key: 'fractionable' }

          ]
      }
  },
  mounted() {
      AssetsApi.index()
      .then(function (response){
          this.assets = response.data;
      }.bind(this));
  }
}
</script>