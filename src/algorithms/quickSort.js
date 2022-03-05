export default function quickSort(array, arrayBars) {
    let swaps = []
    let stack = [];
    stack.push(0);
    stack.push(array.length - 1);
    while(stack[stack.length - 1] >= 0){
    	let end = stack.pop();
        let start = stack.pop();
        let { pivotIndex, animations} = partition(array, start, end);
        swaps = swaps.concat(animations)
        if (pivotIndex - 1 > start){
        	stack.push(start);
            stack.push(pivotIndex - 1);
		}
        if (pivotIndex + 1 < end){
        	stack.push(pivotIndex + 1);
            stack.push(end);
        }
    }
    animateQuickSort(arrayBars, swaps)
}

function partition(array, start, end) {
    let animations = []
    const pivotValue = array[end]
    let pivotIndex = start
    for (let i = start; i < end; i++) {
        if (array[i] < pivotValue) {
            animations.push([i, pivotIndex])
            let temp = array[i]
            array[i] = array[pivotIndex] 
            array[pivotIndex] = temp
            pivotIndex++
        }
    }
    animations.push([pivotIndex, end])
    let temp = array[pivotIndex]
    array[pivotIndex] = array[end]
    array[end] = temp
    return { pivotIndex, animations };
}

function animateQuickSort(arrayBars, animations) {
    for (let i = 0; i < animations.length; i++) {
        setTimeout(() => {
            const [barOne, barTwo] = animations[i]
            let temp = arrayBars[barOne].style.height
            arrayBars[barOne].style.height = arrayBars[barTwo].style.height 
            arrayBars[barTwo].style.height = temp
            arrayBars[barOne].className = "w-1 inline-block mt-0 mr-1 bg-green-800";
            arrayBars[barTwo].className = "w-1 inline-block mt-0 mr-1 bg-green-800";
        }, i * 30)
    }
}