class ChangeTypePiecePosition < ActiveRecord::Migration
  def change
  	 change_column :boards, :piece_position, :text
  end
end
