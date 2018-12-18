class CreateArticles < ActiveRecord::Migration[5.2]
  def change
    create_table :articles do |t|
      t.string :status, null: false
      t.json :config, null: false
      t.string :style
      t.references :user

      t.timestamps
    end
  end
end
