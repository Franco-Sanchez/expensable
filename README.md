## Login Information

The database is seeded so you can start consuming data without creating it from scratch.
To avoid conflicts between students, each one will work with a unique user. The login
credentials would be as follow:

```js
  email: test[n]@mail.com
  password: 123456
```

Where `n` is your number in the following list:

1. Abel Arbildo
2. Adonaí Luque
3. Alex Luna
4. Alexis Eche
5. Alvaro Torres
6. Andre Valderrama
7. André Távara
8. Angel Huayas
9. Bayron Dávila
10. Bryan Llerena
11. Carlos Juarez
12. Carlos Llamosas
13. Chris Tordoya
14. Christian Sagástegui
15. Codeka Quiroz
16. Diana Llerena
17. Diego Lora
18. Diego Puma
19. Diniwi Villanueva
20. Evair Macollunco
21. Franco Sánchez
22. Frank Dominguez
23. Gonzalo Gutierrez de la Rosa
24. Gre Delgado
25. Heraldo Fortuna
26. Herbert Ramos
27. Javier Eche
28. Jhose Portillo
29. Joseph Vega
30. Juan Carlos Echevarría
31. Kedein Rodriguez
32. Andrea Miranda
33. Nick Correa
34. Richard Yantas
35. Robert Tolentino
36. Sebastian Cervantes
37. Steven Coaila
38. Susan Luisa Coari
39. Ysabel Campos

## Resources

- Design: **[here](https://www.figma.com/file/D138qvf3M8cCO1aM492zwW/Expensable-React?node-id=0%3A1)**
- Prototype: **[here](https://www.figma.com/proto/D138qvf3M8cCO1aM492zwW/Expensable-React?node-id=601%3A46&viewport=261%2C768%2C0.6882771849632263&scaling=min-zoom)**
- Github Classroom repo: **[here](https://classroom.github.com/g/TiSmmDkv)**
- API endpoint: [https://expensable-api.herokuapp.com/](https://expensable-api.herokuapp.com/)
- API docs: Insomnia JSON file inside Github Classroom repo.
- Login information: Check readme file on Github Classroom repo

## React - Expensable

Build a MVP of a single page application that handle personal finances..

### Requirements

The MVP should follow this technical requirements:

- It should be built with React reusable components.
- It should include Unit tests for, at least, 1 component.
- It should connect to the external API to fetch the data.
- It should use CSS in JS for the styles using Emotion.
- It should handle token based authentication. All pages except Login should be protected.
- It should be able to handle page refreshes without loosing the current state of the app. (use LocalStorage or SessionStorage when you see fit)

## Main user stories

As a user I want to...

- Login to the app with my email and password
- See a list of categories of my transactions by category type: expenses and income.
- See on each list item the name of the category, the amount of transactions it has, the total value of all the transactions and a delete button to destroy the category.
- Switch between expenses and income using a Navbar
- Delete one or more categories category.
- Logout from the app.

👩🏻‍💻 Happy coding! 👨‍💻

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
