class CreateItems < ActiveRecord::Migration[7.0]
  def change
    create_table :items do |t|
      t.string :name
      t.string :description
      t.integer :price
      t.references :menu_section, null: false, foreign_key: true

      t.timestamps
    end
  end
end
