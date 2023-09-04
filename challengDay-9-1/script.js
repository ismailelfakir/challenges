
function sockMerchant(arr) 
{
    const countStocks = {};  

    for (let i = 0; i < arr.length ; i++) 
    {
        const j = arr[i];
        if (countStocks[j])  
        {
            countStocks[j]++;
        } else 
        {
            countStocks[j] = 1;
        }
    }

    let total = 0;
    for (let key in countStocks) 
    {
        total += Math.floor(countStocks[key] / 2);
    }
    return total;
}


// function sockMerchant(arr) 
// {  
//     const arrDist = [... new Set(arr)];
//     let countStocks = 0 ;

//         for (let j = 0; j <arrDist.length; j++) 
//         {
//             let count = 0;
//             for (let i = 0; i < arr.length; i++) 
//              {
//                 if(arrDist[j] === arr[i]){
//                     count++;
//             }
//         }
//         countStocks += Math.floor(count/2);
//     }
//     return countStocks;
// }





const case1 = sockMerchant([1, 2, 1, 2, 1, 3, 2]); // 2

const case2 = sockMerchant([10, 20, 20, 10, 10, 30, 50, 10, 20]); // 3

const case3 = sockMerchant([1, 1, 3, 1, 2, 1, 3, 3, 3, 3]); // 4

const case4 = sockMerchant([1, 2, 3, 4, 5, 6, 7, 8, 9]); // 0

// -------------------- LOGS -------------------------
console.log(case1);
console.log(case2);
console.log(case3);
console.log(case4);