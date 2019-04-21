# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
require 'csv'

puts "Seeding Users...."
CSV.read(Rails.root.join('lib', 'seeds', 'thirty_mock_users.csv'), headers: true).each do |row|
  u = User.create(row.to_hash)
  puts "#{u.name} saved!"
end

puts "\nSeeding Restaurants...."
CSV.read(Rails.root.join('lib', 'seeds', 'one_hundred_mock_restaurants.csv'), headers: true).each do |row|
  r = Restaurant.create(row.to_hash)
  puts "#{r.name} saved!"
end

puts "\nCreating favorites......"
CSV.read(Rails.root.join('lib', 'seeds', 'one_fifty_favorite_restaurants.csv'), headers: true).each do |row|
  u = User.find(row['user_id'])
  r = Restaurant.find(row['restaurant_id'])
  u.restaurants << r
  puts "#{u.name} loves #{r.name}!"
end

puts "\nThere are now #{User.count} rows in the users table"
puts "There are now #{Restaurant.count} rows in the restaurants table"
puts "\nFinished!"