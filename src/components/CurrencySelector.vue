<template>
  <section>
    <currency-list
      :currencies="selectedCurrencies"
      :type="'selected-currencies'"
      @currency-selected="toggleCurrency($event)"
    ></currency-list>

    <div class="seperator"></div>

    <currency-list
      :currencies="allCurrencies"
      :type="'all-currencies'"
      @currency-selected="toggleCurrency($event)"
    ></currency-list>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import CurrencyList from "./CurrencyList.vue";

import { CurrencyType } from "./currency.types";
import CurrencyItem from "./CurrencyItem.vue";

@Options({
  components: { CurrencyList, CurrencyItem },
  inject: { currencies: { default: [] } }
})
export default class CurrencySelector extends Vue {
  public currencies!: CurrencyType[];

  public allCurrencies: CurrencyType[] = [];

  public get selectedCurrencies(): CurrencyType[] {
    return this.allCurrencies?.filter(c => c.selected);
  }

  public toggleCurrency(label: string) {
    this.allCurrencies = this.allCurrencies.map(c => {
      if (c.label === label) {
        c.selected = !c.selected;
      }

      return c;
    });
  }

  beforeMount() {
    this.allCurrencies = [...this.currencies];
  }
}
</script>

<style lang="scss" scoped>
section {
  width: 360px;
  border: 1px solid #969696;
  border-radius: 4px;
  box-shadow: 2px 2px 7px 0 rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  padding: 8px;
}

.seperator {
  height: 8px;
}
</style>
