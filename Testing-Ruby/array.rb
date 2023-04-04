puts arr = ['a', 'b', 'c', 'd', 'e', 'f']  #=> IndexError: index 100 outside of array bounds: -6...6

# arr.fetch(100) #=> IndexError: index 100 outside of array bounds: -6...6
puts arr.fetch(100, "oops") #=> "oops"


