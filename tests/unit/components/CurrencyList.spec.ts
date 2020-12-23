import { CurrencyType } from "@/components/currency.types";
import { mount } from "@vue/test-utils";
import CurrencyList from "../../../src/components/CurrencyList.vue";

describe("CurrencyList.vue", () => {
  it("should compute selected currencies", () => {
    const currencies: CurrencyType[] = [
      { label: "EUR", selected: true },
      { label: "SEK", selected: false },
    ];

    const wrapper = mount(CurrencyList, {
      data: () => {
        return { currencies };
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
