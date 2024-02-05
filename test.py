import math

class Solution(object):
    def checkPerfectNumber(self, num):
        number = 0
        upto = math.sqrt(num)
        check = 0

        while number < upto:
            number += 1
            if num % number == 0:
                check += number
                check += num / number
        
        if check == num:
            return True
        else: 
            return False
        
num = 6
Solution.checkPerfectNumber(Solution, num)