class Api::BookshelfMembershipsController < ApplicationController

  def index
    @bookshelf_memberships = current_user.bookshelf_memberships.where(book_id: params[:bookId])
    # debugger
    # @bookshelf_memberships = BookshelfMembership.joins(:bookshelves)
    #   .where(book_id: params[:book_id])
      # .select(:book_id)
  end

  def create
    @bookshelf_membership = BookshelfMembership.new(bookshelf_membership_params)
    if @bookshelf_membership.save
      render "api/bookshelf_memberships/show"
    else
      render json: @user.errors.full_messages
    end
  end

  def show
    @bookshelf_membership = BookshelfMembership.find(params[:id])
  end

  def update
    @bookshelf_membership = BookshelfMembership.find(params[:id])
    unless @bookshelf_membership.update(bookshelf_membership_params)
      render json: @user.errors.full_messages
    end
  end

  def destroy
    @bookshelf_membership = BookshelfMembership.find(params[:id])
    # @bookshelf_membership = BookshelfMembership.find_by(
    #   book_id: params[:book_id],
    #   bookshelf_id: params[:bookshelf_id]
    # )
    if @bookshelf_membership
      @bookshelf_membership.destroy!
      render 'api/bookshelf_memberships/show'
    else
      render json: @user.errors.full_messages, status: 404
    end
  end

  def bookshelf_membership_params
    params.require(:bookshelf_membership).permit(:book_id, :bookshelf_id)
  end

end
