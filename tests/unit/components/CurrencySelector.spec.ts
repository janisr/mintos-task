import { CurrencyType } from "@/components/currency.types";
import CurrencySelector from "@/components/CurrencySelector.vue";
import { shallowMount } from "@vue/test-utils";

describe("CurrencySelector.vue", () => {
  it("should compute selected currencies", () => {
    const currencies: CurrencyType[] = [
      { label: "EUR", selected: true },
      { label: "SEK", selected: false },
    ];

    const wrapper = shallowMount(CurrencySelector, {
      data: () => {
        return { currencies };
      },
    });

    const expected: CurrencyType[] = [{ label: "EUR", selected: true }];

    expect(wrapper.vm.currencies).toEqual(currencies);
    expect(wrapper.vm.selectedCurrencies).toEqual(expected);
  });

  it("should add selected currency", () => {
    const currencies: CurrencyType[] = [
      { label: "EUR", selected: false },
      { label: "SEK", selected: false },
    ];

    const wrapper = shallowMount(CurrencySelector, {
      data: () => {
        return { currencies };
      },
    });

    const expected: CurrencyType[] = [
      { label: "EUR", selected: true },
      { label: "SEK", selected: true },
    ];

    expect(wrapper.vm.currencies).toEqual(currencies);
    expect(wrapper.vm.selectedCurrencies).toEqual([]);

    wrapper.vm.toggleCurrency("EUR");
    wrapper.vm.toggleCurrency("SEK");

    expect(wrapper.vm.selectedCurrencies).toEqual(expected);
  });

  it("should remove selected currency", () => {
    const currencies: CurrencyType[] = [
      { label: "EUR", selected: true },
      { label: "SEK", selected: false },
    ];

    const wrapper = shallowMount(CurrencySelector, {
      data: () => {
        return { currencies };
      },
    });

    expect(wrapper.vm.currencies).toEqual(currencies);
    expect(wrapper.vm.selectedCurrencies).toEqual([
      { label: "EUR", selected: true },
    ]);

    wrapper.vm.toggleCurrency("EUR");

    expect(wrapper.vm.selectedCurrencies).toEqual([]);
  });
});
