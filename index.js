// 26 - masala   ////  Berilgan ikki massivning umumiy elementlarini toping.
let new_arr = []
function commonElements(arr1, arr2) {
    for(let i = 0; i < arr1.length; i++){
       for(let g = 0; g < arr2.length; g++){
            if (arr1[i] === arr2[g]) {
               new_arr.push(arr1[i])
            }
       } 
    }
    console.log(new_arr);
}
// commonElements([1, 2, 3, 4], [3, 4, 5, 6]); 




// 27 - masala   ////   Berilgan ikki qatorning umumiy belgilarini qaytaring.

// function commonCharacters(str1, str2) {
//     let arr = []
//     for(let i = 0; i < str1.length; i++){
//         for(let g = 0; g < str2.length; g++){
//             if (str2[g] === str1[i]) {    
//                arr.push(str2[g]) 
//             }
//         }
//     }  
//     console.log(arr.join(""));
// }
// commonCharacters("hello", "world"); // "lo"




// 28 - masala    ////   Berilgan ikki massivdan simmetrik farqni toping (faqat birida bor va ikkinchisida yo'q elementlar).
function symmetricDifference(arr1, arr2) {
    function difference(arrA, arrB) {
        return arrA.filter(item => !arrB.includes(item));
    }
    let diff1 = difference(arr1, arr2);
    let diff2 = difference(arr2, arr1);
    return [...diff1, ...diff2];
}

// console.log(symmetricDifference([1, 2, 3], [3, 4, 5])); // [1, 2, 4, 5]




// 29 - masala    ////   Berilgan massiv ichida musbat, manfiy va nol qiymatli raqamlarning foizini hisoblang.      
function calculatePercentages(arr) {
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;
    let totalCount = arr.length;

    arr.forEach(num => {
        if (num > 0) {
            positiveCount++;
        } else if (num < 0) {
            negativeCount++;
        } else {
            zeroCount++;
        }
    });

    let positivePercentage = (positiveCount / totalCount) * 100;
    let negativePercentage = (negativeCount / totalCount) * 100;
    let zeroPercentage = (zeroCount / totalCount) * 100;

    return {
        positive: positivePercentage.toFixed(2) + '%',
        negative: negativePercentage.toFixed(2) + '%',
        zero: zeroPercentage.toFixed(2) + '%'
    };
}
// console.log(calculatePercentages([1, -2, 0, 4, -5, 0, 3])); 
// { positivePercentage: '42.86%', negativePercentage: '28.57%'





// 30 - masala    ////    Berilgan qator ichidagi har bir belgini faqat bir marta qoldirib, unikal belgilar ketma-ketligini yarating.
function uniqueCharacters(str) {
    console.log(str.replace(/(.)(?=.*\1)/g,""));
}
// uniqueCharacters("hello world"); // "helo wrd"




// 31 - masala  ////   Berilgan massivdan yig'indisi ma'lum bir qiymatga teng bo'lgan sonlar juftligini toping.

const twoSum = (arr, num) => {
    let obj = {};
    let res = [];
    arr.map(item => {
      let com = num - item;
      if (obj[com]) {
        res.push([obj[com], item]);
      } else {
        obj[item] = item;
      }
    });
    return res;
};
// console.log(twoSum([1, 2, 3, 4, 5], 6));  // [[1, 5], [2, 4]]




// 32 - masala   ////    Berilgan massiv ichidagi har bir raqamning kvadratini hisoblang va yangi massiv qaytaring.
function squareNumbers(arr) {
    arr.forEach(item => {console.log(item ** 2);})
}
// squareNumbers([1, 2, 3, 4, 5]); // [1, 4, 9, 16, 25]




// 33 - masala   ////   Berilgan oraliqda nechta palindrom son borligini toping.
function findPalindromNumbers(start, end) {
    let palindromes = [];
    function isPalindrome(num) {
        let str = num.toString();
        let reversedStr = str.split('').reverse().join('');
        return str === reversedStr;
    }

    for (let i = start; i <= end; i++) {
        if (isPalindrome(i)) {
            palindromes.push(i);
        }
    }
    return palindromes;
}
// console.log(findPalindromNumbers(1, 100));
// 18 (1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33, 44, 55, 66, 77, 88, 99)




// 34 - masala   ////   Berilgan sonlar qatorini vergul bilan ajratilgan qator ko'rinishida qaytaring.
function joinWithCommas(arr) {
    console.log(arr.join(","));
}
// joinWithCommas([1, 2, 3, 4, 5]); // "1, 2, 3, 4, 5"




