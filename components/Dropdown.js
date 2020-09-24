import React from "react";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormHelperText from "@material-ui/core/FormHelperText";

function Dropdown(props) {
  const handleChange = (e) => props.handleChange(e);
  const { value, title, menus, classDiv } = props;
  return (
    <>
      <FormControl required className={classDiv}>
        <InputLabel>{title}</InputLabel>
        <Select
          value={value}
          onChange={(e) => {
            handleChange(e, value);
          }}
        >
          {menus.map((menu) => (
            <MenuItem value={menu} key={menu}>
              { menu }
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}

export default Dropdown;
