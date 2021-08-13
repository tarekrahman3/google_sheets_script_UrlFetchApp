/** @OnlyCurrentDoc */

function prompt() {
  var i = SpreadsheetApp.getUi().prompt("Please enter rows amount").getResponseText();
  return i
}
function InsertTwoBelow() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getActiveSheet().getRange(
              spreadsheet.getCurrentCell().getRow(),spreadsheet.getActiveSheet().getMaxColumns()).activate();
  spreadsheet.setCurrentCell(spreadsheet.getCurrentCell());
  spreadsheet.getActiveSheet().insertRowsAfter(spreadsheet.getActiveRange().getLastRow(), prompt());
};
