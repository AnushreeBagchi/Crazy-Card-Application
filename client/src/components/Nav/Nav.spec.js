import React from "react";
import { shallow } from "enzyme";
import Nav from "./Nav";

describe("Tests for Card", () => {
  
  it("Renders correctly", () => {
    const wrapper = shallow(
      <Nav/>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
