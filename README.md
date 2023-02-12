# node-rest-shop
A Restful APIs created using Node JS for online shopping usecase. Using MongoDB Atlas for storing products, orders, users details. 

## Usage
- ```git clone``` the repo and thereafter run ```npm install``` inside the repo folder
- Follow this [tutorial](https://www.mongodb.com/basics/mongodb-atlas-tutorial) to create a MongoDB atlas cluster and database user
- Add your mongodb connection string into [https://github.com/SandeepBatta/node-rest-shop/blob/main/app.js#L11](https://github.com/SandeepBatta/node-rest-shop/blob/main/app.js#L11)
- Create below environment variables in your system
  - ```MONGO_ATLAS_PW``` --> MongoDB user password
  - ```JWT_KEY``` --> a secret or private key to create signature for JWT
- Run ```node server.js``` to start the server and APIs will be available at ```localhost:3000```

## Swagger API Documentaion
Execute ```npm run swagger-autogen``` at the project root to generate [swagger_output.json](https://github.com/SandeepBatta/node-rest-shop/blob/main/swagger_output.json) for documentation. You can access Swagger UI docs by visiting ```http://localhost:3000/doc/```. Below are some of the screenshots

![image](https://user-images.githubusercontent.com/77493316/218311147-641b378e-ec26-46aa-bcb7-ee4842242052.png)

### Authorization
Use ```bearer <token>``` format. ```token``` will be available when user login using ```/user/login``` API
![image](https://user-images.githubusercontent.com/77493316/218311210-970fb4f2-7a4f-4c71-a9f1-e566aec7880c.png)

