# json.partial! "api/bookshelf_memberships/bookshelf_membership", bookshelf_membership: @bookshelf_memberships

@bookshelf_memberships.each do |bookshelf_membership|
  json.set! bookshelf_membership.id do
    json.partial! "api/bookshelf_memberships/bookshelf_membership", bookshelf_membership: bookshelf_membership
  end
end
