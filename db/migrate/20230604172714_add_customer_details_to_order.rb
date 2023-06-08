class AddCustomerDetailsToOrder < ActiveRecord::Migration[7.0]
  def change
    remove_column :orders, :customer

    add_column :orders, :customer_name, :string
    add_column :orders, :customer_email, :string
    add_column :orders, :customer_phone, :string
  end
end
