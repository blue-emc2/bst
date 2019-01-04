class CreateSections < ActiveRecord::Migration[5.2]
  def change
    create_table :sections do |t|
      t.text :body, null: :false
      t.references :article

      t.timestamps
    end
  end
end
