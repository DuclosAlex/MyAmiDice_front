import React from 'react';
import { Form } from 'semantic-ui-react';
import "./style.scss";

function Notes() {
/* 
  const [notes, setNotes] = useState("");

  function handleChange(event) {
    setNotes(event.target.value);
  } */

  return (
    <div className='notes'>
      {/* <Form>
        <Form.TextArea
          label="Notes"
          name="notes"
          value={notes}
          onChange={handleChange}
          inline
        />
      </Form> */}
    </div>
  )
}

export default Notes 