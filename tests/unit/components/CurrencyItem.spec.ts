import { CurrencyType } from "@/components/currency.types";
import { mount, shallowMount } from "@vue/test-utils";
import CurrencyItem from "../../../src/components/CurrencyItem.vue";

describe("CurrencyItem.vue", () => {
  it("should render currency item", () => {
    const currency: CurrencyType = { label: "EUR", selected: true };

    const wrapper = mount(CurrencyItem, {
      data: () => {
        return { currency, type: "all-currencies" };
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });

  it("should compute currency style if selected", () => {
    const currency: CurrencyType = { label: "EUR", selected: true };

    const wrapper = shallowMount(CurrencyItem, {
      data: () => {
        return { currency, type: "all-currencies" };
      },
    });

    expect(wrapper.vm.classes).toEqual({
      "all-currencies": true,
      selected: true
    });
  });

  it("should compute currency style if not selected", () => {
    const currency: CurrencyType = { label: "EUR", selected: false };

    const wrapper = shallowMount(CurrencyItem, {
      data: () => {
        return { currency, type: "all-currencies" };
      },
    });

    expect(wrapper.vm.classes).toEqual({
      "all-currencies": true,
      selected: false
    });
  });
});
