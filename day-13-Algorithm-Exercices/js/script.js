
//------------------------- 1) Selection Sort Algorithm ---------------------
function selectionSort(arr) 
{
    const n = arr.length;
    
    for (let i = 0; i < n - 1; i++) 
    {
        let minIndex = i;
        
        // get the index of minimum element 
        for (let j = i + 1; j < n; j++) 
        {
            if (arr[j] < arr[minIndex]) 
            {
                minIndex = j;
            }
        }
        
        // change the the elements
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
}

function presentSelectionSorted(arr) 
{
    selectionSort(arr);
    console.log("Your array (Selection): ", arr);
}

// Example
const array1 = [64, 25, 12, 22, 11,70,2];
presentSelectionSorted(array1);

//------------------------- 2) Bubble Sort Algorithm ---------------------

function bubbleSort(arr){
    const n = arr.length;

    for(let i = 0; i < n-1; i++)
    {
        for(let j = 0; j<n-1; j++)
        {
            if(arr[j] > arr[j+1])
            {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
}

function presentBubbleSorted(arr) {
    bubbleSort(arr);
    console.log("Your array (Bubble): ", arr);
}

const array2 = [64, 25, 12, 22, 11,70,2];
presentBubbleSorted(array2);


//------------------------- 3) Insertion Sort Algorithm ---------------------

function insertionSort(arr)
{
    const n = arr.length;
    let j ;
    for(let i = 1; i < n; i++)
    {
        j = i;
        while(j>0 && arr[j-1]>arr[j])
        {
            [arr[j], arr[j-1]] = [arr[j-1], arr[j]];
            j = j-1;
        }
    }
}

function presentInsertionSorted(arr) 
{
    insertionSort(arr);
    console.log("Your array (Insertion): ", arr);
}

const array3 = [64, 25, 12, 22, 11,70,2];
presentInsertionSorted(array3);

//------------------------- 4) Linear search ---------------------

const array4 = [64, 25, 12, 22, 11,70,2];

function linearSerch(arr) 
{
    const n = arr.length;

    //adding Number of the beginning of the prompt for converting the string to number
    const element = Number(prompt("Enter your element to search"));

    for (let i = 0; i < n; i++) 
    {
        if(arr[i] === element){
            console.log("Your index of element is " + i );
        }
    }
}

console.log("Your array is : ", array4);
linearSerch(array4);

//------------------------- 5) Matrix : count the number of 0 within an matrix ---------------------

function countZeros(matrix)
{
    let count = 0;

    // firt loop for rows of matrix
    for (let i = 0; i < matrix.length; i++)
    {
        // second loop for rows of matrix
        for(let j = 0; j < matrix[i].length; j++)
        {
            if(matrix[i][j] === 0) count++;
        }
    }
    return count;
}

const Matrix = [
    [1 , 0 , 2],
    [3 , 1 , 0],
    [0 , 0 , 1]
];

console.log("your matrix is: " + Matrix);
const countZero = countZeros(Matrix);
console.log("you have "+countZero+" in your matrix");