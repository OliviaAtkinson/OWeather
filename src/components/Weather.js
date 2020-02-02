import React from 'react';

// Stateless component, meaning cant use 'this' keyword.
const Weather = props => (
    <div className="weather__info">
        {/* Using 'and'/condition operator inside a js expression: if .. and .. are true then show what needs to be shown. */}

        {props.city && props.country && (
            <p className="weather__key">
                Location:{' '}
                <span className="weather__value">
                    {props.city}, {props.country}
                </span>
            </p>
        )}

        {props.temperature && (
            <p className="weather__key">
                Temperature:{' '}
                <span className="weather__value">
                    {Math.round(props.temperature - 273.15)}°C
                </span>
            </p>
        )}

        {props.humidity && (
            <p className="weather__key">
                Humidity:{' '}
                <span className="weather__value">{props.humidity}</span>
            </p>
        )}

        {props.description && (
            <p className="weather__key">
                Conditions:{' '}
                <span className="weather__value">{props.description}</span>
            </p>
        )}

        {props.error && <p className="weather__error">{props.error}</p>}
    </div>
);

export default Weather;
