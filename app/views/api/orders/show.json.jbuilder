# https://github.com/rails/jbuilder

json.id @order.id
json.items @order.items do |item|
  json.name item.name
  json.price item.price
end
