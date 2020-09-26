import React from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "../../app/index.css";
import Dropdown from "./Dropdown";
import { addCustomer } from "../store/actions/actions";
import { connect } from "react-redux";

class Customer extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   customer: {
    //     name: "",
    //     income: "",
    //     dob: "2017-05-24",
    //     empStatus: "",
    //     title: "",
    //     address: "",
    //     city: "",
    //     postal: "",
    //   },
    //   titleArray: ["Mr", "Mrs", "Ms"],
    //   empStatusArray: ["Full Time", "Part Time", "Student"],
    //   textFields: [
    //     { name: "name", label: "Name", type: "text" },
    //     { name: "dob", label: "Birthday", type: "date" },
    //     { name: "address", label: "Address", type: "text" },
    //     { name: "city", label: "City", type: "text" },
    //     { name: "postal", label: "Postal", type: "text" },
    //     { name: "income", label: "Annual Income", type: "text" },
    //   ],
    // };
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
    const handleChange = (e, field) =>
      this.props.addCustomer({ [field]: e.target.value });
    const goToResult = () => {
      // this.props.addCustomer(this.customer);
      this.props.history.push({
        pathname: "/cards/",
        state: {
          customer: this.props.customer,
        },
      });
    };
    return (
      <Paper className="paper">
        <form className="container">
          <Dropdown
            classDiv="title"
            title="Title"
            menus={details.titleArray}
            value={this.props.customer.title}
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
            value={this.props.customer.empStatus}
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
    );
  }
}

const mapStateToProps = (state) => ({
  customer: state,
});
const mapDispatchToProps = (dispatch) => ({
  addCustomer: (data) => {
    dispatch(addCustomer(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Customer);
