/* code for pixe art maker. */

// function to make a dynamic grid by entering values for Height and Width.
function grid() {
    let table = document.getElementById('gridTable');
    let row = document.querySelector('#inputHeight').value;
    let column = document.querySelector('#inputWidth').value;
    let elem = "";
    // this line to empty the table every time we click "Submit".
    table.innerHTML = "";
    //for loop to loop over every table elements and make the table tr and ts list.
    for (i = 1; i <= row; i++) {
        elem += "<tr>";
        for (j = 1; j <= column; j++) {
            elem += '<td></td>';
        }
        elem += '</r>';
    }
    table.innerHTML = elem;
    // func. that we will define later to connect the table with click event 
    listener();
}


function listener() {
    let tdList = document.getElementsByTagName('td');
    for (i = 0; i < tdList.length; i++) {
        // every click will color the cell.
        tdList[i].addEventListener('click', function(para) {
            para.target.style.backgroundColor = document.querySelector('#colorPicker').value;
        });
        // every double click will remove the color.
        tdList[i].addEventListener("dblclick", function(event) {
            event.target.style.backgroundColor = '';
        });

    }
}