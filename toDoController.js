"use strict"

    function SampleToDo() {
        const vm = this;

        let task1 = {
            task: "make dinner",
            completed: false
        }

        let task2 = {
            task: "go for a run",
            completed: true 
        }

        let task3 = {
            task: "bake a cake",
            completed: true
        }

        let task4 = {
            task: "get the mail",
            completed: false
        }

        vm.toDoList = ["task1", "task2", "task3", "task4"];
    }

// ngRepeat must be used

{
angular
.module("app")
.controller("SampleToDo", SampleToDo);
};