<template>
  <ul>
    <currency-item
      v-for="currency in currencies"
      :key="currency"
      :currency="currency"
      :type="type"
      @currency-selected="$emit('currency-selected', $event)"
    ></currency-item>
  </ul>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import CurrencyItem from "./CurrencyItem.vue";
import { CurrencyType, TListType } from "./currency.types";

@Options({
  props: { currencies: Array, type: String },
  emits: ["currency-selected"],
  components: { CurrencyItem }
})
export default class CurrencyList extends Vue {
  public currencies!: CurrencyType[];
  public type!: TListType;
}
</script>

<style lang="scss" scoped>
ul {
  list-style-type: none;
  display: flex;

  margin: 4px;
  padding: 0;
  flex-wrap: wrap;
}
</style>
