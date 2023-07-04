# ORDERLY.

## Description

Orderly has been developed as the fourth and final project of General Assembly's Software Engineering Immersive program. 
It's both a Full-Stack Ruby on Rails app, and a Rails API + React Front-End app. Orderly is an online food ordering and management platform for restaurants. It has been built using the perspective of both the restaurant and the customer. It allows restaurants to manage their menu and the received orders (Full-Stack Rails). At the same time, a customer can see the restaurant's menu by scanning a unique QR code, and make an order, without having to create an account (Rails API + React Front-End). Orderly has been styled using Tailwind CSS, and it uses PostgreSQL as database.

## Deployment link

Sign up/Log in page for the restaurant: https://orderly.fly.dev.

For the customer's perspective, scan the QR code on the restaurant's profile. 

## Getting Started

## Timeframe

The timeframe given to build this app was 2 weeks. I developed Orderly independently.

## Technologies

Copy the snippets of code below and paste them in your terminal:

`$ git clone https://github.com/purpett/orderly.git`

`$ bundle install`

Then run the following to start the server and see the changes as you go: $ ./bin/dev

In your browser, navigate to `localhost:3000`

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
* Axios
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
## Build/Code Process

1. I started by creating a Rails app, specifying that I wanted a PostgreSQL database, and that I wanted to use esbuild to integrate JavaScript. 
2. Firstly, I worked on the Ruby on Rails part, that is the restaurant’s UI. 
    * I created all my models, then worked on authentication with Devise. I configured Devise to apply authentication on the Restaurant Model in the routes.rb file.

    ![devise-restaurant](/app/assets/images/readme-snippets/devise-restaurant.png)

    * I coded all the basic CRUD operations for all my models. The Item, Menu Section, and Order models are full CRUD. The Order Item Model is update only, and the Restaurant Model doesn’t have the delete operation.
    * I worked on the Rails Views, or UI for the restaurant. I show the restaurant’s profile with their editable information and QR code, the restaurant’s menu, the orders page, and the view for a single order.

        ![restaurant-qrcode](/app/assets/images/readme-snippets/restaurant-qr.png)

    * I styled using Tailwind CSS mid-project, so that I could get familiar with this library.
3. I deployed the project using Fly, so that I could check that everything worked fine.
4. I worked on APIs in the backend:
    * I created the endpoints in the routes.rb file.

        ![api-endpoints](/app/assets/images/readme-snippets/api-routes.png)

    * I built the API actions in the controllers folder.

        ![restaurant-api-actions](/app/assets/images/readme-snippets/restaurant-api.png)

        ![order-api-actions](/app/assets/images/readme-snippets/orders-api.png)

    * I then exploited the native MVC design pattern flow to render the response of my APIs to JSON using JBuilder. In the views folder:

        ![restaurant-jbuilder](/app/assets/images/readme-snippets/restaurant-jbuilder.png)

        ![order-jbuilder](/app/assets/images/readme-snippets/orders-jbuilder.png)

5. I started working on the customer’s UI, by integrating React inside the javascript folder. I manually set up the React Root file and what would be the `index.js` file in a regular React app.

    ![root-element-application.js](/app/assets/images/readme-snippets/application-js.png)

    ![react-app-div](/app/assets/images/readme-snippets/root-div.png)

    ![react-app-root](/app/assets/images/readme-snippets/react-app-root.png)

6. After creating and linking all the components, I made API calls in the Front-End:
    * To get a restaurant's information.

        ![restaurant-axios](/app/assets/images/readme-snippets/get-restaurant-axios.png)

    * To create an order once the customer submits their order.

        ![get-order-axios](/app/assets/images/readme-snippets/get-order-axios.png)
        
    * To get an order’s information to display in the customer’s receipt.

        ![create-order-axios](/app/assets/images/readme-snippets/create-order-axios.png)

