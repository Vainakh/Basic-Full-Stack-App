# Full Stack MERN basic

This app is a full stack application build with MERN technology. 

## Installation

How to install 

```bash
npm i
```
## How to start the app

To run Nodemon:
```bash
npm run test
```

To run Webpack:
```bash
npm run react-dev
```
## Features

* SSN is encrypted using AES algorithm before being stored in the database.
* Password is hashed and authenticated using bcrypt.

## Usage

* To create an authorized user uncomment lines 61-78 in db/index.js,
to seed username and password data AND comment out lines 78-92;

* Do the opposite to get back to be able to login. 

## Security

* ![image](/securedCredentials.png)


## License
[MIT](https://choosealicense.com/licenses/mit/)
