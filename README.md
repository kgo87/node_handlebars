# Node Handlebars [![MIT license](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://lbesson.mit-license.org/)


## Table of Contents
1. [ Description ](#desc)
2. [ Task ](#task)
3. [ Link to Heroku deployment ](#link)
4. [ Structure ](#structure)
5. [ Finished product ](#final)
6. [ Contact details ](#contact)


## 1. Description<a name="desc"></a>
This repository contains code for the burger logger with MySQL, Node, Express, Handlebars and a homemade ORM. The application structure follows the MVC design pattern. Node and MySQL were used to query and route data in the app, and Handlebars to generate HTML page.  

## 2. Task<a name="task"></a>
Task is to build restaurant app that lets users input the names of burgers they'd like to eat.
Whenever a user submits a burger's name, the app displays the burger on the left side of the page - waiting to be devoured. Each burger in the waiting area also has a Devour it! button. When the user clicks it, the burger will move to the right side of the page. The app stores every burger in a database, whether devoured or not.

The app contains three main routes: GET - displays all the burgers from the database , POST - stores a newly created burger to the database, PUT - updates the status of each burger from not devoured to devoured. 



## 3. Link to Heroku deployment <a name="link"></a>
The project is deployed on Heroku and available for view using this link:
https://node-handlebars-heroku-kat.herokuapp.com/

## 4. Structure<a name="structure"></a>
The structure of the repo is presented in the image below:
![Screenshot](./public/assets/media/dir_structure.png).
Config folder contains *connection.js* and *orm.js*. 
*Connection.js* has the code needed to establish connection to a database.
![Screenshot](./public/assets/media/connection.png).
*orm.js* defines CRUD methods.
![Screenshot](./public/assets/media/orm.png).
Controllers folder contains *burger-controller.js* which establishes server routes:
![Screenshot](./public/assets/media/controllers.png).
Models folder contains *burger.js* which connects the developed CRUD methods with the server routes:
![Screenshot](./public/assets/media/models_burger.png).
Views and public folder contains the frontend part of the application such as handlebars, stylesheet and front-end javascript.
![Screenshot](./public/assets/media/frontend.png).
*Server.js* that is located in the root folder stores all the dependensies and connects to the port.
![Screenshot](./public/assets/media/server.png).


## 5. Finished product<a name="final"></a>
The final HTML page looks like this:
![Screenshot](./public/assets/media/final.png)

## 6. Contact details<a name="contact"></a>
If you have any questions, contact me via email: 

<a href="mailto:kathy.gomozova@gmail.com?"><img src="https://img.shields.io/badge/gmail-%23DD0031.svg?&style=for-the-badge&logo=gmail&logoColor=white"/></a>