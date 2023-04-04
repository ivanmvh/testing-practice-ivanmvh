class Greeter
  def initialize(name = "World")
    @name = name
  end

  def say_hi
    puts "Hi #{@name}!"
  end

  def say_bye
    puts "Bye #{@name}, come back soon."
  end
end

greater = Greeter.new("Ivan")
greater.say_hi
greater.say_bye

#greater.@name # no works - !!! error !!!

puts Greeter.instance_methods
puts "-----------------------------------"
puts Greeter.instance_methods(false)

p 'p greater.respond_to?("name")'
p greater.respond_to?("name")

p 'greater.respond_to?("say_hi")'
p greater.respond_to?("say_hi")

class Greeter
    attr_accessor :name
end

p 'p greater.respond_to?("name")'
p greater.respond_to?("name")

p 'greater.respond_to?("say_hi")'
p greater.respond_to?("say_hi")
