import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function Filter({ priceSortExpensive, priceSortCheap }) {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
    console.log(event.target.value);
  };
  return (
    <div >
      <Box sx={{ minWidth: 160, maxWidth: '100%' }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Sort out</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            onChange={handleChange}
          >
            <MenuItem value={10} onClick={priceSortExpensive}>
              Ən bahadan ucuza
            </MenuItem>
            <MenuItem value={20} onClick={priceSortCheap}>
                Ən ucuzdan bahaya
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}

export default Filter;
