import React, { useState } from 'react';

const Form = (props) => {
  const [text, setText] = useState('');

  function uppercase() {
    const newtext = text.toUpperCase();
    console.log('working the function');
    setText(newtext);
  }

  function lowercase() {
    const newtext1 = text.toLowerCase();
    setText(newtext1);
  }

  function cleartext() {
    const newtext2 = '';
    setText(newtext2);
  }

  function change(event) {
    setText(event.target.value);
    console.log('change is working');
  }

  return (
    <>
      <div className="full">
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label mx-2">
            <h2>Write the Text here...</h2>
          </label>
          <textarea
            value={text}
            onChange={change}
            className="form-control mx-2"
            id="exampleFormControlTextarea1"
            rows="0"
          ></textarea>
        </div>
        <div className="btn-container">
          <button className="btn btn-primary" id="btn" onClick={uppercase}>
            Uppercase
          </button>
          <button className="btn btn-primary" id="btn" onClick={lowercase}>
            Lowercase
          </button>
          <button className="btn btn-primary" id="btn" onClick={cleartext}>
            Clear text
          </button>
        </div>
        <div id="container">
          <h2>Word counter</h2>
          <p>{text.split(/\s+/).filter((element) => element.length !== 0).length} words {text.length} characters</p>
          <p>{0.008 * text.split(" ").length} Minimum Minutes to read</p>
        </div>
      </div>
    </>
  );
};

export default Form;
