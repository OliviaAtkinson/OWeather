import React, { Component } from 'react';
import Title from './components/Title';
import Form from './components/Form';
import Weather from './components/Weather';
import './App.css';

const API_KEY = 'e1374a8b72af881720145a2553d3910a';

class App extends Component {
    state = {
        city: undefined,
        country: undefined,
        temperature: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined
    };

    getWeather = async e => {
        e.preventDefault();

        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;

        const api_call = await fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`
        );

        //Converting the API call into a json format.
        const data = await api_call.json();

        if (city && country) {
            this.setState({
                city: data.name,
                country: data.sys.country,
                temperature: data.main.temp,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                error: ''
            });
        } else {
            this.setState({
                city: undefined,
                country: undefined,
                temperature: undefined,
                humidity: undefined,
                description: undefined,
                error: 'Please enter a value.'
            });
        }
    };
    render() {
        return (
            <div className="App">
                <Title />
                <Form getWeather={this.getWeather} />
                <Weather
                    city={this.state.city}
                    country={this.state.country}
                    temperature={this.state.temperature}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}
                />
            </div>
        );
    }
}

export default App;
