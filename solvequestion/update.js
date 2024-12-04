let arr =  [[5, 1, 2, 3],
            [4, 6, 7, 8], 
            [9, 10, 11, 12], 
            [13, 14, 15, 16]];

           
            for (let i = 0; i < arr.length; i++) 
                { 
               
                    arr[i][i] = 0;
            }
            
            
            
console.log(arr);