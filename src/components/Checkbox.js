import { useState } from "react";
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CheckboxIcon from '@material-ui/core/Checkbox';
import "../css/checkbox.css";

function Checkbox() {
  const [name, setState] = useState({
    gilad: true,
    jason: false,
    antoine: false,
  });

  const handleChange = (event) => {
    setState({ ...name, [event.target.name]: event.target.checked });
  };

  const { gilad, jason, antoine } = name;
  return (
    <div>
      <FormControl>
        <FormLabel>お支払い方法</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<CheckboxIcon checked={gilad} onChange={handleChange} name="gilad" />}
            label="Gilad Gray"
          />
          <FormControlLabel
            control={<CheckboxIcon checked={jason} onChange={handleChange} name="jason" />}
            label="Jason Killian"
          />
          <FormControlLabel
            control={<CheckboxIcon checked={antoine} onChange={handleChange} name="antoine" />}
            label="Antoine Llorca"
          />
          <FormControlLabel
            control={<CheckboxIcon checked={gilad} onChange={handleChange} name="gilad" />}
            label="Gilad Gray"
          />
          <FormControlLabel
            control={<CheckboxIcon checked={jason} onChange={handleChange} name="jason" />}
            label="Jason Killian"
          />
          <FormControlLabel
            control={<CheckboxIcon checked={antoine} onChange={handleChange} name="antoine" />}
            label="Antoine Llorca"
          />
          <FormControlLabel
            control={<CheckboxIcon checked={gilad} onChange={handleChange} name="gilad" />}
            label="Gilad Gray"
          />
          <FormControlLabel
            control={<CheckboxIcon checked={jason} onChange={handleChange} name="jason" />}
            label="Jason Killian"
          />
          <FormControlLabel
            control={<CheckboxIcon checked={antoine} onChange={handleChange} name="antoine" />}
            label="Antoine Llorca"
          />
        </FormGroup>
      </FormControl>
    </div>
  );
}
export default Checkbox;
