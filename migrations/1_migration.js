const TodolistContract = artifacts.require("Todolist");

module.exports = function(deployer){
    deployer.deploy(TodolistContract);
}