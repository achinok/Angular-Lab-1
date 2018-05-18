"use strict"

    function sampleToDo() {
        let vm = this;

        this.task1 = {
            task: "1. make dinner",
            completed: false
        }

        this.task2 = {
            task: "2. go for a run",
            completed: true 
        }

        this.task3 = {
            task: "3. bake a cake",
            completed: true
        }

        this.task4 = {
            task: "4. get the mail",
            completed: false
        }
        
        vm.toDoList = [this.task1, this.task2, this.task3, this.task4];
                // return toDoList;  if necessary just return the varible name of the funciton not the samepleToDo()
    }



{
angular
.module("app")
.controller("sampleToDo", sampleToDo);
};