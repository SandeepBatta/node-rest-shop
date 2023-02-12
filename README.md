# node-rest-shop
## Overview
A Restful APIs created using Node JS for online shopping usecase. Using MongoDB Atlas for storing products, orders, users details. 

## Usage
- ```git clone``` the repo and thereafter run ```npm install``` inside the repo folder
- Follow this [tutorial](https://www.mongodb.com/basics/mongodb-atlas-tutorial) to create a MongoDB atlas cluster and database user
- Add your mongodb connection string into [https://github.com/SandeepBatta/node-rest-shop/blob/main/app.js#L11](https://github.com/SandeepBatta/node-rest-shop/blob/main/app.js#L11)
- Create below environment variables in your system
  - ```MONGO_ATLAS_PW``` --> MongoDB user password
  - ```JWT_KEY``` --> a secret or private key to create signature for JWT
- Run ```node server.js``` to start the server and APIs will be available at ```localhost:3000```
