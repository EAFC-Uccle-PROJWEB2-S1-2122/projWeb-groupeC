# Ma bibliothèque

## Client

```
npx create-react-app client
cd client
npm start
```

Then use "React client" launch configuration to launch Google Chrome pointing to the react home page in debugging mode.

## Server

```
npx express-generator --git --no-view server
cd server
npm install
npm install -D nodemon
```

Then use "Express server" launch configuration to launch the Express.js server with reload in debugging mode.
