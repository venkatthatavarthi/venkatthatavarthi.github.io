class User < ActiveRecord::Base
	validates :user_name,uniqueness:true, presence: true ,format: { with: /\A[a-z0-9]+\z/ }
	validates :password, presence:true , confirmation: true
end
