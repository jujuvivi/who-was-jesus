
var _clrJewishWar = "#dcdcdd";
var _trCurrOver = null;
var _tdFirstCurrOver = null;
var _iCurrCol = -1;
var _arFadeRow = [
	null // Lord
	,null // Jesus
	,null // Christ
	,null // Savior
	,null // Son
	,null // Logos (5)
	,[1,2,3,4,5] // Died (6) (Removed Ignatius)
	,[1,2,3,5,6,9,13,18,19,20,22,23,24,25,31,34,42,47,50,51,58,60,61] // Resurect (7)
	//,new Array(1,2,3,5,6,8,14,15,16,17,24,27,29,33,38,43,46,47,54,56,57) // Resurect (7)
	,['2'] // Eucharist (8) // col 25 is Ignatius
	,[2,3,4,5,18,25,63] // Crucifixion (9)
	,[3,6,9,13,19,25,31,52] // Suffered (10)
	,['14'] // Ascended (11)
];
var _colBookCells = null;
var _colRows = null;

// Handler Event onload on Body
function loadPage()
{
	//_colBookCells = document.getElementById('BookRow').cells;
	_colRows = document.getElementById('tbodyMain').rows;
	_colHeadRows = document.getElementById('theadEvolution').rows;
}

// Handler Event onmouseover
function overRow(evt, trOver)
{
	if (trOver != _trCurrOver)
	{
		// Remove previous Row Over
		if (_trCurrOver != null)
			updateRow('','','');
		
		if ( trOver.id == 'BookRow')
			_trCurrOver = null;
		else
		{
			_trCurrOver = trOver;
			
			// Add new row Over
			_tdFirstCurrOver = _trCurrOver.firstChild; 
			while(_tdFirstCurrOver.tagName != "TD") {
				_tdFirstCurrOver = _tdFirstCurrOver.nextElementSibling;
			}
			
			updateRow('gray','white','yellow','yellow');
		}
	}

	// Look if the Column has changed
	var tdSource = (evt.srcElement ? evt.srcElement : evt.target); // FF & IE propriatory
	if (tdSource.tagName == 'TD' )
	{
		// change color of all td of the column
		var iCell = tdSource.cellIndex;
		if ( (iCell != 0) && (iCell != _iCurrCol) )
		{
			updateCol('gray','white','yellow',iCell);
			_iCurrCol = iCell;
		}
		// Change title too
	}
}

// Handler Event onmouseout
function outRow(trOut)
{
	if (_trCurrOver == trOut)
	{
		updateRow('','','',"#dadaff");
		_trCurrOver = null;
	}
	
	if (_iCurrCol != -1)
	{
		updateCol('','',(_iCurrCol == 10)||(_iCurrCol == 38) ? _clrJewishWar : '',_iCurrCol);
		_iCurrCol = -1;
	}
}

//var _aTimeColspan = [1,12,17,25,40,50,57]; // Where colspan=2 in time row
function updateCol(sHeadBgColor,sHeadColor,sBgColor,iCol)
{
	//alert('updateCol');
	var bPutBack = (sBgColor.length == 0);
	var sBgCol;
	for(var iRow=0; iRow < _colRows.length; iRow++)
	{
		var tdCol = _colRows[iRow].cells[iCol];
		if ( tdCol.style.backgroundColor != 'white' )
		{
			sBgCol = sBgColor;
			if ( bPutBack && (iRow > 5) && (iRow < 12) )
			{
				// Look if the cell is in the list of fade cells
				// var arFadeCells = _arFadeRow[iRow];
				// for(var iCell = 0; iCell < arFadeCells.length; iCell++)
				// {
				// 	if (iCol == arFadeCells[iCell])
				// 		sBgCol = "#dadaff";
				// 	else if (iCol < arFadeCells[iCell])
				// 		break;
				// }
			}
			tdCol.style.backgroundColor = sBgCol;
		}
	}
	// Row 0 is title
	for(iRow = 1; iRow < _colHeadRows.length; iRow++) {
		// row 1 is Time
		let colIndex = iCol,
			cells = _colHeadRows[iRow].cells;
		if (iRow == 1) {
			for(let i=0; i < colIndex; i++) {
				if (Number(cells[i].colSpan) > 1) colIndex--;
			}
		}
		var tdCol = cells[colIndex];
		if (tdCol) {
			tdCol.style.backgroundColor = sBgColor;
		}
	}
	//if (_colBookCells)
	//{
		//var styleBook = _colBookCells[iCol].style;
		//styleBook.backgroundColor = sBgColor; //sHeadBgColor;
		//styleBook.color = sHeadColor;
	//}
}

function updateRow(sHeadBgColor,sHeadColor,sBgColor,sFadeBgColor)
{
	// This is so slow in IE here. Incroable!
	// Update row
	_trCurrOver.style.backgroundColor = sBgColor;
	var style = _tdFirstCurrOver.style;
	style.backgroundColor = sBgColor; //sHeadBgColor;
	//style.color = sHeadColor;
	//return;
	
	// update specific Fade Color cells
	// Update column
	// var iRowIndex = _trCurrOver.sectionRowIndex;
	// if (iRowIndex < _arFadeRow.length)
	// {
	// 	var arFadeCells = _arFadeRow[iRowIndex];
	// 	if (arFadeCells != null)
	// 	{
	// 		var oCells = _trCurrOver.cells;
	// 		//alert('arFadeCells.length=' + arFadeCells.length);
	// 		for(var iCell = 0; iCell < arFadeCells.length; iCell++)
	// 			oCells[arFadeCells[iCell]].style.backgroundColor = sFadeBgColor;
	// 	}
	// }
}


