# Stock(TWSE)

Organize stock financial reporting information and using PER and EPS predict future stock prices,
this web application is built with **Frontend**: React, **Backend**: Python + FastAPI, **Database**: MongoDB.

### Features of this project

**Organize financial reporting information**

-   Organize the financial report information of listed stocks for the month.

**Predict future prices**

-   Use the PER and EPS to predict future stock prices.

**RWD Design**

-   Suitable for viewing on any device.

## Project Features

> -   Organize stock financial reporting information
>     > Organize the financial report information of listed stocks in the current month, and make them into grades according to percentages.

> -   Custom Data Sort
>     > Sort by the specified column, and sort by ascending or descending.

> -   Use PER and EPS predict future prices
>     > Use the PER of the past 10 years and EPS for the last quarter to predict future stock prices.

> -   RWD Design
>     > View all information in a comfortable way on different devices.

---

## Project Demo

[https://lewisduda.github.io/stock/](https://lewisduda.github.io/stock/)

---

## Prerequisites for this project

**Install the backend app**

-   [App Backend](https://github.com/LewisDuda/stock-backend)
-   [API Application](https://github.com/LewisDuda/stock-api-server)

```
// Frontend Application
$ git clone https://github.com/LewisDuda/stock-backend.git

// API Application
$ git clone https://github.com/LewisDuda/stock-api-server.git
```

---

## Install this project

If you need a copy of this project and run it locally on your computer please see the instructions below.

### Clone Project

```
$ git clone https://github.com/LewisDuda/stock.git
```

### Usage Packages

-   [npm](https://docs.npmjs.com/)
-   [react](https://www.npmjs.com/package/react)
-   [react-mobile-datepicker](https://www.npmjs.com/package/react-mobile-datepicker)

### Setup App

**1. Install npm**

```
$ npm install
```

**2. Create .env file**

```
$ touch .env
```

**3. Write your API ADDRESS into .env file and save.**

```
// You must prefix your own environment variable with REACT_APP
// REACT_APP_EXAMPLE_VARIABLE = YOUR_VALUE

REACT_APP_API_ADDRESS = <YOUR_API_ADDRESS>
```

**4. Start the App**

```
$ npm run start
```

**5. Finding the following message indicates the App is running successfully.**

```
You can now view stock in the browser.

  http://localhost:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

webpack compiled successfully
```

---

## Author

[Lewis](https://github.com/LewisDuda)
