class CreateMenuSections < ActiveRecord::Migration[7.0]
  def change
    create_table :menu_sections do |t|
      t.string :name
      t.references :restaurant, null: false, foreign_key: true

      t.timestamps
    end
  end
end
