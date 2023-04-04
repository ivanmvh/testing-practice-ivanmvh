class Document
  # Most of the class omitted...
  def word_count
    words.size
  end
  private :word_count
  # This method works because self is the right thing,
  # the document instance, when you call it.
  def print_word_count
    n = word_count
    puts "The number of words is #{word_count}"
  end
end

doc = Document.new
doc.print_word_count