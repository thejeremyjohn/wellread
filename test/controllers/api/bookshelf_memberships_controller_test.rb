require 'test_helper'

class Api::BookshelfMembershipsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_bookshelf_memberships_create_url
    assert_response :success
  end

  test "should get update" do
    get api_bookshelf_memberships_update_url
    assert_response :success
  end

  test "should get delete" do
    get api_bookshelf_memberships_delete_url
    assert_response :success
  end

end
