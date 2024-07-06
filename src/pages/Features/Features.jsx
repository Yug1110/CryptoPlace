import React from 'react'
import "./Features.css"

function Features() {
  return (
    <div className='features-page'>
        <h1>Cryptoplace provides you the follwing:</h1>
        <div className="ul-container">
        <ul>
            <li>Fetch and display real-time data for a wide range of cryptocurrencies using the CoinGecko API.</li>
            
            <li>Implement a powerful search feature to quickly find information on specific cryptocurrencies by name or symbol.</li>

            <li>
            Provide comprehensive details for each cryptocurrency, including market cap, current price, volume, and other essential metrics.
            </li>

            <li>
            Display interactive graphs for each cryptocurrency, showing historical price trends and other relevant data.
            </li>

            <li>
            Ensure a responsive design that works seamlessly across various devices and screen sizes.
            </li>

            <li>
            Create a clean, intuitive, and user-friendly interface for easy navigation and data exploration.
            </li>


            <li>
            Provide functionality to convert prices into different fiat currencies for user convenience.
            </li>
        </ul>
        </div>
    </div>
  )
}

export default Features