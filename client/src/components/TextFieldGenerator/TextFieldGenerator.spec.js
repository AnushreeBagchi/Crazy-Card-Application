import React from "react";
import { shallow } from "enzyme";
import TextFieldGenerator from "./TextFieldGenerator";
import {DETAILS} from "../../constants/constants";

describe("Tests for Card", () => {

  it("Renders correctly", () => {
    const wrapper = shallow(
      <TextFieldGenerator textFields={DETAILS.textFields}/>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
