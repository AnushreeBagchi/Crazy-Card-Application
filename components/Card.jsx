import React from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormHelperText from "@material-ui/core/FormHelperText";
import "../app/index.css";
import Dropdown from "./Dropdown";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      income: "",
      dob: "",
      empStatus: "",
      title: "",
      address: "",
      city: "",
      postal: "",
      titleArray: ["Mr", "Mrs", "Ms"],
      empStatusArray: ["Full Time", "Part Time", "Student"],
    };
  }

  render() {
    const handleChange = (e, field) =>{
        console.log(e);
        this.setState({ [field]: e.target.value });
    }

    function onchange (e) {
        debugger;
    }

    return (
      <Paper className="paper">
        <form className="container" noValidate onChange={(e)=> onchange(e)}>
          <div className="center name-div">
            <Dropdown
              classDiv="title"
              title="Title"
              menus={this.state.titleArray}
              value={this.state.title}
              handleChange={(e) => handleChange(e, "title")}
            />
            <TextField className="name" label="Name" onChange={(e)=> handleChange(e, 'dob')}/>
          </div>
          <TextField
            label="Birthday"
            type="date"
            defaultValue="2017-05-24"
            className="center"
            onChange={(e)=> handleChange(e, 'dob')}
          />
          <TextField className="center" label="Address" onChange={(e)=> handleChange(e, 'address')}/>
          <TextField className="center" label="City" onChange={(e)=> handleChange(e, 'city')}/>
          <TextField className="center" label="Postal Code" onChange={(e)=> handleChange(e, 'postal')}/>
          <TextField className="center" label="Annual Income" onChange={(e)=> handleChange(e, 'income')}/>
          

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
