class BoardsController < ApplicationController
	def  index	
	  @boards = Board.all.order("created_at DESC")
	  @boards = Board.order("id desc").page(params[:page]).per(10)
	end
	def new
		board = Board.create()
		redirect_to board 
	end
	def show
		@board = Board.find(params[:id])		
       # @boards = Board.where(:id>=0).order("id asc").page( params[:page]).per(10)      
	end
	def update
        board = Board.find(params[:id])        
        board.update_attributes(board_params)
        redirect_to board        
	end
	def board_params
        params.require(:board).permit(:piece_position,:current_player)
    end

end
