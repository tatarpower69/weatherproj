# Weather Forecast API Project

## Project Overview
This is a full-stack web application designed to provide weather information for various cities. It allows users to register, log in, manage a list of favorite cities, and fetch real-time weather data using the OpenWeatherMap API. The project is built with a focus on security, using JWT for authentication and Joi for data validation.

## Features
* **User Authentication**: Secure registration and login with password hashing.
* **City Management**: Full CRUD to be exact Create, Read, Update, Delete operations for a user's city list.
* **Weather Integration**: Real-time weather data fetching via external OpenWeatherMap API.
* **Security**: Protected routes requiring a valid JWT token.
* **Validation**: Middleware-based input validation for all requests.

## Tech Stack
* **Backend**: Node.js, Express.js
* **Database**: MongoDB with Mongoose
* **Authentication**: JSON Web Token JWT and  bcryptjs
* **Validation**: Joi
* **External API**: Axios for OpenWeatherMap integration

## Setup and Installation

### Prerequisites
* Node.js installed
* MongoDB Atlas account or local MongoDB instance

### Installation
1.  **Clone the repository**:
    ```bash
    git clone https://github.com/tatarpower69/weatherproj.git
    cd weatherproj
    ```
2.  **Install dependencies**:
    ```bash
    npm install
    ```
3.  **Configure Environment Variables**:
    Create a `.env` file in the root directory and add the following:
    ```env
    PORT=3000
    MONGO_URI=mongodb+srv://ilnur77:tutmoiparol@ilnur7777.ypxsp9d.mongodb.net/weatherdb?retryWrites=true&w=majority

    JWT_SECRET=supersecret123
    WEATHER_API_KEY=b9b1e946415d26034465759593e505d7** 

    ```
4.  **Run the application**:
    ```bash
    # production
    npm start

    # or i you want to run nodemon
    npm run dev
    ```

## API Documentation

### Authentication Routes public
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| POST | `/api/auth/register` | Register a new user with username, email, and password. |

![alt text](image.png)
| POST | `/api/auth/login` | Authenticate user and return a JWT token. |
![alt text](image-1.png)

### User Profile Routes private with token req
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| GET | `/api/users/profile` | Retrieve the logged-in user's profile. |

![alt text](image-2.png)
| PUT | `/api/users/profile` | Update user profile information. |

![alt text](image-3.png)

### City Management & Weather Routes with token req
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| POST | `/api/cities` | Save a new city to the user's list. |

![alt text](image-4.png)
| GET | `/api/cities` | Get all saved cities for the user. |

![alt text](image-5.png)
| GET | `/api/cities/:id` | Get details of a specific saved city. |

![alt text](image-9.png)
| PUT | `/api/cities/:id` | Update a saved city's information. |

![alt text](image-6.png)
| DELETE | `/api/cities/:id` | Remove a city from the user's list. |

![alt text](image-7.png)
| GET | `/api/cities/weather/:city` | Fetch real-time weather data for a specific city name. |

![alt text](image-8.png)

###here after RENDERING
![alt text](image-10.png)
```POST https://weatherproj.onrender.com/api/auth/login```

![alt text](image-11.png)
```GET https://weatherproj.onrender.com/api/cities/weather/London```

![alt text](image-12.png)
```GET https://weatherproj.onrender.com/api/users/profile```


## Deployment

The project is deployed on Render.
Live URL:
```
https://weatherproj.onrender.com
```

## Folder Structure
* `config/`: Database connection settings.
* `controllers/`: Logic for handling API requests.
* `middleware/`: Authentication and validation middlewares.
* `models/`: Mongoose schemas (User, City).
* `routes/`: API route definitions.
* `public/`: Static frontend files (HTML/CSS/JS).
* `server.js`: Main entry point.