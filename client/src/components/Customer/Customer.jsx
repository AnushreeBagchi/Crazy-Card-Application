import React from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import "./Customer.css";
import Dropdown from "../Dropdown/Dropdown.jsx";
import {
  addCustomer,
} from "../../store/actions/customer";
import {
  DETAILS,
  TITLE_LABEL,
  TITLE_DROPDOWN,
  EMP_STATUS_LABEL,
  EMP_STATUS_DROPDOWN
} from "../../constants/constants";
import { connect } from "react-redux";
import { ThemeConsumer } from "../../contexts/theme";
import { Container } from "@material-ui/core";
import TextFieldGenerator from "../TextFieldGenerator/TextFieldGenerator.jsx";

class Customer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const handleChange = (e, field) => {
      this.props.addCustomer({ [field]: e.target.value });
    };
    const goToResult = () => {
      this.props.history.push({
        pathname: "/cards/",
        state: this.props.state,
      });
    };

    const isDisabled = () => {
      let customer = this.props.state.customer;
      let requiredField = DETAILS.textFields.filter(field => field.required === true);
      return customer[requiredField[0].name] ? false : true;
    }
    return (
      <ThemeConsumer>
        {({ theme }) => (
          <>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item xs={12} container>
                <Paper className={`paper theme-${theme}`}>
                  <Container>
                    <Grid container spacing={1}>
                      <Grid item xs={12} >
                        <form className="container">
                          <Grid className="name-field" container spacing={1}>
                            <Grid  item lg={2} md={3} sm={4} xs={12}>
                              <Dropdown
                                classDiv="title"
                                title={TITLE_LABEL}
                                menus={TITLE_DROPDOWN}
                                value={this.props.state.customer.title}
                                handleChange={(e) => handleChange(e, "title")}
                              />
                            </Grid>
                            <Grid item lg={10} md={9} sm={8} xs={12} >
                              <TextField
                              className="name"
                                label="Name"
                              ></TextField>
                            </Grid>
                            
                          </Grid>
                          <TextFieldGenerator
                            textFields={DETAILS.textFields}
                          ></TextFieldGenerator>
                          <Dropdown
                            required={true}
                            classDiv="center"
                            title={EMP_STATUS_LABEL}
                            menus={EMP_STATUS_DROPDOWN}
                            value={this.props.state.customer.empStatus}
                            handleChange={(e) => handleChange(e, "empStatus")}
                          />
                          <Grid
                            container
                            spacing={1}
                            direction="row"
                            justify="center"
                            alignItems="center"
                          >
                            <Grid item lg={6} md={6} className="btn-grid">
                              <Button
                                className="btn"
                                variant="contained"
                                color="primary"
                                onClick={goToResult}
                                disabled={isDisabled()}
                              >
                                Review Credit Cards
                              </Button>
                            </Grid>
                          </Grid>
                        </form>
                      </Grid>
                    </Grid>
                  </Container>
                </Paper>
              </Grid>
            </Grid>
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
  }
});

export {Customer};
export default connect(mapStateToProps, mapDispatchToProps)(Customer);
