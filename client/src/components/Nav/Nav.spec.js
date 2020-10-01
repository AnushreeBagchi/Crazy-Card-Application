import React from "react";
import { shallow } from "enzyme";
import Nav from "./Nav";

describe("Tests for Nav menu", () => {
  
  it("Renders correctly", () => {
    const wrapper = shallow(
      <Nav/>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
