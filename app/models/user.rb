class User < ApplicationRecord
  has_many :answers, inverse_of: :user, dependent: :destroy
  accepts_nested_attributes_for :answers
end
