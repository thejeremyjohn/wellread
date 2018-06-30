class Api::ReviewsController < ApplicationController
  def index
    @reviews = Book.find(params[:book_id]).reviews
    # @reviews = Review.all.where(book_id: params[:bookId])
  end

  def create
    @review = Review.new(review_params)
    if @review.save
      render 'api/reviews/show'
    else
      render json: @review.errors.full_messages
    end
  end

  def show
    @review = Review.find(params[:id])
  end

  def update
    @review = Review.find(params[:id])
    if @review.update(review_params)
      render 'api/reviews/show'
    else
      render json: ['Users can only update their own reviews'], status: 401
    end
  end

  def destroy
    @review = current_user.reviews.find(params[:id])
    if @review
      @review.destroy!
      render 'api/reviews/show'
    else
      render json: ['No review mathing that id for current user'], status: 404
    end
  end

  def review_params
    params.require(:review)
      .permit(:rating, :body, :bookshelf_membership_id)
  end
end
