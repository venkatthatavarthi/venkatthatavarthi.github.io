class AddCurrenPlayerToBoards < ActiveRecord::Migration
  def change
    add_column :boards, :current_player, :string,default:'b'
  end
end
