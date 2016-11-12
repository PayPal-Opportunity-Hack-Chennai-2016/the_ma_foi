class CreateStudents < ActiveRecord::Migration[5.0]
  def change
    create_table :students do |t|
      t.string :name
      t.integer :passout
      t.string :course
      t.integer :college_id

      t.timestamps
    end
  end
end
