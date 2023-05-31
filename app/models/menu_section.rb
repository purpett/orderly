class MenuSection < ApplicationRecord
  has_many :items
  belongs_to :restaurant
end
