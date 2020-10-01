import React from "react";
import { shallow } from "enzyme";
import DisplayCard from "./DisplayCard.jsx";

describe("Tests for Display Card", () => {
    function tick() {
        return new Promise(resolve => {
          setTimeout(resolve, 0);
        })
      }
  const mockCard = {
    name: "Student Life Card",
    image: "https://ddialhyn49dxu.cloudfront.net/cards/hsbc2018-large.png",
    apr: "18.9%",
    balanceOfferDuration: "0 months",
    purchaseOfferDuration: "6 months",
    credit: "£1200",
    min_income: 0,
    empStatus: "Student",
  };
  it("Renders correctly", () => {
    const wrapper = shallow(<DisplayCard card={mockCard} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("The button should have test ADD Card", () => {
    const onButtonClickMock = jest.fn();
    const wrapper = shallow(
      <DisplayCard card={mockCard} hideAddBtn={false} hideRemoveBtn={true} />
    );
    const addBtn = wrapper.find(".add-btn");
    expect(addBtn.text()).toEqual("ADD Card");
    
  });

  it("On Clicking Add Card, the button should toggle",()=>{
    const onButtonClickMock = jest.fn();
    const wrapper = shallow(
      <DisplayCard card={mockCard} hideAddBtn={false} hideRemoveBtn={true} />
    );
    const addBtn = wrapper.find(".add-btn");
    addBtn.simulate("click");
    jest.useFakeTimers();
    setTimeout(()=>{
        const removeBtn = wrapper.find(".remove-btn");
        jest.runAllTimers();
        expect(removeBtn.text()).toEqual("Remove Card");
    },1000);
  });
});
