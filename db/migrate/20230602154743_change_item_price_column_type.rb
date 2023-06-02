class ChangeItemPriceColumnType < ActiveRecord::Migration[7.0]
  def change
    change_column :items, :price, :float
  end
end
