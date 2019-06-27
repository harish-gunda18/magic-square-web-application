//function to generate the square with input boxes
function generate_table() {
  
  var x = parseInt(document.getElementById("matrixInputValue").value);
  var tbl = document.getElementById('tableID');
  if(tbl) { tbl.parentNode.removeChild(tbl); }
  var cbutton = document.getElementById('checkbutton');
  if(cbutton) { cbutton.parentNode.removeChild(cbutton); }
  var p = document.getElementById("output");
  if(p) { p.parentNode.removeChild(p); }
  //checking non empty and non zero condition for dimension of the matrix
  if (!x || x<0) {
    console.log('error');
    alert("please enter a valid dimension");
  //limiting the dimension of matrix to 5
  }else if(x>5){
    alert("please limit the dimension to less than 5")
  }else {
  // get the reference for the body
  var body = document.getElementsByTagName("body")[0];

  // creates a <table> element and a <tbody> element
  var tbl = document.createElement("table");
  tbl.setAttribute("id", "tableID");
  var tblBody = document.createElement("tbody");
  
  var count = 0;
    
  // creating all cells
  for (var i = 0; i < x; i++) {
    // creates a table row
    var row = document.createElement("tr");

    for (var j = 0; j < x; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      var cell = document.createElement("td");
      var cellInput = document.createElement("input");
      cellInput.setAttribute('type', 'number');
      cellInput.setAttribute('id', count);
      count++;
      cell.appendChild(cellInput);
      row.appendChild(cell);
    }

    // add the row to the end of the table body
    tblBody.appendChild(row);
  }

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  body.appendChild(tbl);
  // sets the border attribute of tbl to 2;
  tbl.setAttribute("border", "2");
  var but=document.createElement("button");
  but.setAttribute("onclick","check_logic()");
  but.setAttribute("id","checkbutton");
  but.innerHTML = "check";
  document.getElementsByTagName("html")[0].appendChild(but);
  var p=document.createElement("p");
  p.setAttribute("id","output")
  document.getElementsByTagName("html")[0].appendChild(p);
}
}

//function to check if the table forms a magic square with the input values
function check_logic(){
  //variable declaration
  var x = parseInt(document.getElementById("matrixInputValue").value);
  var lst=[];
  var count=0;
  var rcount=0;
  var ccount;
  var dcount=0;
  var csum;
  var dsum=0;
  var rsum;
  var checknan;
  //collecting all sums into list "lst"
  for (var i = 0; i < x; i++){
    ccount=i;
    csum=0;
    rsum=0;
    for (var j = 0; j < x; j++){
      checknan=parseInt(document.getElementById(count).value)
      if(isNaN(checknan)){
        break;
      }
      rsum+=parseInt(document.getElementById(rcount).value);
      rcount+=1;
      csum+=parseInt(document.getElementById(ccount).value);
      ccount+=x;
      count+=1
      if(i==j){
        dsum+=parseInt(document.getElementById(dcount).value);
        dcount+=(x+1);
      }
      if(isNaN(checknan)){
        break;
      }
    }
    lst.push(rsum);
    lst.push(csum);
  }
  lst.push(dsum);
  //checking for any empty values in the square
  if(isNaN(checknan)){
    alert("plese fill all the boxes with integers")
  } else{
    //calling fucntion to check magic or not magic
    mgornmg(lst,x)
  }
 }

//mini function to compare all the values of list
function mgornmg(lst,x){
  var check=lst[0];
  var count=0;
  for (var i=1;i<(2*x+1);i++){
    if(check!=lst[i]){
      count+=1;
    }
  }
  if(count==0){
    document.getElementById("output").innerHTML="True"
    alert("it is a magic square")
  }else{
    document.getElementById("output").innerHTML="False"
    alert("it is not a magic square")
  }
}
