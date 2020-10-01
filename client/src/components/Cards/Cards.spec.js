import React from "react";
import { shallow } from "enzyme";
import { Cards } from "./Cards.jsx";

describe("Tests for Cards", () => {
  const fetchCards = () => ({});
  const fetchAvailableCards = () => ({});
  const loadSelectedCards = () => ({});
  const state = {
    card: [
      {
        name: "Anywhere Card",
        image: "https://ddialhyn49dxu.cloudfront.net/cards/mbna2019-large.png",
        apr: "33.9%",
        balanceOfferDuration: "0 months",
        purchaseOfferDuration: "0 months",
        credit: "£300",
        min_income: 0,
        empStatus: null,
      },
    ],
  };

  it("Renders correctly", () => {
    const wrapper = shallow(
      <Cards
        state={state}
        fetchCards={fetchCards}
        fetchAvailableCards={fetchAvailableCards}
        loadSelectedCards={loadSelectedCards}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
