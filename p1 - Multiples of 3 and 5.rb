=begin
============================
    Problem #1
    Multiples of 3 and 5
============================
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.
=end

# See with irb at repl.it
# https://repl.it/FBKh/0

MAX = 1000
sum = 0

for a in 0..MAX

  if a % 3 == 0 or a % 5 == 0
    sum += a
  end

end

puts sum
