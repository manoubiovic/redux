import React, { useState } from "react";
import AddTask from "./AddTask";
import Form from "./Form";
import ControlledOpenSelect from "./SelectDisplay";

function Header() {
  const [formOpen, setFormOpen] = useState(false);
  return (
    <div className="header">
      <div onClick={() => setFormOpen(true)}>
        <AddTask setFormOpen={setFormOpen} />
      </div>
      <ControlledOpenSelect />
      <Form type="add" formOpen={formOpen} setFormOpen={setFormOpen} />
    </div>
  );
}

export default Header;
