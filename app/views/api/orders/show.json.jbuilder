# https://github.com/rails/jbuilder

json.name @restaurant.name
json.email @restaurant.email
json.location @restaurant.location

json.id @order.id
json.items @order.items do |item|
  json.name item.name
  json.price item.price
end