7. I built the logic behind adding an item to the customer’s order.
    * The `addItemToOrder` function is passed an item and adds it to the Order state.

        ![add-item-to-order](/app/assets/images/readme-snippets/addItemToOrder.png)

    * The `countItemInOrder` function is passed an item and counts how many times that item is in an order. This is used to display the quantity of a certain item in an order.

        ![count-item-in-order](/app/assets/images/readme-snippets/countItemInOrder.png)

    * The `removeItemFromOrder` function is passed an item and removes it from the order array by finding its index, creating a new array without that item, and updating the Order state with the new array.

        ![remove-item-from-order](/app/assets/images/readme-snippets/removeItemFromOrder.png)

    * The `clearOrder` function empties the order currently saved in localStorage, then resets the Order state to an empty array.

        ![clear-order](/app/assets/images/readme-snippets/clearOrder.png)

    * The `orderTotal` function is passed the order, and sums all the item prices, using the `reduce` method. 

        ![order-total](/app/assets/images/readme-snippets/orderTotal.png)

8. I removed duplicated items from orders and allowed customers to add items from the order page.

    * In the Order component, I used the `new Set()` method on the `order` array to create a unique collection of items. 

        ![unique-items-array](/app/assets/images/readme-snippets/unique-items-array.png)

    * I then mapped over the new array with unique items only, to render each item in the order page without duplicates.

        ![unique-items-mapped](/app/assets/images/readme-snippets/unique-items-map.png)

9. I integrated Stripe to handle payments before submitting an order. I used Stripe’s documentation ([link](https://stripe.com/docs/payments/quickstart?client=react)). The instructions were given for Sinatra, so I applied to my use case as I used Rails. I built APIs for payments, as well as components, such as the Stripe Form and the Checkout Form.

    * After adding the route on line 28 in my routes.rb file, I built the API action in the controller.

    ![payments-controller](/app/assets/images/readme-snippets/payments-controller.png)

    * I wrote the API call to create a payment.

    ![payments-api](/app/assets/images/readme-snippets/create-payment-stripe.png)

10. I styled the customer’s UI with Tailwind CSS, improved UX, and fixed some bugs. 

## Challenges

* Working with a complex API like Stripe to implement payment functionality. 
* Creating a React application without `create-react-app`, using `esbuild` as a JavaScript web bundler instead of Webpack. This meant that I had to manually configure and set up the project structure, including managing dependencies. 
* This project involved spending time reading documentation and following tutorials, as I chose to work with as many new and/or unfamiliar libraries and tools I could manage. I had never built a React app inside a Full-Stack Rails app. It was my first time using Tailwind CSS, * JBuilder, Stripe API, RQRCode, FriendlyId, Axios. 
* I used JBuilder, a templating library in Rails, to render JSON responses. 

## Wins

* I succeeded at using multiple unfamiliar technologies.
* I handled two Front-Ends, the restaurant’s with Rails Views, and the customer’s with React. 
* Despite being my first experience with Tailwind CSS, I managed to create an appealing and modern design for the application.
* I refactored my code to remove duplicates in the cart, as well as to increase or decrease the quantity of an item from the cart. 
* I implemented a smooth UX.

## Key learnings and takeaways

This project has led me to research, learn, and implement a great deal of things:
* I now know more about integrating Stripe as a payment handler. 
* I feel confident using TailwindCSS classes and customisation. 
* I understand how JBuilder works. 
* I  am more aware of the moving parts of a React app, as I built them manually. 
* I have a deeper understanding of how APIs work, especially the flow of data. 
* I feel somewhat comfortable using Axios instead of Fetch.
* I know how to use the `new Set()` method to create a set of unique items from an array. 

# Future Improvements

* I would like to add a generic landing page, instead of the login/sign up page.
* Right now the restaurant's details are loaded in multiple places, making my code not very DRY. I would've loaded the information in App.js but useParams can't be used outside of the Router. I would like to find a more efficient solution to this.
* Allow restaurants to delete their account.
* Send the order receipt to the customer's email address using ActionMailer.
* Allow restaurants to search for orders by creation date and/or order id.
* Allow restaurants to add images to menu items. 
* Implement a status for the orders on the restaurant’s side, so that they can keep the customers updated on their order progress. 
