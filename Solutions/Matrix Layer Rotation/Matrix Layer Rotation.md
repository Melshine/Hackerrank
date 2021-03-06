# Problem
You are given a 2D matrix of dimension m x n and a positive integer r.
You have to rotate the matrix r times and print the resultant matrix. Rotation should be in anti-clockwise direction.

Rotation of a 4 x 5 matrix is represented by the following figure. Note that in one rotation, you have to shift elements by one step only.

![Matrix rotation example](https://hr-challenge-images.s3.amazonaws.com/2517/matrix-rotation.png)

It is guaranteed that the minimum of m and n will be even.

As an example rotate the Start matrix by 2:
````
Start         First           Second
 1 2 3 4       2  3  4  5      3  4  5  6
12 1 2 5  ->   1  2  3  6 ->   2  3  4  7
11 4 3 6      12  1  4  7      1  2  1  8
10 9 8 7      11 10  9  8     12 11 10  9
````

**Function Description**

Complete the matrixRotation function in the editor below. It should print the resultant 2D integer array and return nothing.

*matrixRotation* has the following parameter(s):

* matrix: a 2D array of integers
* r: an integer that represents the rotation factor

# Solution

````javascript
var mij = i + j;
````
````
[ [ 0, 1, 2, 3 ],
  [ 1, 0, 1, 4 ],
  [ 2, 1, 2, 5 ],
  [ 3, 2, 3, 6 ],
  [ 4, 5, 6, 7 ] ]
````
````javascript
  var mij = i + j - 2*frame_v;
````
````
[ [ 0, 1, 2, 3 ],
  [ 1, 2, 3, 4 ],
  [ 2, 3, 4, 5 ],
  [ 3, 4, 5, 6 ],
  [ 4, 5, 6, 7 ] ]
````
````javascript
var mij = i + j - 2*frame_v;
if(!(j == frame_v || i == (m-1) - frame_v)) mij = frame_c - mij;
````
````
[ [ 0, 13, 12, 11 ],
 [ 1, 0, 5, 10 ],
 [ 2, 1, 4, 9 ],
 [ 3, 2, 3, 8 ],
 [ 4, 5, 6, 7 ] ]
````
