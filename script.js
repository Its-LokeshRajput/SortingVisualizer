// Different Arrays : 
// 13 elements
let defaultArr = [70, 60, 50, 80, 40, 30, 20, 10, 75, 85, 65, 15, 55]
let defaultShades = [
    "#F3E5F5", // Lightest Purple
    "#E1BEE7", // Lavender Purple
    "#CE93D8", // Lilac
    "#BA68C8", // Light Orchid
    "#AB47BC", // Bright Amethyst
    "#9C27B0", // Medium Purple
    "#8E24AA", // Mulberry
    "#7B1FA2", // Dark Mulberry
    "#6A1B9A", // Deep Purple
    "#4A148C", // Grape Purple
    "#38006B", // Eggplant Purple
    "#240046", // Plum Purple
    "#12002A"  // Darkest Purple
];


// 20 elements
let elem20 = [45, 67, 12, 89, 23, 34, 56, 78, 90, 15, 25, 48, 58, 62, 71, 84, 95, 31, 19, 50];
let elem20Shades = [
    "#F3E5F5", // Light Lavender
    "#E9D1F0", // Soft Lilac
    "#DFBEEB", // Light Orchid
    "#D5AAE6", // Pale Amethyst
    "#CB96E1", // Light Purple
    "#C182DC", // Lilac Purple
    "#B66ED7", // Medium Purple
    "#AC5AD2", // Bright Orchid
    "#A246CD", // Vivid Purple
    "#9832C8", // Deep Orchid
    "#8E1EC3", // Bold Purple
    "#841ABF", // Strong Violet
    "#7A16BA", // Dark Purple
    "#7012B5", // Plum Purple
    "#660EAF", // Grape Purple
    "#5C0AAA", // Dark Amethyst
    "#5206A5", // Deep Violet
    "#4802A0", // Rich Indigo
    "#3E009B", // Dark Indigo
    "#340096"  // Darkest Purple
];

// 50 elements
let elem50 = [
    88, 44, 62, 51, 37, 90, 25, 74, 33, 67,
    11, 19, 49, 53, 82, 21, 63, 94, 29, 58,
    17, 72, 83, 41, 60, 77, 32, 20, 75, 68,
    18, 59, 43, 92, 55, 64, 46, 97, 85, 35,
    30, 81, 76, 14, 50, 13, 79, 16, 70, 47
];
let elem50Shades = [
    "#F3E5F5", "#EBDCF4", "#E4D3F2", "#DCCAF1", "#D5C1EF",
    "#CEB8ED", "#C7AFE9", "#C0A6E7", "#B99DE4", "#B194E2",
    "#AA8BE0", "#A382DE", "#9B79DC", "#9470DA", "#8C67D7",
    "#855ED5", "#7E55D3", "#774CD1", "#6F43CE", "#683ACC",
    "#6031CA", "#5928C7", "#511FC5", "#4A16C3", "#420DC0",
    "#3B04BE", "#3400B7", "#2E00A9", "#29009C", "#23008E",
    "#1E0081", "#190073", "#150065", "#100058", "#0C004A",
    "#07003D", "#03002F", "#000022", "#00001A", "#000015",
    "#000012", "#00000F", "#00000D", "#00000B", "#000009",
    "#000007", "#000005", "#000003", "#000001", "#000000"
];

