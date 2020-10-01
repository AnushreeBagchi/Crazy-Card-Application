import React from "react";
import { shallow } from "enzyme";
import Dropdown from "./Dropdown";
import {TITLE_LABEL,TITLE_DROPDOWN } from "../../constants/constants";

describe("Tests for Dropdown", () => {

  it("Renders correctly", () => {
    const wrapper = shallow(
      <Dropdown classDiv="title"
      title={TITLE_LABEL}
      menus={TITLE_DROPDOWN}/>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
