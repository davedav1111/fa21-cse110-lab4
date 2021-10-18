1. The number ```3``` will be printed because the ```for``` loop terminates when ```i``` is greater of equal to 3. 
2. The number ```150``` will be printed because the last entry of ```prices``` after appling the discount would be ```300 * 0.5 = 150```. 
3. The number ```150``` will be printed since ```final price``` is just the rounding of ```discounted price```, and ```150``` rounded is still ```150```. 
4. The function will return ```[50, 100, 150]```. This is because the function will apply the discount rate to each entry in the ```prices``` array and return these discounted values in an array. Since the discount rate ```discount``` is ```0.5```, each entry in ```prices = [100, 200, 300]``` would be multplied by ```1 - 0.5 = 0.5``` and returned as ```discounted```, and hence the result follows from that. 
5. The code would output an error at line 12 since line 12 attempts to access the value of ```i```, which is declared with the ```for``` loop above using ```let``` and cannot be accessed outside of the ```for``` loop code block.
6. Similar to question 5, the variable ```discountedPrice``` is declared using the ```let``` keyword inside the ```for``` loop. Hence, the code would output an error at line 13 since it attempts to access ```discountedPrice``` outside of its scope. 
7. The number ```150``` will be printed by line 14 since we defined ```finalPrice``` on the top of our function, so there won't be an issue when trying to access it inside the function. The value ```150``` will be printed because the last instance of when ```finalPrice``` is updated is when the last entry of ```prices``` is applied to the discount rate, which is indeed ```300 * 0.5 = 150```.
8. The function would return ```[50, 100, 150]```, which are the prices in ```prices``` after the discount is applied. 
9. Line 11 would cause an error since it is attempting to access the variable ```i``` that is out of scope outside of the ```for``` loop where ```i``` is declared. 
10. Line 12 would print ```3```, the length of the array ```price```. 
11. The function would return ```[50, 100, 150]```, which is indeed the entries in the array ```prices``` after the discount rate is applied. 

12. 
    1.  ```student.name```
    2.  ```student[Grad Year]```
    3.  ```student.greeting()```
    4.  ```student['Favorite Teacher'].name```
    5.  ```student.courseLoad[0]```
13. 
    1. ```'32'```, because 2 is converted into the string ```'2'```  and is concatenated to the string ```'3```.
    2. ```1```, because the string ```'3'``` is converted to the integer ```3```, and substracted by ```2```. 
    3. ```3```, because ```null``` is converted to integer ```0```, and added to the number ```3```. 
    4. ```'3null'```, because the value ```null``` is converted to the string ```'null'```, and concatenated with the string ```'3'```. 
    5. ```4```, because the boolean value ```true``` is converted to integer ```1```, and added to value ```3```. 
    6. ```0```, because both ```false``` and ```null``` is converted to number ```0```. 
    7. ```'3undefined'```, because ```undefined``` is converted to ```'undefined'``` and concatenated with ```'3```. 
    8. ```NaN```, since the string ```'3'``` is converted to integer ```3```, and subtracted to ```NaN```, converted from ```undefined```. 
14. 
    1. ```true```, since the string ```2``` is converted to the number ```2``` and being compared to the number ```1```. 
    2. ```false```, since both values are ```string```, string comparison is being used and ```'2'``` is lexicographically larger than ```'12'```. 
    3. ```true```, since ```'2'``` is being converted to the integer ```2```. 
    4. ```false```, since the integer ```2``` is not the same type as the string ```'2'```. 
    5. ```false```, since the boolean ```true``` is converted to ```1```, and it is not equal to ```2```. 
    6. ```true``` since ```Boolean(2)``` is ```true```. 
15. The ```==``` operator uses type conversion to compare two data values, and can compare across different data types. However, the ```===``` operator will ```false``` when comparing different data types regardless of the result of data conversion. 
16. part2-question16.js
17. The result of the function ```modifyArray([1,2,3], doSomething)``` will be ```[2,4,6]``` since the ```doSomething``` function return the input number times ```2```, and the ```modifyArray``` function pushes the values of each entry of ```[1,2,3]``` applied with ```doSomething``` into a empty array and returns the new array. Hence, the new array would be the original array but with each entry multiplied by 2. 
18. part2-question18.js
19. Output: 
    ```
    1
    4
    3
    2
    ```
    This is because ```setTimeout()``` will execute the function inside after the event cycle. First ```1``` and ```4``` will be printed because they are not inside the ```setTimeout()```. Then ```3``` will be printed because it has a delay of ```0``` seconds. Finally, ```2``` will be printed after ```1``` secone because the delay for the function is ```1000``` miliseconds. 
20. 
