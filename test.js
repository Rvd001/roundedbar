function initializeViz(){
    var vizDiv = document.getElementById("tableauViz");
 
    //var vizUrl = "https://public.tableau.com/views/testingdashboardVersion2_16069950242490/Dashboard1?:language=en&:display_count=y&publish=yes&:origin=viz_share_link"
    var vizUrl = 'https://public.tableau.com/views/RoundedBarchart_16073912149450/RoundedBars'
    var vizOptions = {};

    viz = new tableauSoftware.Viz(vizDiv, vizUrl, vizOptions);    

  };

// function vizFilter(filterName,filterValue,filterType){
//   //getActiveSheet() can be a dashboard or a worksheet
//   sheet=viz.getWorkbook().getActiveSheet();


// if(sheet.getSheetType() === 'worksheet'){
// sheet.applyFilterAsync(filterName,filterValue,filterType);
// }
// else{

// worksheetArray = sheet.getWorksheets();
// for(var i =0; i < worksheetArray.length; i++)
// {
// worksheetArray[i].applyFilterAsync(filterName,filterValue,filterType);
// console.log(worksheetArray)
// }
// }
// };


