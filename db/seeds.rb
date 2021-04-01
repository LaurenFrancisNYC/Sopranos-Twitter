# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Post.destroy_all
Character.destroy_all
User.destroy_all

@admin = User.create!(name: 'admin', email: 'admin@email.com', password: '123456')
puts "#{User.count} users created"

@tony = Character.create!(name: 'Tony')
puts "#{Character.count} character created"




