![Blog-Article-MERN-Stack](https://github.com/Santiago1054/MERN-Stack-CRUD-with-JWT/assets/170820106/4d5d033c-85b8-4f2f-8aae-05e1e1488394)

## Table of Contents


- [Keywords](#keywords)
- [MERN](#mern)
- [JWT](#jwt)
- [Installation](#installation)
- [Deployment](#deployment)
# MERN Stack CRUD with JWT


This is a web application project using React, with a Nodejs Backend using Express and Mongodb as Database (MERN Stack) 
# Keywords

## MERN

MERN is an acronym for the four technologies that form the stack: MongoDB, Express, React, and Node.js. 

## JWT

### What is JSON Web Token?

JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.

Although JWTs can be encrypted to also provide secrecy between parties, we will focus on signed tokens. Signed tokens can verify the integrity of the claims contained within it, while encrypted tokens hide those claims from other parties. When tokens are signed using public/private key pairs, the signature also certifies that only the party holding the private key is the one that signed it.

### When should you use JSON Web Tokens?
Here are some scenarios where JSON Web Tokens are useful:

### Authorization:
This is the most common scenario for using JWT. Once the user is logged in, each subsequent request will include the JWT, allowing the user to access routes, services, and resources that are permitted with that token. Single Sign On is a feature that widely uses JWT nowadays, because of its small overhead and its ability to be easily used across different domains.

### Information Exchange: 
JSON Web Tokens are a good way of securely transmitting information between parties. Because JWTs can be signed—for example, using public/private key pairs—you can be sure the senders are who they say they are. Additionally, as the signature is calculated using the header and the payload, you can also verify that the content hasn't been tampered with.

## Project preview
![776shots_so](https://github.com/Santiago1054/MERN-Stack-CRUD-with-JWT/assets/170820106/002654a4-9703-41a9-bdec-3393ccf8556d)
[![Alt text](https://img.youtube.com/vi/configuroweb/0.jpg)](https://www.youtube.com/watch?v=t5YSqCU819g)


## Installation

Step-by-step instructions on how to get the development environment running.
> Step 1
```sh
git clone https://github.com/Santiago1054/MERN-Stack-CRUD-with-JWT.git
```
> Step 2 Go to  NPM SCRIPTS
> 
![Screenshot 2024-07-03 130954](https://github.com/Santiago1054/MERN-Stack-CRUD-with-JWT/assets/170820106/053d246a-018b-47ed-9195-16520b02f5e8)
> Step 3 Click on install dependencies from package
> 
![Screenshot 2024-07-03 131325](https://github.com/Santiago1054/MERN-Stack-CRUD-with-JWT/assets/170820106/168f2afd-3ac7-4563-aa7c-66e2fd886dae)
> NOTE!!! If you do not open both terminals separately and in their locations it may cause issues
> 
> Important information! Back-end it's located in src folder by the other hand, front-end it's located in agent folder
> 
>Step 4 The project use two different terminals the first one it's use to run the back-end
```sh
npm run dev
```
>Step 5 and the other terminal it's use to run the front-end
```sh
npm run dev
```

> You need to have a Mongodb database running
(https://www.oracle.com/cis/database/mern-stack/#:~:text=MERN%20is%20an%20acronym%20for,scalable%20and%20interactive%20web%20applications.)

https://jwt.io/introduction
