class CreateBoards < ActiveRecord::Migration
  def change
    create_table :boards do |t|
      t.string :piece_position

      t.timestamps
    end
  end
end
