"use strict";
exports.__esModule = true;
var VendingMachine = /** @class */ (function () {
    function VendingMachine(drinkName, quantityOfDrink, noOfCupsRequired, costOfOneCup) {
        this.concentrationRequired = ['light', "medium", "strong"];
        this.drinkName = drinkName;
        this.quantityOfDrink = quantityOfDrink;
        this.noOfCupsRequired = noOfCupsRequired;
        this.costOfOneCup = costOfOneCup;
    }
    VendingMachine.prototype.getDrinkName = function () {
        return this.drinkName;
    };
    VendingMachine.prototype.getQuantityOfDrink = function () {
        return this.quantityOfDrink;
    };
    VendingMachine.prototype.getNoOfCupsRequired = function () {
        return this.noOfCupsRequired;
    };
    VendingMachine.prototype.getCostOfOneCup = function () {
        return this.costOfOneCup;
    };
    VendingMachine.prototype.getConcentrationRequired = function () {
        return this.concentrationRequired;
    };
    VendingMachine.prototype.setDrinkName = function (drinkName) {
        this.drinkName = drinkName;
    };
    VendingMachine.prototype.setQuantityOfDrink = function (quantityOfDrink) {
        this.quantityOfDrink = quantityOfDrink;
    };
    VendingMachine.prototype.setNoOfCupsRequired = function (noOfCupsRequired) {
        this.noOfCupsRequired = noOfCupsRequired;
    };
    VendingMachine.prototype.setCostOfOneCup = function (costOfOneCup) {
        this.costOfOneCup = costOfOneCup;
    };
    VendingMachine.prototype.findBill = function () {
        var discount = (this.noOfCupsRequired * this.costOfOneCup) / 10;
        var cost = (this.noOfCupsRequired * this.costOfOneCup) - discount;
        return cost;
    };
    return VendingMachine;
}());
exports.VendingMachine = VendingMachine;
