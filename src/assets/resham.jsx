import { useState } from 'react';

function Resham() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert(Submitted: {inputValue});
    setInputValue(""); // Reset input after submission
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <h2>Dynamic Input Form</h2>

        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Type something..."
            value={inputValue}
            onChange={handleChange}
            className="input-field"
          />
        </div>

        <p className="display-text">
          {inputValue ? `You typed: ${inputValue}` : "Start typing..."}
        </p>

        <button type="submit" className="submit-btn" disabled={!inputValue}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default Resham