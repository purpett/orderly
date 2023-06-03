# https://github.com/rails/jbuilder

json.name @restaurant.name
json.email @restaurant.email
json.location @restaurant.location

json.menu @restaurant.menu_sections do |menu_section|
  json.name menu_section.name
  json.items menu_section.items do |item|
    json.name item.name
    json.description item.description
    json.price item.price
  end
end