class CreateOrders < ActiveRecord::Migration[7.0]
  def change
    create_table :orders do |t|
      t.string :customer
      t.references :restaurant, null: false, foreign_key: true

      t.timestamps
    end
  end
end
