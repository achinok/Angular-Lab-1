"use strict"
// app.controller('sampleToDo', function ($scope) {
    function sampleToDo() {
    let vm = this;
    vm.fish = [
        this.task1 = {
            task: "make dinner",
            completed: "false",
        },
        this.task2 = {
            task: "go for a run",
            completed: "false",
        },
        this.task3 = {
            task: "bake a cake",
            completed: "false",
        },
        this.task4 = {
            task: "get the mail",
            completed: "false",
        },
    ]; 
        vm.toggleSelect = (fish) => {
            fish.completed = !fish.completed;
        },

        // $scope.add = function () {
        //     $scope.fish.push($scope.input);
        //     $scope.input = '';
        // },

        // $scope.remove = function (index) {
        //     $scope.fish.splice(index, 1);
        // },
        
vm.toDoList = [this.task1, this.task2, this.task3, this.task4];
                // return toDoList;  if necessary just return the varible name of the funciton not the samepleToDo()
                
};

{
    angular
        .module("app")
        .controller("sampleToDo", sampleToDo);
};