import React from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "../app/index.css";
import Dropdown from "./Dropdown";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      income: "",
      dob: "2017-05-24",
      empStatus: "",
      title: "",
      address: "",
      city: "",
      postal: "",
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
  }

  render() {
    const handleChange = (e, field) => this.setState({ [field]: e.target.value });

    return (
      <Paper className="paper">
        <form className="container" >
          <Dropdown
            classDiv="title"
            title="Title"
            menus={this.state.titleArray}
            value={this.state.title}
            handleChange={(e) => handleChange(e, "title")}
          />

          {this.state.textFields.map((field) => (
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
            menus={this.state.empStatusArray}
            value={this.state.empStatus}
            handleChange={(e) => handleChange(e, "empStatus")}
          />

          <Button className="btn center" variant="contained" color="primary">
            Review Credit Cards
          </Button>
        </form>
      </Paper>
    );
  }
}

export default Card;
