class Post < ApplicationRecord
    scope :filter_by_user, -> (user) { where user: user }
    scope :filter_by_category, -> (category) { where category: category }
    scope :filter_by_starts_with, -> (content) { where("content like ?", "%#{content}%")}
    validates :content, :presence => true,
                                        :length => { :minimum => 5 }

    has_many :commentts, :dependent => :destroy
    has_many :comments
    has_many :tags
    has_many :likes, dependent: :destroy
    has_many :favorites, dependent: :destroy
    belongs_to :user
    mount_uploader :image, ImageUploader
    belongs_to :category
end