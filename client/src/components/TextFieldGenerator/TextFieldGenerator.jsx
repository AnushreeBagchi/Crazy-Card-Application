import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import {
    addCustomer,
  } from "../../store/actions/customer";

class TextFieldGenerator extends React.Component {
    render(){
        const onChange = (e, field) => {
            this.props.addCustomer({ [field]: e.target.value });
        }
        const hasError = (e, field) => {
            console.log(field.value)
        }

        return (
            <Grid container>
              <Grid item>
                {this.props.textFields.map((field) => (
                  <TextField
                    error={false}
                    helperText={field.helperText}
                    minLength = {field.minLength}
                    required= { field.required}
                    label={field.label}
                    key={field.name}
                    type={field.type}
                    defaultValue={field.defaultValue}
                    className="center"
                    onChange={(e)=> onChange(e, field.name)}
                    
                  ></TextField>
                ))}
              </Grid>
            </Grid>
          );
    }
}
   
const mapStateToProps = (state) => ({
    state: state,
  });
  const mapDispatchToProps = (dispatch) => ({
    addCustomer: (data) => {
      dispatch(addCustomer(data));
    }
  
  });
  
export default connect(mapStateToProps, mapDispatchToProps)(TextFieldGenerator);
 

