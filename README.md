# Getting Started with Weather Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## A Weather App

Including completed tasks:

- Set up a React project.

- Integrate the OpenWeather API to retrieve weather data based on user input.

- Build user interface (UI) components, including a search bar and weather display.

- Enhance user experience with features like auto-complete and visual
representations of weather conditions.

- Ensure responsiveness and mobile-friendliness using CSS media queries or a responsive design framework.

- Handle error cases, such as invalid locations or API failures, with appropriate error messages.

- Thoroughly test the application.

- Document code, explain component functionality, and follow best practices for code organization and readability.

## Comments and other solutions

```bash
const [data, setData] = useState({});
```
 // decalres data used to fetch data from the API and update the data state afterwards ^

```bash
const [location, setLocation] = useState("");
```
// declares location parameter extacted by the API and used in the return -> input section ^

```bash
axios 
      .get(url)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
```
// initialing Axios GET request ^

```bash
<div className="temperature">
            {data.main ? <h1>{data.main.temp.toFixed()} °C</h1> : null}
</div>
 ```
 // returning API data (weather.json) through ternary operator ^
```bash
const inputRef = useRef(null); // Create a ref to the input element

  const initMap = () => {
    // Initialize Google Places Autocomplete
    const autocomplete = new window.google.maps.places.Autocomplete(
      inputRef.current
    );

    // Listen for place selection
    autocomplete.addListener("place_changed", () => {
      const selectedPlace = autocomplete.getPlace();
      if (
        selectedPlace &&
        selectedPlace.geometry &&
        selectedPlace.geometry.location
      ) {
        setLocation(selectedPlace.formatted_address);
      }
    });
  };

  useEffect(() => {
    // Check if the Google Maps API is already loaded
    if (window.google && window.google.maps) {
      initMap();
    } else {
      // The API hasn't loaded yet, you can handle this case or retry later
    }
  }, []);
  ```
 // Triggering Google (Places and Maps JS) API ^

#######################################

## node_modules 

All required dependencies are listed in the 'package.json' file. After cloning to local repository run `npm install` (or `yarn install`) to install the necessary dependencies locally.

## Used Languages

- HTML
- CSS
- JavaScript/JSX

## Run Locally

Clone the project

```bash
  git clone git clone https://github.com/daniel-stoychev/web-app-react.git
```

Go to the project directory

```bash
  cd my-project
```

Runs the app in the development mode.

```bash
npm start
```

Launches the test runner in the interactive watch mode.

```bash
npm test
```
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

```bash
npm run build
```
Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Commit and push to origin

```bash
  git add .
```
```bash
  git commit -m "Your commit message here"
```
```bash
  git push origin
```

## 🔗 Links
[![Web App](https://img.shields.io/badge/web_app-000?style=for-the-badge&logo=&logoColor=white)](https://reactapp.danielstoychev.com/)

## Screenshots

![App Screenshot](https://reactapp.danielstoychev.com/weather_screen.png)

## Authors

- [@DanielS](https://github.com/daniel-stoychev)

## Feedback

If you have any feedback, please reach out to me at daniel.stoychev@siteground.com

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

