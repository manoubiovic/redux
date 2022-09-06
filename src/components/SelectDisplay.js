import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";
import { updateFilterStatus } from "../slices/todoSlice";

export default function ControlledOpenSelect() {
  const filterStatus = useSelector((state) => state.todo.filterStatus);
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    dispatch(updateFilterStatus(event.target.value));
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 140 }}>
        <InputLabel id="demo-controlled-open-select-label">
          Task Status
        </InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={filterStatus}
          label="Task-Status"
          onChange={handleChange}
        >
          <MenuItem value="All">
            <em>All</em>
          </MenuItem>
          <MenuItem value="Done">Done</MenuItem>
          <MenuItem value="Not Done">Not Done</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
