import React from 'react';
{/* functional component, ie just a function, not a class */}
function Form( props ) {
  
  const greeting = props.greetingStart + props.salutation +  " Tyler";
  return (
    <div>
      <h4>{greeting}</h4>
      <form onSubmit={props.handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input className="userForm" type="text" name="name" id="name"></input><br></br>
        </div>

        <div>
          <label htmlFor="name">Email:</label>
          <input type="text" name="email" id="email"></input><br></br>
        </div>
        <input type="submit"/>
      </form>
    </div>
  );
}

export default Form;
