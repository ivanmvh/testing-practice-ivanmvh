require 'date'
=begin
x = Date.valid_date?(2015,9,5)
puts x
x1 = Date.valid_date?('2023-03-05')
puts x1
=end


def valid_date?(date)
  # date_format = '%d-%m-%Y'
  date_format = '%Y-%m-%d'
  DateTime.strptime(date, date_format)
  true
rescue ArgumentError
  false
end

date ='2015-11-30' 
puts date, valid_date?(date)
date ='2015-11-32' 
puts date, valid_date?(date)
date ='2015-99-30' 
puts date, valid_date?(date)
date ='01-01-30' 
puts date, valid_date?(date)