// 90 elements
let elem100 = [
    99, 23, 45, 67, 89, 12, 34, 56, 78, 90,
    24, 68, 44, 92, 37, 15, 62, 80, 11, 39,
    53, 77, 25, 48, 19, 99, 42, 85, 31, 58,
    73, 49, 17, 60, 95, 71, 27, 33, 84, 97,
    66, 20, 14, 75, 26, 52, 50, 98, 18, 76,
    70, 64, 30, 22, 43, 35, 91, 28, 69, 46,
    13, 57, 32, 86, 29, 16, 61, 21, 51, 81,
    74, 47, 63, 59, 54, 40, 36, 41, 82, 65,
    38, 96, 87, 83, 55, 93, 50, 72, 10, 88
];
let elem100Shades = [
    "#F3E5F5", "#F1E0F3", "#EEDAF1", "#ECD5EF", "#E9CFEF",
    "#E7CAED", "#E4C4EB", "#E2BFE9", "#DFB9E7", "#DDB4E5",
    "#DAAEE3", "#D8A9E1", "#D5A3DF", "#D39EDD", "#D098DB",
    "#CE93D8", "#CA8FD5", "#C68BD3", "#C287D0", "#BE82CE",
    "#BA7ECB", "#B67AC9", "#B275C6", "#AE71C4", "#AA6DC1",
    "#A669BF", "#A265BC", "#9E60BA", "#9A5CB7", "#9658B5",
    "#9254B2", "#8E50B0", "#8A4BAD", "#8647AB", "#8243A8",
    "#7E3FA6", "#7A3BA3", "#7636A1", "#72329E", "#6E2E9C",
    "#6A2A99", "#662696", "#622194", "#5E1D91", "#5A198F",
    "#56158C", "#521189", "#4E0D87", "#4A0884", "#460482",
    "#420080", "#3E007D", "#3A007B", "#360078", "#320075",
    "#2E0073", "#2A0070", "#26006E", "#22006B", "#1E0069",
    "#1A0066", "#160064", "#120061", "#0E005F", "#0A005C",
    "#06005A", "#020057", "#000055", "#000052", "#000050",
    "#00004D", "#00004B", "#000048", "#000046", "#000043",
    "#000041", "#00003E", "#00003C", "#000039", "#000037",
    "#000034", "#000032", "#00002F", "#00002D", "#00002A",
    "#000028", "#000025", "#000023", "#000020", "#00001E",
    "#00001B", "#000019", "#000016", "#000014", "#000011"
];

let numbers = defaultArr;
let shades = defaultShades
let graphContainer = document.querySelector(".graphContainer");
let btnBubbleSort = document.querySelector("#bubbleSort")
let btnSelectionSort = document.querySelector("#selectionSort")
let btnInsertionSort = document.querySelector("#btnInsertionSort")
let radios = document.getElementsByClassName("radioButtons")
// console.log(radios)

// Setting All Number array element in div into graphContainer 
async function setDivs(arr) {
    graphContainer.innerHTML = '';  // Clear previous bars
    await arr.forEach(element => {
        graphContainer.innerHTML += `<div class="divs" id="${element}" style="height:${element}%;"></div>`;
    });
}
setDivs(numbers);

// Selecting all child divs
var divs = document.querySelectorAll(".divs");


// Distributing Equal Widths
function distributeEqualWidth(div) {
    let totalChildren = div.length;
    let parentWidth = graphContainer.clientWidth;
    let childWidth = parentWidth / totalChildren;

    divs.forEach(child => {
        child.style.width = `${childWidth}px`;
    });
}
distributeEqualWidth(divs)


// adding events on Specific array
radios[0].addEventListener('click', async () => {
    numbers = defaultArr;
    console.log(`length of Array : ${numbers.length}`)
    shades = defaultShades
    await setDivs(numbers);
    divs = document.querySelectorAll(".divs");
    console.log("divs : ", divs);
    await distributeEqualWidth(divs);
    // console.log("Numbers : ", numbers);
    // console.log("divs : ", divs);
});

radios[1].addEventListener('click', async () => {
    numbers = elem20;
    console.log(`length of Array : ${numbers.length}`)
    shades = elem20Shades;
    await setDivs(numbers);
    divs = document.querySelectorAll(".divs");
    console.log("divs : ", divs);
    await distributeEqualWidth(divs);
    // console.log("Numbers : ", numbers);
    // console.log("divs : ", divs);
});

