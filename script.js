//document.addEventListener('contextmenu', event => event.preventDefault());

const graph = document.getElementById('graph');
const nav = document.getElementById('graph');


function Selectionvid(){
    const nav = document.getElementById('Selection');
    const nav1 = document.getElementById('Bubble');
    const nav2 = document.getElementById('Insertion');
    const nav3 = document.getElementById('Merge');
    const nav4 = document.getElementById('Quick');
    nav.classList.add('active');
    nav1.classList.remove('active');
    nav2.classList.remove('active');
    nav3.classList.remove('active');
    nav4.classList.remove('active');

    const vid = document.getElementById('Selection_vid');
    document.getElementById("Selection_vid").controls = false;
    const vid1 = document.getElementById('Bubble_vid');
    const vid2 = document.getElementById('Insertion_vid');
    const vid3 = document.getElementById('Merge_vid');
    const vid4 = document.getElementById('Quick_vid');
    const vid5 = document.getElementById('hid');
    vid5.innerHTML = " ";
    vid5.classList.remove('center');
    vid5.classList.remove('fullwh');
    vid1.pause();
    vid1.currentTime = 0;
    vid2.pause();
    vid2.currentTime = 0;
    vid3.pause();
    vid3.currentTime = 0;
    vid4.pause();
    vid4.currentTime = 0;
    vid.classList.add('showvid');
    vid.classList.remove('hide');
    vid1.classList.remove('showvid');
    vid1.classList.add('hide');
    vid2.classList.remove('showvid');
    vid2.classList.add('hide');
    vid3.classList.remove('showvid');
    vid3.classList.add('hide');
    vid4.classList.remove('showvid');
    vid4.classList.add('hide');
    vid.play();
}
function Bubblevid(){
    const nav1 = document.getElementById('Selection');
    const nav = document.getElementById('Bubble');
    const nav2 = document.getElementById('Insertion');
    const nav3 = document.getElementById('Merge');
    const nav4 = document.getElementById('Quick');
    nav.classList.add('active');
    nav1.classList.remove('active');
    nav2.classList.remove('active');
    nav3.classList.remove('active');
    nav4.classList.remove('active');

    const vid = document.getElementById('Bubble_vid');
    document.getElementById("Bubble_vid").controls = false;
    const vid1 = document.getElementById('Selection_vid');
    const vid2 = document.getElementById('Insertion_vid');
    const vid3 = document.getElementById('Merge_vid');
    const vid4 = document.getElementById('Quick_vid');
    const vid5 = document.getElementById('hid');
    vid5.innerHTML = " ";
    vid5.classList.remove('center');
    vid5.classList.remove('fullwh');
    vid1.pause();
    vid1.currentTime = 0;
    vid2.pause();
    vid2.currentTime = 0;
    vid3.pause();
    vid3.currentTime = 0;
    vid4.pause();
    vid4.currentTime = 0;
    vid.classList.add('showvid');
    vid.classList.remove('hide');
    vid1.classList.remove('showvid');
    vid1.classList.add('hide');
    vid2.classList.remove('showvid');
    vid2.classList.add('hide');
    vid3.classList.remove('showvid');
    vid3.classList.add('hide');
    vid4.classList.remove('showvid');
    vid4.classList.add('hide');
    vid.play();
}
function Insertionvid(){
    const nav2 = document.getElementById('Selection');
    const nav1 = document.getElementById('Bubble');
    const nav = document.getElementById('Insertion');
    const nav3 = document.getElementById('Merge');
    const nav4 = document.getElementById('Quick');
    nav.classList.add('active');
    nav1.classList.remove('active');
    nav2.classList.remove('active');
    nav3.classList.remove('active');
    nav4.classList.remove('active');

    const vid = document.getElementById('Insertion_vid');
    document.getElementById("Insertion_vid").controls = false;
    const vid1 = document.getElementById('Selection_vid');
    const vid2 = document.getElementById('Bubble_vid');
    const vid3 = document.getElementById('Merge_vid');
    const vid4 = document.getElementById('Quick_vid');
    const vid5 = document.getElementById('hid');
    vid5.innerHTML = " ";
    vid5.classList.remove('center');
    vid5.classList.remove('fullwh');
    vid1.pause();
    vid1.currentTime = 0;
    vid2.pause();
    vid2.currentTime = 0;
    vid3.pause();
    vid3.currentTime = 0;
    vid4.pause();
    vid4.currentTime = 0;
    vid.classList.add('showvid');
    vid.classList.remove('hide');
    vid1.classList.remove('showvid');
    vid1.classList.add('hide');
    vid2.classList.remove('showvid');
    vid2.classList.add('hide');
    vid3.classList.remove('showvid');
    vid3.classList.add('hide');
    vid4.classList.remove('showvid');
    vid4.classList.add('hide');
    vid.play();
}
function Mergevid(){
    const nav3 = document.getElementById('Selection');
    const nav1 = document.getElementById('Bubble');
    const nav2 = document.getElementById('Insertion');
    const nav = document.getElementById('Merge');
    const nav4 = document.getElementById('Quick');
    nav.classList.add('active');
    nav1.classList.remove('active');
    nav2.classList.remove('active');
    nav3.classList.remove('active');
    nav4.classList.remove('active');

    const vid = document.getElementById('Merge_vid');
    document.getElementById("Merge_vid").controls = false;
    const vid1 = document.getElementById('Selection_vid');
    const vid2 = document.getElementById('Bubble_vid');
    const vid3 = document.getElementById('Insertion_vid');
    const vid4 = document.getElementById('Quick_vid');
    const vid5 = document.getElementById('hid');
    vid5.innerHTML = " ";
    vid5.classList.remove('center');
    vid5.classList.remove('fullwh');
    vid1.pause();
    vid1.currentTime = 0;
    vid2.pause();
    vid2.currentTime = 0;
    vid3.pause();
    vid3.currentTime = 0;
    vid4.pause();
    vid4.currentTime = 0;
    vid.classList.add('showvid');
    vid.classList.remove('hide');
    vid1.classList.remove('showvid');
    vid1.classList.add('hide');
    vid2.classList.remove('showvid');
    vid2.classList.add('hide');
    vid3.classList.remove('showvid');
    vid3.classList.add('hide');
    vid4.classList.remove('showvid');
    vid4.classList.add('hide');
    vid.play();
}
function Quickvid(){
    const nav4 = document.getElementById('Selection');
    const nav1 = document.getElementById('Bubble');
    const nav2 = document.getElementById('Insertion');
    const nav3 = document.getElementById('Merge');
    const nav = document.getElementById('Quick');
    nav.classList.add('active');
    nav1.classList.remove('active');
    nav2.classList.remove('active');
    nav3.classList.remove('active');
    nav4.classList.remove('active');

    const vid = document.getElementById('Quick_vid');
    document.getElementById("Quick_vid").controls = false;
    const vid1 = document.getElementById('Selection_vid');
    const vid2 = document.getElementById('Bubble_vid');
    const vid3 = document.getElementById('Insertion_vid');
    const vid4 = document.getElementById('Merge_vid');
    const vid5 = document.getElementById('hid');
    vid5.innerHTML = " ";
    vid5.classList.remove('center');
    vid5.classList.remove('fullwh');
    vid1.pause();
    vid1.currentTime = 0;
    vid2.pause();
    vid2.currentTime = 0;
    vid3.pause();
    vid3.currentTime = 0;
    vid4.pause();
    vid4.currentTime = 0;
    vid.classList.add('showvid');
    vid.classList.remove('hide');
    vid1.classList.remove('showvid');
    vid1.classList.add('hide');
    vid2.classList.remove('showvid');
    vid2.classList.add('hide');
    vid3.classList.remove('showvid');
    vid3.classList.add('hide');
    vid4.classList.remove('showvid');
    vid4.classList.add('hide');
    vid.play();
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
