class CreateRestaurants < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.string :address
      t.string :locality
      t.string :city
      t.string :zipcode
      t.string :rating
      t.string :price
      t.string :cuisine
      t.string :url

      t.timestamps
    end
  end
end
