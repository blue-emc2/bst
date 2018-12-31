# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

body = <<~EOS
  "春はあけぼの。やうやう（ようよう）白くなりゆく山ぎは（やまぎわ）、
  少し明（あ）かりて、紫（むらさき）だちたる雲の細くたなびきたる。"
EOS

config = {
  width: 2,
  height: 1,
}

4.times do |i|
  a = Article.new(status: :draft)

  section = Section.new(body: body, article: a)
  section.save!

  config[:layout] = [
    {s: section.id},
    {i: nil}
  ]

  a.config = config.to_json
  a.save!
end
