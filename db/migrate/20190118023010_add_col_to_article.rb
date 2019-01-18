class AddColToArticle < ActiveRecord::Migration[5.2]
  def change
    add_column :articles, :col, :integer
  end
end
