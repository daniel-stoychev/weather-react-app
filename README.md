# Getting Started with Weather Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## A Weather App

Including completed tasks:

- Set up a React project and configure state management.

- Integrate the OpenWeather API to retrieve weather data based on user input.

- Build user interface (UI) components, including a search bar and weather display.

- Enhance user experience with visual representations of weather conditions.

- Ensure responsiveness and mobile-friendliness using CSS media queries or a responsive design framework.

- Handle error cases, such as invalid locations or API failures, with appropriate error messages.

- Thoroughly test the application.

- Document code, explain component functionality, and follow best practices for code organization and readability.

## Comments and other solutions

```bash
const [data, setData] = useState({});
```
 // decalres data used to fetch data from the API and update the data state afterwards

```bash
const [location, setLocation] = useState("");
```
// declares location parameter extacted by the API and used in the return -> input section

```bash
axios 
      .get(url)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
```
// initialing Axios GET request

```bash
<div className="temperature">
            {data.main ? <h1>{data.main.temp.toFixed()} °C</h1> : null}
</div>
 ```
 // returning API data (weather.json) through ternary operator

#######################################

Instead of `onClick=` event you can trigger `{searchLocation}` with a key ('Enter'):

```bash
  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };
```
`onKeyDown={searchLocation}` should also be declared if using this method

## node_modules 

All required dependencies are listed in the 'package.json' file. After cloning to local repository run `npm install` (or `yarn install`) to install the necessary dependencies locally.

## Used Languages

- HTML
- CSS
- JavaScript

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
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

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

```bash
npm run eject
```
**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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

## Acknowledgements

 - [SoftAcademy](https://softacademy.bg/kurs-web-programirane/)
 - [SiteGround](https://www.siteground.com/)
 - [Myslef](https://danielstoychev.com/)

