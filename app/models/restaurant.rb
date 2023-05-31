class Restaurant < ApplicationRecord
  has_many :menu_sections
  has_many :orders
end
