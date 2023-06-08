# ORDERLY.

## Description

Orderly has been developed as the fourth and final project of General Assembly's Software Engineering Immersive program. 
It's both a Full-Stack Ruby on Rails app, and a Rails API + React Front-End app. Orderly is an online food ordering and management platform for restaurants. It has been built using the perspective of both the restaurant and the customer. It allows restaurants to manage their menu and the received orders (Full-Stack Rails). At the same time, a customer can see the restaurant's menu by scanning a unique QR code, and make an order, without having to create an account (Rails API + React Front-End). Orderly has been styled using Tailwind CSS. 

## Deployment link

Sign up/Log in page for the restaurant: https://orderly.fly.dev.

For the customer's perspective, scan the QR code on the restaurant's profile. 

<!-- ## Getting Started -->
## Timeframe

The timeframe given to build this app was 2 weeks. I developed Orderly independently.

## Technologies

### Framework and Libraries
* Ruby on Rails
* React
* React Router
* PostgreSQL
* Devise
* Stripe
* Jbuilder
* Tailwind CSS
* FriendlyId
* RQRCode
### Languages
* HTML
* CSS
* JavaScript
* JSX (JavaScript XML)
* Ruby
* SQL
### Code version control
* Git: Local machine tool that tracks changes in the application.
* GitHub: Online service for hosting repositories that uses Git.
### Code and debugging
* Command line.
* Google Chrome Developer Tools.
* Postman
### Deployment
* Fly.io
### Design
* Excalidraw: Used for the wireframes
* Lucid.app: Used to draw the database relationships
### Media
* Pictogrammers - Material Design Icons: used for icons throughout the page.
* Unsplash: used for the picture on the restaurant’s Sign Up/Sign In page.

## Brief

* Build a full stack web application. Must be your own work.
* Select a Project Idea of your own.
* Have at least 2 models (more if it makes sense).
    - Auth is a requirement.
* Have full CRUD on at least one of your models.
* Be able to Add/Delete on any remaining models.
* Have high quality code:
    - Follow accepted naming conventions
    - Consistent indentation
    - Well-structured and readable code
    - Semantic naming of variables, functions, CSS classes, etc.
    - Short and clear functions that do one thing
    - Efficient code - if you have your MVP, refactor
    - DRY (Don't Repeat Yourself) code
* Use one of these technology stacks. You may choose which tech stack.
    - Full-Stack Rails App
    - Rails API with React Front-End
    - Express API with React Front-End
* Be deployed on Heroku or similar platform
* Craft a README.md file that explains your app.

## Planning

1. Wireframes
    * For the restaurant's point of view
    ![restaurant-wireframe](/app/assets/images/restaurant-wireframes.gif)
    * For the customer's point of view
    ![customer-wireframe](/app/assets/images/customer-wireframe.png)
2. Entity Relationship Diagram for database relationships
    * ![erd](/app/assets/images/initial-erd.png)
3. User stories for the Minimum Viable Product (MVP) and more
    * ![user-stories](/app/assets/images/user-stories.png)
<!-- ## Build/Code Process

## Challenges

## Wins

## Key learnings and takeaways

<!-- ## Bugs -->

# Future Improvements

* I would like to add a generic landing page, instead of the login/sign up page.
* Right now the restaurant's details are loaded in multiple places, making my code not very DRY. I would've loaded the information in App.js but useParams can't be used outside of the Router. I would like to find a more efficient solution to this. 
* Allow restaurants to delete their account.
* Send the order receipt to the customer's email address using ActionMailer
* Allow restaurants to search for orders by creation date and/or order id. 