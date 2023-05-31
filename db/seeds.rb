# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# seeds.rb

# Create some restaurants
restaurant1 = Restaurant.create(
  name: "Restaurant 1",
  email: "restaurant1@example.com",
  password: "password1",
  location: "Location 1"
)

restaurant2 = Restaurant.create(
  name: "Restaurant 2",
  email: "restaurant2@example.com",
  password: "password2",
  location: "Location 2"
)

# Create some menu sections for each restaurant
menu_section1 = restaurant1.menu_sections.create(name: "Appetizers")
menu_section2 = restaurant1.menu_sections.create(name: "Main Courses")
menu_section3 = restaurant2.menu_sections.create(name: "Desserts")
menu_section4 = restaurant2.menu_sections.create(name: "Drinks")

# Create some items
item1 = Item.create(
  name: "Item 1",
  description: "Description of Item 1",
  price: 10,
  menu_section: menu_section1
)

item2 = Item.create(
  name: "Item 2",
  description: "Description of Item 2",
  price: 15,
  menu_section: menu_section2
)

item3 = Item.create(
  name: "Item 3",
  description: "Description of Item 3",
  price: 8,
  menu_section: menu_section3
)

item4 = Item.create(
  name: "Item 4",
  description: "Description of Item 4",
  price: 2,
  menu_section: menu_section4
)

# Create some orders
order1 = restaurant1.orders.create(customer: "Customer 1")
order2 = restaurant2.orders.create(customer: "Customer 2")