radios[2].addEventListener('click', async () => {
    numbers = elem50;
    console.log(`length of Array : ${numbers.length}`)
    shades = elem50Shades
    await setDivs(numbers);
    divs = document.querySelectorAll(".divs");
    console.log("divs : ", divs);
    await distributeEqualWidth(divs);
    // console.log("Numbers : ", numbers);
    // console.log("divs : ", divs);
});

radios[3].addEventListener('click', async () => {
    numbers = elem100;
    console.log(`length of Array : ${numbers.length}`)
    shades = elem100Shades
    await setDivs(numbers);
    divs = document.querySelectorAll(".divs");
    console.log("divs : ", divs);
    await distributeEqualWidth(divs);
    // console.log("Numbers : ", numbers);
    // console.log("divs : ", divs);
});

// when sorting completed this function is called to visualize sorting is done
async function finisher(arr) {
    function sleep(sleepTime) {
        return new Promise(resolve => setTimeout(resolve, sleepTime));
    }

    for (let i = 0; i < arr.length; i++) {
        if (i + 1 >= arr.length) {
            arr[i].style.backgroundColor = "rgba(136, 130, 130, 0.626)"
        }
        else {
            arr[i].style.backgroundColor = "rgba(136, 130, 130, 0.626)"
            arr[i + 1].style.backgroundColor = "green"
        }
        await sleep(100)
    }

    await shader(divs)
}

// Last Shader from Light to Dark
async function shader(arr) {
    function sleep(sleepTime) {
        return new Promise(resolve => setTimeout(resolve, sleepTime));
    }

    for (let i = 0; i < arr.length; i++) {
        arr[i].style.backgroundColor = shades[i]
        await sleep(50)
    }
}

// Bubble Sort Visualization
async function bubbleSortVisual(arr, ms) {
    let n = arr.length;

    let swapped;
    function sleep(sleepTime) {
        return new Promise(resolve => setTimeout(resolve, sleepTime));
    }

    async function sort() {
        for (let i = 0; i < n - 1; i++) {
            swapped = false;
            for (let j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

                    // Swap the bars visually
                    let tempHeight = divs[j].style.height;

                    divs[j].style.height = divs[j + 1].style.height;
                    divs[j].style.backgroundColor = "rgba(136, 130, 130, 0.626)"

                    divs[j + 1].style.height = tempHeight;
                    divs[j + 1].style.backgroundColor = "red"


                    swapped = true;
                    await sleep(ms);
                }
                divs[j + 1].style.backgroundColor = "rgba(136, 130, 130, 0.626)"
            }
            if (!swapped) {
                break
            }
        }
    }
    await sort();
    await finisher(divs)
}
btnBubbleSort.addEventListener('click', (e) => {
    bubbleSortVisual(numbers, miliSeconds);
})


