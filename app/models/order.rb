class Order < ApplicationRecord
  belongs_to :restaurant
  has_many :items, through: :order_items
end
