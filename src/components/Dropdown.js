import React from "react";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import NativeSelect from "@material-ui/core/NativeSelect";
import FormHelperText from "@material-ui/core/FormHelperText";

function Dropdown(props) {
  const handleChange = (e) => props.handleChange(e);
  const { value, title, menus, classDiv } = props;
  let optionItems = menus.map((menu) => <option key={menu}>{menu}</option>);

  return (
    <>
      <FormControl required className={classDiv}>
        <InputLabel>{title}</InputLabel>
        <NativeSelect
          value={value}
          onChange={(e) => {
            handleChange(e, value);
          }}
        >
          {optionItems}
        </NativeSelect>
      </FormControl>
    </>
  );
}

export default Dropdown;
