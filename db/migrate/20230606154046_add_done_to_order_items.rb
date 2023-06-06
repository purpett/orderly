class AddDoneToOrderItems < ActiveRecord::Migration[7.0]
  def change
    add_column :order_items, :done, :boolean, default: false
  end
end
