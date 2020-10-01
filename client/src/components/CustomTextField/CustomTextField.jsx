import React from "react";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import { addCustomer } from "../../store/actions/customer";

class CustomTextField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  render() {
    const onChange = (e, field) => {
      let hasError = e.target.value.length < field.minLength ? true : false;

      this.setState({ hasError });
      this.props.addCustomer({ [field.name]: e.target.value });
    };

    return (
      <TextField
        error={this.state.hasError}
        helperText={this.state.hasError ? this.props.field.helperText : ""}
        minLength={this.props.field.minLength}
        required={this.props.field.required}
        label={this.props.field.label}
        type={this.props.field.type}
        defaultValue={this.props.field.defaultValue}
        className="center"
        onChange={(e) => onChange(e, this.props.field)}
      ></TextField>
    );
  }
}

const mapStateToProps = (state) => ({
  state: state,
});
const mapDispatchToProps = (dispatch) => ({
  addCustomer: (data) => {
    dispatch(addCustomer(data));
  },
});

export {CustomTextField};

export default connect(mapStateToProps, mapDispatchToProps)(CustomTextField);
