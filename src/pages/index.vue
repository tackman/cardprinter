<template>
  <section class="container">
    <div v-if="cardList.length === 0">
      <input
        id="input"
        type="file"
        @change="fileChosen"
      >
    </div>
    <div v-if="cardList.length > 0">
      <div class="card-grid-container">
        <div
          v-for="card in cardList"
          :key="card.name"
        >
          <Card v-bind="card" />
        </div>
      </div>
    </div>

  </section>
</template>

<script>
import Card from '~/components/Card.vue'
import parse from 'csv-parse'
import { mapMutations, mapGetters, mapActions } from 'vuex'

export default {
  components: {
    Card
  },

  computed: {
    ...mapGetters({
      cardList: 'cards/cardList'
    })
  },

  methods: {
    fileChosen(e) {
      const me = this
      const output = []
      const reader = new FileReader()
      let f = e.target.files[0]

      reader.onload = function(e) {
        parse(reader.result, { skip_empty_lines: true })
          .on('readable', function() {
            let record
            while ((record = this.read())) {
              let card = {
                cost: record[0],
                cardName: record[1],
                cardBody: record[2]
              }
              output.push(card)
            }
          })
          .on('end', function() {
            me.$store.commit('cards/set', output)
          })
      }

      reader.readAsText(f)
    }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.card-grid-container {
  display: grid;
  grid-template-columns: repeat(3, 33%);
  grid-template-rows: repeat(3, 33%);
  width: 21cm;
  height: 28.7cm;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
