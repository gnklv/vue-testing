import { mount } from "@vue/test-utils";
import AppReveal from "../AppReveal";

describe("AppReveal", () => {
  it("renders the text on click", () => {
    const text = "Vue";
    const wrapper = mount(AppReveal, {
      propsData: {
        text
      }
    });

    wrapper.find("button").trigger("click");

    expect(wrapper.html()).toContain(text);
  });

  it("hides the original button when clicked", () => {
    const text = "Vue";
    const wrapper = mount(AppReveal, {
      propsData: {
        text
      }
    });

    wrapper.find("button").trigger("click");

    expect(wrapper.find("button").exists()).toBe(false);
  })
});
