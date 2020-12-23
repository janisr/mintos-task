<template>
  <currency-selector></currency-selector>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { CurrencyType } from "./components/currency.types";
import CurrencySelector from "./components/CurrencySelector.vue";

const CURRENCIES: CurrencyType[] = [
  { label: "EUR", selected: false },
  { label: "PLN", selected: false },
  { label: "GEL", selected: false },
  { label: "DKK", selected: false },
  { label: "CZK", selected: false },
  { label: "GBP", selected: false },
  { label: "SEK", selected: false },
  { label: "USD", selected: false },
  { label: "RUB", selected: false }
];

@Options({
  components: { CurrencySelector },
  provide: { currencies: CURRENCIES }
})
export default class App extends Vue {}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  margin: 0;
  padding: 0;

  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 16px;
}
</style>
