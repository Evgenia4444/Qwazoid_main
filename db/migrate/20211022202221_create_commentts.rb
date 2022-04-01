class CreateCommentts < ActiveRecord::Migration[6.1]
  def change
    create_table :commentts do |t|
      t.string :commenter
      t.text :body
      t.references :post, null: false, foreign_key: true

      t.timestamps
    end
  end
end