// Selection Sort Visualization
async function selectionSortVisual(arr, ms) {
    let n = arr.length

    function sleep() {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function sort() {
        for (var i = 0; i < n - 1; i++) {
            var smallestIndex = i;
            for (var j = i + 1; j < n; j++) {
                if (divs[j].style.height < divs[smallestIndex].style.height) {
                    smallestIndex = j;
                }
            }

            var temp = divs[i].style.height
            divs[i].style.height = divs[smallestIndex].style.height
            divs[i].style.backgroundColor = "rgba(136, 130, 130, 0.626)"

            divs[smallestIndex].style.height = temp
            divs[smallestIndex].style.backgroundColor = "red"
            await sleep();
            // divs[smallestIndex].style.backgroundColor = "rgba(136, 130, 130, 0.626)"
        }
    }
    await sort();
    finisher(divs)
}
btnSelectionSort.addEventListener('click', () => {
    selectionSortVisual(numbers, miliSeconds)
})


// Insertion Sort Visualization
async function insertionSortVisual(arr, ms) {
    let n = arr.length;

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function sort() {
        for (let i = 1; i < n; i++) {
            let current = arr[i];
            let j = i - 1;

            // Shift elements to the right to make space for the current element
            while (j >= 0 && arr[j] > current) {
                arr[j + 1] = arr[j];

                // Visually update bars
                divs[j + 1].style.height = divs[j].style.height;
                
                divs[j+1].style.backgroundColor = "rgb(225, 116, 116)";
                divs[i].style.backgroundColor = "red";
                
                j--;

                divs[j+1].style.backgroundColor = "rgba(136, 130, 130, 0.626)";
                
                await sleep(ms);
            }
            
            // Place the current element in its correct position
            arr[j + 1] = current;

            // Visually update the bar for the current element
            divs[j + 1].style.height = `${current}%`;
        }
    }

    await sort();
    await finisher(divs)
}
// Add event listener for the Insertion Sort button
btnInsertionSort.addEventListener('click', () => {
    insertionSortVisual(numbers, miliSeconds);
});



// Reset Button
btnReset.addEventListener('click', async () => {
    location.reload();
})


// Manage Speed 1st
// let speedConfig = {
//     13: [500, 200, 50], // Slow, Medium, Fast for array length 13
//     20: [300, 150, 50],
//     50: [10, 80, 40],
//   };

//   let miliSeconds = 500; // Default
//   let selectSpeed = document.getElementById("selectSpeed");

//   // Event listener for dropdown
//   selectSpeed.addEventListener('change', () => {
//     const selectedIndex = selectSpeed.selectedIndex; // Get the index of the selected option
//     const numbersLength = numbers.length; // Current array length

//     if (speedConfig[numbersLength]) {
//       miliSeconds = speedConfig[numbersLength][selectedIndex]; // Set the speed based on configuration
//       console.log(`Updated speed: ${miliSeconds} ms`);
//     } else {
//       console.warn("No speed configuration for this array length.");
//     }
//   });  



console.log()
// Manage Speed 2
let slowSpeed = 250;
let mediumSpeed = 80;
let fastSpeed = 10;

let miliSeconds = slowSpeed
let selectSpeed = document.getElementById("selectSpeed")

selectSpeed.addEventListener('change', () => {

    // if(numbers.length == 13) {
    const selectedOptionValue = selectSpeed.value; // get the value of the selected option
    miliSeconds = parseInt(selectedOptionValue); // Set the miliSeconds based on the selected value
    // }
    // else if(numbers.length == 20) {
    //     if(selectSpeed.selectedIndex == 0) {
    //         miliSeconds = 300
    //     }
    //     else if(selectSpeed.selectedIndex == 1) {
    //         miliSeconds = 150
    //     }
    //     else if(selectSpeed.selectedIndex == 2) {
    //         miliSeconds = 50
    //     }
    // }
    // else if(numbers.length == 50) {
    //     if(selectSpeed.selectedIndex == 0) {
    //         miliSeconds = 10
    //     }
    //     else if(selectSpeed.selectedIndex == 1) {
    //         miliSeconds = 80
    //     }
    //     else if(selectSpeed.selectedIndex == 2) {
    //         miliSeconds = 40
    //     }
    // }


    // console.log(Selected Speed: ${miliSeconds} milliseconds);

    // if (miliSeconds === slowSpeed) {
    //   console.log("Selected speed: Slow");
    // } else if (miliSeconds === mediumSpeed) {
    //   console.log("Selected speed: Medium");
    // } else if (miliSeconds === fastSpeed) {
    //   console.log("Selected speed: Fast");
    // }
});

// mouse follower
// let mouseFollower = document.querySelector(".mouseFollower")
// window.addEventListener('mousemove', (eventObj) => {
//     let xaxis = eventObj.clientX - Math.floor(mouseFollower.clientWidth / 2)
//     let yaxis = eventObj.clientY - Math.floor(mouseFollower.clientHeight / 2)
//     mouseFollower.style.transform = `translate(${xaxis}px, ${yaxis}px)`
//     // document.getElementsByTagName("body").style.cursor = "none"
// })