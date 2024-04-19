import PropTypes from 'prop-types';
import { useState } from "react";

export function NewToDoForm({ onSubmit }) {
    const [newItem, setNewItem] = useState("");


    const handleSubmit = e => {
        e.preventDefault();
        if (newItem === "") return;

        onSubmit(newItem);
        
        setNewItem("");
      }


    return (<form className="new-item-form" onSubmit={handleSubmit}>
    <div className="form-row">
      <label htmlFor="">New Item</label>
      <input type="text" id="item" 
              value={newItem}
              onChange={e => setNewItem(e.target.value)}
              />
    </div>
    <button className="btn">Add</button>

  </form>
    );
}

NewToDoForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
}