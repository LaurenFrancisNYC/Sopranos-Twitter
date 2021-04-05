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

@tony = Character.create!(name: 'Tony Soprano', img_url: 'https://i.ibb.co/nQ8nr8n/1-a9l-Hg-Qy-CEuk6-R6116-E-w-Sg.jpg')
@meadow = Character.create!(name: 'Meadow Soprano', img_url: 'https://i.ibb.co/k8wnjTW/full.jpg')
@carmela = Character.create!(name: 'Carmela Soprano', img_url: 'https://i.ibb.co/cwsjzvf/79ad10df073e25cb8346845369e4fa3968-carmelo-soprano-1-rsquare-w700.jpg')
@livia = Character.create!(name: 'Livia Soprano', img_url: 'https://i.ibb.co/0Y0mn17/Livia-Soprano.webp')
@aj = Character.create!(name: 'AJ Soprano', img_url: 'https://i.ibb.co/HDFnPb5/uniform.jpg')
@furio = Character.create!(name: 'Furio Giunta', img_url: 'https://i.ibb.co/n3yrMwq/Federico-Castelluccio-as-Furio-Giunta.webp')
@christopher = Character.create!(name: 'Christopher Moltisanti', img_url: 'https://i.ibb.co/nCsX8h7/p-the-sopranos-michael-imperioli.jpg')
@sil = Character.create!(name: 'Silvio Dante', img_url: 'https://i.ibb.co/cxNYjT2/sop603silv-main1.jpg')
@paulie = Character.create!(name: 'Paulie Gualtieri', img_url: 'https://i.ibb.co/njSdKgX/Paulie-From-The-Sopranos-Was-A-Real-Life-Gangster-750x422.jpg')
@melfie = Character.create!(name: 'Dr. Jennifer Melfi', img_url: 'https://i.ibb.co/DbhdPkB/Jennifer-Melfi.webp')


puts "#{Character.count} characters created"




