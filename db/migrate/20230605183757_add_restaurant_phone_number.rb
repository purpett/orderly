class AddRestaurantPhoneNumber < ActiveRecord::Migration[7.0]
  def change
    add_column :restaurants, :phone_number, :string
  end
end
