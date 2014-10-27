class Board < ActiveRecord::Base
	
	before_create :set_piece_position
	validates :board_name , uniqueness: true
	private

	def set_piece_position
	  self.piece_position = '{
		  "1a" : "brook",
		  "1b" : "bknight",
		  "1c" : "bbishop",
		  "1d" : "bking",
		  "1e" : "bqueen",
		  "1f" : "bbishop",
		  "1g" : "bknight",
		  "1h" : "brook",
		  "2a" : "bpawn",
		  "2b" : "bpawn",
		  "2c" : "bpawn",
		  "2d" : "bpawn",
		  "2e" : "bpawn",
		  "2f" : "bpawn",
		  "2g" : "bpawn",
		  "2h" : "bpawn",
		  "8a" : "wrook",
		  "8b" : "wknight",
		  "8c" : "wbishop",
		  "8d" : "wking",
		  "8e" : "wqueen",
		  "8f" : "wbishop",
		  "8g" : "wknight",
		  "8h" : "wrook",
		  "7a" : "wpawn",
		  "7b" : "wpawn",
		  "7c" : "wpawn",
		  "7d" : "wpawn",
		  "7e" : "wpawn",
		  "7f" : "wpawn",
		  "7g" : "wpawn",
		  "7h" : "wpawn"
    }'
  end
end
