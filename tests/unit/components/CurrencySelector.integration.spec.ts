import { CurrencyType } from "@/components/currency.types";
import CurrencySelector from "@/components/CurrencySelector.vue";
import { mount } from "@vue/test-utils";

describe("CurrencySelector.vue", () => {
  it("should render provided currencies", () => {
    const currencies: CurrencyType[] = [{ label: "EUR", selected: false }];

    const wrapper = mount(CurrencySelector, {
      data: () => {
        return { currencies };
      },
    });

    expect(wrapper.vm.currencies).toEqual(currencies);
    expect(wrapper.element).toMatchSnapshot();
  });

  it("should render selected currencies", () => {
    const currencies: CurrencyType[] = [{ label: "EUR", selected: true }];

    const wrapper = mount(CurrencySelector, {
      data: () => {
        return { currencies };
      },
    });

    expect(wrapper.vm.allCurrencies).toEqual(currencies);
    expect(wrapper.vm.selectedCurrencies).toEqual(currencies);
    expect(wrapper.element).toMatchSnapshot();
  });

  it("should add selected currency", async () => {
    const currencies: CurrencyType[] = [
      { label: "EUR", selected: false },
      { label: "SEK", selected: false },
    ];

    const wrapper = mount(CurrencySelector, {
      data: () => {
        return { currencies };
      },
    });

    const expected: CurrencyType[] = [{ label: "EUR", selected: true }];

    expect(wrapper.vm.allCurrencies).toEqual(currencies);
    expect(wrapper.vm.selectedCurrencies).toEqual([]);

    wrapper.find("ul li.all-currencies:first-child").trigger("click");

    expect(wrapper.vm.selectedCurrencies).toEqual(expected);
  });

  it("should remove selected currency", async () => {
    const currencies: CurrencyType[] = [
      { label: "EUR", selected: true },
      { label: "SEK", selected: false },
    ];

    const wrapper = mount(CurrencySelector, {
      data: () => {
        return { currencies };
      },
    });

    const expected: CurrencyType[] = [{ label: "EUR", selected: true }];

    expect(wrapper.vm.allCurrencies).toEqual(currencies);
    expect(wrapper.vm.selectedCurrencies).toEqual([
      { label: "EUR", selected: true },
    ]);

    wrapper.find("ul li.selected-currencies:first-child").trigger("click");

    expect(wrapper.vm.selectedCurrencies).toEqual([]);
  });
});
