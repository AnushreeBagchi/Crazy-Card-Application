import React from "react";
import { shallow } from "enzyme";
import SelectGrid from "./SelectGrid";

describe("Tests for Card", () => {
    const mockCard = [{
        "name": "Student Life Card",
        "image": "https://ddialhyn49dxu.cloudfront.net/cards/hsbc2018-large.png",
        "apr": "18.9%",
        "balanceOfferDuration": "0 months",
        "purchaseOfferDuration": "6 months",
        "credit": "£1200",
        "min_income": 0,
        "empStatus": "Student"
        }];

  it("Renders correctly", () => {
    const wrapper = shallow(
      <SelectGrid selectedCards= {mockCard}/>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
