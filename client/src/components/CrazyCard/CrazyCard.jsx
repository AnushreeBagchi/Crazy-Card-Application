import React from "react";
import DisplayCard from "../DisplayCard/DisplayCard.jsx";

class CrazyCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hideAddBtn: false,
      hideRemoveBtn: true,
    };
  }
  render() {

    const selectCard = () => {
      this.setState({
        hideAddBtn: true,
        hideRemoveBtn: false,
      });
      this.props.onSelect(this.props.card);
    };
    const removeCard = () => {
      this.props.onRemove(this.props.card);
      this.setState({
        hideAddBtn: false,
        hideRemoveBtn: true,
      });
    };

    return (
      <DisplayCard
        card={this.props.card}
        hideAddBtn={this.state.hideAddBtn}
        hideRemoveBtn={this.state.hideRemoveBtn}
        selectCard= {selectCard}
        removeCard={removeCard}
      ></DisplayCard>
    
    );
  }
}
export default CrazyCard;
