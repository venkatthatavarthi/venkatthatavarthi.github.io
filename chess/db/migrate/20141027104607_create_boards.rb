class CreateBoards < ActiveRecord::Migration
  def change
    create_table :boards do |t|
      t.text :piece_position
      t.string :current_player , default:'b'
      t.string :board_name

      t.timestamps
    end
  end
end
