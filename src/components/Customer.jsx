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
    const handleChange = (e, field) =>
      this.props.addCustomer({ [field]: e.target.value });
    const goToResult = () => {
      this.props.history.push({
        pathname: "/cards/",
        state : this.props.state
      });
    };
    return (
      <ThemeConsumer>
        {({theme})=>(
          <>
          <Nav></Nav>
          <Paper className={`paper theme-${theme}`} >
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
                  required
                  label={field.label}
                  key={field.name}
                  type={field.name === "dob" ? "date" : "text"}
                  className="center"
                  defaultValue={field.name === "dob" ? "2017-05-24" : null}
                  onChange={(e) => handleChange(e, field.name)}
                ></TextField>
              ))}
    
              <Dropdown
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
  state : state,
});
const mapDispatchToProps = (dispatch) => ({
  addCustomer: (data) => {
    dispatch(addCustomer(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Customer);
