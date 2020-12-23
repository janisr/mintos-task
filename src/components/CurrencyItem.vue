<template>
  <li :class="classes" @click="toggleCurrency">
    <label>{{ currency.label }}</label>
    <span class="remove" v-if="type === 'selected-currencies'">X</span>
  </li>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { CurrencyType, TListType } from "./currency.types";

@Options({
  props: { currency: Object, type: String },
  emits: ["currency-selected"]
})
export default class CurrencyItem extends Vue {
  public currency!: CurrencyType;
  public type: TListType = "all-currencies";

  public get classes() {
    return {
      selected: this.currency?.selected,
      [this.type]: true
    };
  }

  public toggleCurrency() {
    this.$emit("currency-selected", this.currency.label);
  }
}
</script>

<style lang="scss" scoped>
li {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 30%;
  flex: 1 1 30%;
  border-radius: 1px;
  height: 26px;
  border: 1px solid white;
  margin: 4px;
}

.selected-currencies {
  background-color: #e5e5e5;

  .remove {
    position: absolute;
    right: -6px;
    top: -6px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 0.6rem;
    line-height: 1.3;
    text-align: center;
    background-color: black;
    color: white;
    border: 1px solid white;

    &:hover {
      background-color: white;
      color: black;
      border-color: black;
    }
  }
}

.all-currencies {
  border: 1px solid #c1c1c1;
  background-color: #ececec;
  justify-content: flex-start;

  label {
    cursor: pointer;
    display: contents;
    color: #002a67;

    &::before {
      content: " ";
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 11px;
      height: 11px;
      border-radius: 3px;
      border: 1px solid #c1c1c1;
      margin: 0 6px;

      font-size: 0.65rem;
      font-weight: 700;
      text-align: center;
    }
  }

  &.selected {
    background-color: white;

    label::before {
      content: "X";
      color: #ff0000;
    }
  }

  &:hover {
    background-color: #dcdcdc;
    cursor: pointer;
  }
}
</style>
