import { mount } from "@vue/test-utils";
import AppTag from "../AppTag";

describe("AppTag", () => {
  const text = "Vue";

  it("renders out the props text", () => {
    const wrapper = mount(AppTag, {
      propsData: {
        text
      }
    });

    expect(wrapper.html()).toContain(text);
  });

  it("renders the plain theme", () => {
    const wrapper = mount(AppTag, {
      propsData: {
        text
      }
    });

    expect(wrapper.classes()).not.toContain("tag--dark");
  });

  it("renders the dark theme", () => {
    const wrapper = mount(AppTag, {
      propsData: {
        text,
        dark: true
      }
    });

    expect(wrapper.classes()).toContain("tag--dark");
  });
});
