import React from 'react';

// Stateless component, meaning cant use 'this' keyword.
const Weather = props => (
    <div>
        {/* Using 'and'/condition operator inside a js expression: if .. and .. are true then show what needs to be shown. */}
        {props.city && props.country && (
            <p>
                Location: {props.city}, {props.country}
            </p>
        )}
        {props.temperature && <p>Temperature: {props.temperature}</p>}
        {props.humidity && <p>Humidity: {props.humidity}</p>}
        {props.description && <p>Conditions: {props.description}</p>}
        {props.error && <p>{props.error}</p>}
    </div>
);

export default Weather;
