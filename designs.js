/**@param gActivateOne - JS variable for the sizePicker 
 * 
*/

var gActivateOne = document.getElementById("sizePicker")

/**@event - Submission of the grid specifications 
 * 
*/
gActivateOne.addEventListener("submit", function(e){
  e.preventDefault();makeGrid();
});

/**@description - function used to create the re-useable grid.
 * @param iHeight - JS variable for inputHeight element.
 * @param iWidth - JS variable for inputWidth element
 * @param gTable  - JS variable for tableBody element
 * @param bColor - Js variable for colorPicker
 * @returns a clickable & color-able grid per the user's specifications
 *
 * */

function makeGrid() { 
var iHeight = document.getElementById("inputHeight");
var iWidth = document.getElementById("inputWidth");
var gTable = document.getElementById("tableBody");
var bColor = document.getElementById('colorPicker')
gTable.innerHTML = " ";
for ( let i = 0;  i < iHeight.value ; i++) {
      let newRow = document.createElement('tr');
      gTable.appendChild(newRow)
      for (let j = 0; j < iWidth.value; j++){
        let newCell = document.createElement('td');
         newRow.appendChild(newCell)
         newCell.addEventListener("click", function(){
           newCell.style.backgroundColor = bColor.value;
         })
        } 
}
};