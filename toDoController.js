"use strict"

    function sampleToDo() {
        let vm = this;

        this.task1 = {
            task: "make dinner",
            completed: false,
            id: "1"
        }

        this.task2 = {
            task: "go for a run",
            completed: true, 
            id: "2"
        }

        this.task3 = {
            task: "bake a cake",
            completed: true,
            id: "3"
        }

        this.task4 = {
            task: "get the mail",
            completed: false,
            id:"4"
        }
        
        vm.toDoList = [this.task1, this.task2, this.task3, this.task4];
                // return toDoList;  if necessary just return the varible name of the funciton not the samepleToDo()
    }



{
angular
.module("app")
.controller("sampleToDo", sampleToDo);
};