import React from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "../../app/index.css";
import Dropdown from "./Dropdown";
import { addCustomer } from "../store/actions/customer";
import { connect } from "react-redux";
import Nav from "./Nav";
import { ThemeConsumer } from "../contexts/theme";

class Customer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      errors : {
        "income" : "Required",
      }
    }
  }
  render() {
    const details = {
      titleArray: ["Mr", "Mrs", "Ms"],
      empStatusArray: ["Full Time", "Part Time", "Student"],
      textFields: [
        { name: "name", label: "Name", type: "text" },
        { name: "dob", label: "Birthday", type: "date" },
        { name: "address", label: "Address", type: "text" },
        { name: "city", label: "City", type: "text" },
        { name: "postal", label: "Postal", type: "text" },
        { name: "income", label: "Annual Income", type: "text" },
      ],
    };


    const handleChange = (e, field) => {
      validate(field, e.target.value);
      this.props.addCustomer({ [field]: e.target.value });
    }

    const validate = (field, value) => {
      let errors = {...this.state.errors};
      switch (field){
        case 'income':
          errors.income = isNaN(Number(value)) ? "Must be a number" : "";
          break;
        case 'name': 
        case 'address': 
          errors[field] = value.length < 5 ? "Length must be 5 characters long! " : "";
          break;
        case 'city': 
        case 'postal':
          errors[field] = value.length < 3 ? "City must be atlest 3 characters long! " : "";
          break;
        default:
          break;
      }
      this.setState({errors});
    }

    const hasFieldError = (field) => {
      let error = this.state.errors[field];
      if (error) {
        return true;
      }
    }

    const hasComponentError = () => {
      let returnValue = false;
      let errors = this.state.errors;
      Object.keys(errors).forEach(e => {
        if (errors[e]) {
          returnValue =  true;
        }
      })
      return returnValue;
    }

    const goToResult = () => {
      this.props.history.push({
        pathname: "/cards/",
        state: this.props.state,
      });
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
                  title="Title"
                  menus={details.titleArray}
                  value={this.props.state.customer.title}
                  handleChange={(e) => handleChange(e, "title")}
                />

                {details.textFields.map((field) => (
                  <TextField
                    error = {hasFieldError(field.name)}
                    helperText={this.state.errors[field.name]}
                    required = {field.name === "income"}
                    label={field.label}
                    key={field.name}
                    type={field.name === "dob" ? "date" : "text"}
                    className="center"
                    defaultValue={field.name === "dob" ? "2017-05-24" : null}
                    onChange={(e) => handleChange(e, field.name)}
                  ></TextField>
                ))}

                <Dropdown
                  required = {true}
                  classDiv="center"
                  title="Employment Status"
                  menus={details.empStatusArray}
                  value={this.props.state.customer.empStatus}
                  handleChange={(e) => handleChange(e, "empStatus")}
                />
                <Button
                  className="btn center"
                  variant="contained"
                  color="primary"
                  onClick={goToResult}
                  disabled = {hasComponentError()}
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Customer);
