# n = 1


	
# # while n < 5
# # 	puts n
# # 	n  +=  1
# # end
# n = 1
# until n > 5
# 	puts n
# 	n += 1
	
# end


# glenn.each do | elem |
# 	puts elem
# 	puts 'hello'
# end

# sample_array = [2,3,4]
# p sample_array.each{| elem | elem ** 2}

# array_of_integers = Array(1..10)




#  sample_array = [2,3,4]
#  # glenn.map do | elem |
#  # 	p elem*elem
#  # end
# sample_array.map{|elem| elem * elem}
# result = p sample_array

# ////////////////////////////////////////////# ////////////////////////////////////////////# ////////////////////////////////////////////# ////////////////////////////////////////////
# p sample_array = [9,25,100]
# sample_array.each do | square_root|
# 	p Math.sqrt(square_root).to_i
# end
# # the Map method that glen showed us
# p sample_array.map { | elem | Math.sqrt(elem).to_i  }
# # p sample_array
# ////////////////////////////////////////////# ////////////////////////////////////////////# ////////////////////////////////////////////# ////////////////////////////////////////////
 
# n = 1

# if n < 2
# 	puts "less than 2"
# elsif n == 2
# 	puts "its two!"
# else 
# 	puts " greater than two!"
# end


# x = true

# puts "its true!" if x!= false
# puts "its true!" unless x == false
# ////////////////////////////////////////////# ////////////////////////////////////////////# ////////////////////////////////////////////
# num_array = Array(1..75)

# if num_array.length < 50
# 	puts "its less than 50"
# else
# 	puts "Its greater than 50"
# end

# puts "its less than 50" if num_array.length < 50
# puts "its greater than 50" if num_array.length> 50
# # my_array = (1,2,3,4,5,6,7,8,9,10)

# if my_array < 11
# 	puts "it works"
# elsif my_array == 10
# 	puts "end of string"

# end
# ////////////////////////////////////////////# ////////////////////////////////////////////# ////////////////////////////////////////////
# def which_type?(input)
# input.class
# end
# p which_type?(Array(1..10))
# p which_type?({})
# p which_type?("Hi Blaise")
# p which_type?(12345)
# ////////////////////////////////////////////# ////////////////////////////////////////////# ////////////////////////////////////////////

# # ////////////////////////////////////////////# ////////////////////////////////////////////# ////////////////////////////////////////////# ////////////////////////////////////////////

arr = ['a','b','c','d']
hsh = {'e' => 'f', 'g' =>'h'}
def new_array(arr_param, hsh_param)
# p temp = hsh_param.to_a
# arr_parm + temp
(arr_param + hsh_param.to_a).flatten
end
p new_array(arr, hsh)









