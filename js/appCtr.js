/*
* Author: Thomas canham
* Assignment: WE4Mobile Web Applications, Digital Skills Academy
* Date : 2016/06/27
* Ref: http://www.w3schools.com/angular/angular_controllers.asp
*/
var app = angular.module("toDo", []); //Create module function with a name and no parameters

/*Create a controller and concatenate to module*/
app.controller("toDoList", ["$scope", function($scope) {
	
		/*Create array to hold list items*/
		$scope.listItems = [];
    
		/* Function to add items to listItems array*/
		$scope.addItem = function () {
			if($scope.input){// Check for a $scope.input value
			$scope.listItems.push({todo_item:$scope.input});// Add value from $scope.input to array $scope.listitems
			$scope.input = '';// Reset input text box to empty value
			$scope.Msg = '';// Clear value of msg variable
			}else{
				$scope.Msg = 'No To Do Item Entered';
			};
		};
		/* Function to remove items from listItems array*/
		$scope.remove = function(index) {
			$scope.listItems.splice(index, 1)// Remove 'this' value from an array
		};
		
		 /*Function to load a saved list into scope from local storage*/
		$scope.loadList = function () {
                    var retrievedData = localStorage.getItem("list");// Get the 'list' from local storage
                    var listData = JSON.parse(retrievedData);// Parse the string returned from local storage into an array
                    $scope.listItems = listData;// Assign the array listData to listItems
                    $scope.Msg = ' ';
		};
		/*Function to save the array '$scope.listItems' to local storage*/
		$scope.saveList = function () {
                    localStorage.setItem("list", JSON.stringify($scope.listItems));// Convert the array $scope.listitems to string and save to local storage
                    $scope.Msg = 'List saved ';
		};
                    /*Function to check for a saved list*/
		$scope.checkList = function () { //As above comments
                    var retrievedData = localStorage.getItem("list");
                    var listData = JSON.parse(retrievedData);
                    if(listData.length!=0){
                        $scope.Msg = "You have a saved list";
                    }else{
                        $scope.Msg = "No saved list found"
                    };
		};
}]);
