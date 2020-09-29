import React from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import "./Customer.css";
import Dropdown from "../Dropdown";
import {
  addCustomer,
  getValidations,
  validateField,
  hasComponentError,
} from "../../store/actions/customer";
import {
  DETAILS,
  DOB_DEFAULT_VALUE,
  EMP_STATUS_LABEL,
  TITLE_LABEL,
  TITLE_DROPDOWN,
  EMP_STATUS_DROPDOWN,
} from "../../constants/constants";
import { connect } from "react-redux";
import Nav from "../Nav";
import { ThemeConsumer } from "../../contexts/theme";
import { Container } from "@material-ui/core";

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
            {/* <Nav></Nav> */}
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
                      <Grid item xs={12}>
                        <form className="container">
                          <Grid container>
                            <Grid item lg={2} md={3} sm={4} xs={12}>
                              <Dropdown
                                classDiv="title"
                                title={TITLE_LABEL}
                                menus={TITLE_DROPDOWN}
                                value={this.props.state.customer.title}
                                handleChange={(e) => handleChange(e, "title")}
                              />
                            </Grid>
                            <Grid item xs={10} md={9} sm={8} xs={12}>
                              <TextField
                                className="center"
                                label="Name"
                              ></TextField>
                            </Grid>
                          </Grid>

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
                            <Grid item lg={6} md={6} className = "btn-grid">
                              <Button
                              className="btn"
                                variant="contained"
                                color="primary"
                                onClick={goToResult}
                                disabled={hasComponentError(this.props.state)}
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
  },
  getValidations: () => {
    dispatch(getValidations());
  },
  validateField: (data) => {
    dispatch(validateField(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Customer);
