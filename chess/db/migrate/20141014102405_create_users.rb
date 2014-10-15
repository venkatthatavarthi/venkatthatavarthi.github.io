class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name
      t.string :user_name
      t.string :password
      t.binary :image

      t.timestamps
    end
  end
end
