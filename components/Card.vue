<template>
  <div class="Card">
    <div class="cost">
      {{ cost }}
    </div>
    <div class="card-name">
      {{ cardName }}
    </div>
    <div class="card-body">
      {{ cardBody }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cost: {
      type: String,
      default: '10'
    },
    cardName: {
      type: String,
      default: 'card-name'
    },
    cardBody: {
      type: String,
      default: 'card-body'
    }
  }
}
</script>

<style>
.cost {
  float: left;
  font-size: 1cm;
  font-style: bold;
}

.card-name {
  float: center;
  font-size: 0.8cm;
}

.card-body {
  float: none;
  margin-top: 1cm;
  font-size: 0.5cm;
}

.Card {
  margin: 0.5cm;
}
</style>
