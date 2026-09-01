import { useState } from "react";

import axios from "axios";

import {
    Line
} from "react-chartjs-2";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title
);

function Weather() {

    const [city, setCity] =
        useState("");

    const [weather, setWeather] =
        useState(null);

    const getWeather =
        async () => {

        const apiKey =
            "YOUR_API_KEY";

        const url =
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        try {

            const response =
                await axios.get(url);

            setWeather(
                response.data
            );

        }

        catch (error) {

            alert(
                "City not found"
            );

        }

    };

    const chartData = {

        labels:
        ["Morning",
         "Afternoon",
         "Evening",
         "Night"],

        datasets: [

            {

                label:
                    "Temperature",

                data:
                [20, 28, 25, 22]

            }

        ]

    };

    return (

        <div>

            <h2>
                Weather Application
            </h2>

            <input
                placeholder="Enter City"
                onChange={(e) =>
                    setCity(e.target.value)
                }
            />

            <button
                onClick={getWeather}
            >
                Get Weather
            </button>

            {weather && (

                <div>

                    <h3>
                        {weather.name}
                    </h3>

                    <p>
                        Temperature:
                        {" "}
                        {weather.main.temp} °C
                    </p>

                    <p>
                        Humidity:
                        {" "}
                        {weather.main.humidity}%
                    </p>

                </div>

            )}

            <Line data={chartData} />

        </div>

    );

}

export default Weather;
