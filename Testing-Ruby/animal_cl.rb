class Animal
  def speak
    "Hello!"
  end
end

class GoodDog < Animal
  def speak
    super + " from super + from GoodDog class"
  end
end

class GoodCat < Animal
  def speak
    " Miau without super"
  end
end

sparky = GoodDog.new
p sparky.speak        # => "Hello! from GoodDog class"

jerry = GoodCat.new
p jerry.speak        # => "Hello! from GoodDog class"