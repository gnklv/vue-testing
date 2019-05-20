import { mount } from "@vue/test-utils";
import AppHeader from "../AppHeader";

describe("AppHeader", () => {
  it("renders out the hello text", () => {
    const text = "Header";
    const wrapper = mount(AppHeader, {
      propsData: {
        text
      }
    });

    expect(wrapper.html()).toContain(text);
  })
});