class Order < ApplicationRecord
  belongs_to :restaurant
  has_many :order_items
  has_many :items, through: :order_items

  accepts_nested_attributes_for :order_items

  def total
    items.sum(:price)
  end
end
