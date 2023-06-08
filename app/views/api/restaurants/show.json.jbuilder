# https://github.com/rails/jbuilder

json.name @restaurant.name
json.email @restaurant.email
json.location @restaurant.location
json.phone_number @restaurant.phone_number

json.menu @restaurant.menu_sections do |menu_section|
  json.name menu_section.name
  json.id menu_section.id
  json.items menu_section.items do |item|
    json.name item.name
    json.id item.id
    json.description item.description
    json.price item.price
  end
end
