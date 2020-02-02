import React from 'react';

const Form = props => (
    // When we submit the form we are calling the assigned prop in the app component.
    <form onSubmit={props.getWeather}>
        <input type="text" name="city" placeholder="City..." />
        <input type="text" name="country" placeholder="Country..." />
        <button>Get Weather</button>
    </form>
);

export default Form;
