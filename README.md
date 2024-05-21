# Weather Forecast App for Data Society

This solution takes in values to determine the weather at that location during the time period the user has selected

## In order to run the application:
- Clone the GitHub repository
- Navigate to the directory
- Run ``` npm install ```
- Run ``` npm start ```


# App

This application utilizes ReactJS, Axios and the National Weather Service API (https://www.weather.gov/documentation/services-web-api) to retrieve weather forecasts and location. 

It takes in: latitude, longitude, a date and a time period between 'day' and 'night' and outputs the city, state and the forecasted temperature and subsequent details. 

![App Image](image.png)


# Additional Features

A part from the acceptance functionality, if I had more time to work on this application, I would include the following:
- Enhanced UI - like displaying imagery concerning the forecast - eg: cloud, rain or sun images
- Additon of specific time periods for forecasting - like utilizing the hourly forecast json to provide a specific forecast from 1 to 2 pm. 
- Addition of City/State input - Latitude and Longitude isn't necessarily intuitive for a user but entering in a city they are traveling to or reside in is easy. 
- Displaying Maps to visually see which areas near them have a certain type of weather, instead of manually inputting in Latitude/Longitude or even City/State. They could drag over to the area they want to see.
- Add tests to verify error handling for all user interactions - I believe I have handled most invalid/bad inputs, but if I had more time, I would like to utilize Playwright or Selenium to test this application to be sure. 

# Accessibility Concerns

With the time given, I was only able to add in one accessibility standard
- Avoid Red-Green Color Combinations by using Blue and contrasting shades and colors for those with visual impairments.

If given more time, I would:  
- Provide Alt Text for each input, image and display for screen readers
- Verify this application is able to be used by other assistive devices, not only screen readers 
- Verify this application is responsive and is able to be interacted with through multiple differently sized devices. 


# Deployment

I have a few ideas for deploying this application
- For ease of use and deployment - I could set this up on GitHub Pages or Vercel and create a custom domain for this to be hosted on. 
- For future plans of application usage, based on the scale of users we could be anticipating - I could set up official cloud services on Azure/AWS/GCP to deploy this application and set up future handling of increased and optimized usage.
