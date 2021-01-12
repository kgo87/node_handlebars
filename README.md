# Node Handlebars [![MIT license](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://lbesson.mit-license.org/)


## Table of Contents
1. [ Description ](#desc)
2. [ Task ](#task)
3. [ Link to Heroku deployment ](#link)
4. [ Structure ](#structure)
5. [ Finished product ](#final)


## 1. Description<a name="desc"></a>
This repository contains code for the burger logger with MySQL, Node, Express, Handlebars and a homemade ORM. The application structure follows the MVC design pattern. Node and MySQL were used to query and route data in the app, and Handlebars to generate HTML page.  

## 2. Task<a name="task"></a>
Task is to build restaurant app that lets users input the names of burgers they'd like to eat.
Whenever a user submits a burger's name, the app displays the burger on the left side of the page - waiting to be devoured. Each burger in the waiting area also has a Devour it! button. When the user clicks it, the burger will move to the right side of the page. The app stores every burger in a database, whether devoured or not.

The app contains three main routes: GET - displays all the burgers from the database , POST - stores a newly created burger to the database, PUT - updates the status of each burger from not devoured to devoured. 



## 3. Link to Heroku deployment <a name="link"></a>
The project is deployed on Heroku and available for view using this link:
https://note-taker-heroku-kat.herokuapp.com/ 

## 4. Structure<a name="structure"></a>
The structure of the repo is presented in the image below:
![Screenshot](./public/assets/media/dir_structure.png).
Config file contains *connection.js* and *orm.js*. 


## 5. Finished product<a name="final"></a>
The final HTML page looks like this:
![Screenshot](./public/assets/media/final.png)
