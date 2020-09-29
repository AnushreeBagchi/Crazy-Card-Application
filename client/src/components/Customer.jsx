import React from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "../../app/index.css";
import Dropdown from "./Dropdown";
import {
  addCustomer,
  getValidations,
  validateField,
  hasComponentError,
} from "../store/actions/customer";
import {
  DETAILS,
  DOB_DEFAULT_VALUE,
  EMP_STATUS_LABEL,
  TITLE_LABEL,
  TITLE_DROPDOWN,
  EMP_STATUS_DROPDOWN,
} from "../constants/constants";
import { connect } from "react-redux";
import Nav from "./Nav";
import { ThemeConsumer } from "../contexts/theme";

class Customer extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getValidations();
  }
  render() {
    const handleChange = (e, field) => {
      this.props.validateField({ field, value: e.target.value });
      this.props.addCustomer({ [field]: e.target.value });
    };

    const hasFieldError = (field) => {
      let errors = this.props.state.customer.errors;
      let error = errors ? errors[field] : "";
      if (error) {
        return true;
      }
    };

    const goToResult = () => {
      this.props.history.push({
        pathname: "/cards/",
        state: this.props.state,
      });
    };

    const getHelperText = (name) => {
      let errors = this.props.state.customer.errors;
      return errors ? errors[name] : "";
    };

    return (
      <ThemeConsumer>
        {({ theme }) => (
          <>
            <Nav></Nav>
            <Paper className={`paper theme-${theme}`}>
              <form className="container">
                <Dropdown
                  classDiv="title"
                  title={TITLE_LABEL}
                  menus={TITLE_DROPDOWN}
                  value={this.props.state.customer.title}
                  handleChange={(e) => handleChange(e, "title")}
                />

                {DETAILS.textFields.map((field) => (
                  <TextField
                    error={hasFieldError(field.name)}
                    helperText={getHelperText(field.name)}
                    required={field.name === "income"}
                    label={field.label}
                    key={field.name}
                    type={field.name === "dob" ? "date" : "text"}
                    className="center"
                    defaultValue={
                      field.name === "dob" ? DOB_DEFAULT_VALUE : null
                    }
                    onChange={(e) => handleChange(e, field.name)}
                  ></TextField>
                ))}

                <Dropdown
                  required={true}
                  classDiv="center"
                  title={ EMP_STATUS_LABEL }
                  menus={ EMP_STATUS_DROPDOWN }
                  value={ this.props.state.customer.empStatus }
                  handleChange={(e) => handleChange(e, "empStatus")}
                />
                <Button
                  className="btn center"
                  variant="contained"
                  color="primary"
                  onClick={goToResult}
                  disabled={hasComponentError(this.props.state)}
                >
                  Review Credit Cards
                </Button>
              </form>
            </Paper>
          </>
        )}
      </ThemeConsumer>
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
  getValidations: () => {
    dispatch(getValidations());
  },
  validateField: (data) => {
    dispatch(validateField(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Customer);
