document.addEventListener('contextmenu', event => event.preventDefault());

const graph = document.getElementById('graph');


function play(id){
    graph.innerHTML = "<video src='./vid/"+id+" Sort.mp4' id='vid' preload></video>";
    const vid = document.getElementById('vid');
    vid.play();
    setTimeout(() => {
        vid.pause();
    }, 60000);
}

function content(id){
    const cont = document.getElementById('box');
    console.log(id);
    if(cont.classList.contains('show')){
        cont.classList.remove('show');
    }
    else{
        cont.classList.add('show');
    }
    setTimeout(()=>{
    cont.classList.add('show');
    },1000)
    setTimeout(() => {
        if(id == "Bubble"){
            cont.innerHTML = "<b>Bubble Sort</b><br> <br> <p style='text-align:justify'>Bubble sort is a simple sorting algorithm. This sorting algorithm is comparison-based algorithm in which each pair of adjacent elements is compared and the elements are swapped if they are not in order. This algorithm is not suitable for large data sets as its average and worst case complexity are of Ο(n2) where n is the number of items.</p>";
        }
        if(id == "Selection"){
            cont.innerHTML = "<b>Selection Sort</b> <br><br> <p style='text-align:justify'>Selection sort is a simple sorting algorithm. This sorting algorithm is an in-place comparison-based algorithm in which the list is divided into two parts, the sorted part at the left end and the unsorted part at the right end.<br>Initially, the sorted part is empty and the unsorted part is the entire list. <br>The smallest element is selected from the unsorted array and swapped with the leftmost element, and that element becomes a part of the sorted array. <br>This process continues moving unsorted array boundary by one element to the right. <br>This algorithm is not suitable for large data sets as its average and worst case complexities are of Ο(n2), where n is the number of items.<p>";
        }
        if(id == "Insertion"){
            cont.innerHTML = "<b>Insertion Sort</b> <br><br> <p style='text-align:justify'>This is an in-place comparison-based sorting algorithm. Here, a sub-list is maintained which is always sorted. For example, the lower part of an array is maintained to be sorted. An element which is to be 'insert'ed in this sorted sub-list, has to find its appropriate place and then it has to be inserted there. Hence the name, insertion sort.<br><br>The array is searched sequentially and unsorted items are moved and inserted into the sorted sub-list (in the same array). This algorithm is not suitable for large data sets as its average and worst case complexity are of Ο(n2), where n is the number of items.</p>";
        }
        if(id == "Merge"){
            cont.innerHTML = "<b>Merge Sort</b> <br><br> <p style='text-align:justify'>Merge sort is a sorting technique based on divide and conquer technique. With worst-case time complexity being Ο(n log n), it is one of the most respected algorithms.<br><br>Merge sort first divides the array into equal halves and then combines them in a sorted manner.</p>";
        }
        if(id == "Quick"){
            cont.innerHTML = "<b>Quick Sort</b> <br><br> <p style='text-align:justify'>Quick sort is a highly efficient sorting algorithm and is based on partitioning of array of data into smaller arrays. A large array is partitioned into two arrays one of which holds values smaller than the specified value, say pivot, based on which the partition is made and another array holds values greater than the pivot value.<br><br>Quicksort partitions an array and then calls itself recursively twice to sort the two resulting subarrays. This algorithm is quite efficient for large-sized data sets as its average and worst-case complexity are O(nLogn) and image.png(n2), respectively.</p>";
        }
    }, 500);
}