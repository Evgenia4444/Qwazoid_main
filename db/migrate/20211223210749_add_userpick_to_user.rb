class AddUserpickToUser < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :userpick, :string
  end
end
