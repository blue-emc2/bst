class CreateArticles < ActiveRecord::Migration[5.2]
  def change
    create_table :articles do |t|
      t.integer :status, null: false, default: 0
      t.json :config, null: false, default: {}
      t.string :style
      t.references :user

      t.timestamps
    end
  end
end
