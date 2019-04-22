"use strict";
exports.__esModule = true;
var TuckShop = /** @class */ (function () {
    function TuckShop(machineName, machineId, powerType, vendingMachine) {
        this.machineName = machineName;
        this.machineId = machineId;
        if (powerType == "b" || powerType == "e") {
            this.powerType = powerType;
        }
        else {
            console.log("please enter valid machine type");
        }
        this.vendingMachine = vendingMachine;
    }
    TuckShop.prototype.getMachineName = function () {
        return this.machineName;
    };
    TuckShop.prototype.getMachineId = function () {
        return this.machineId;
    };
    TuckShop.prototype.getPowerType = function () {
        return this.powerType;
    };
    TuckShop.prototype.getVendingMachine = function () {
        return this.vendingMachine;
    };
    TuckShop.prototype.setMachineName = function (machineName) {
        this.machineName = machineName;
    };
    TuckShop.prototype.setMachineId = function (machineId) {
        this.machineId = machineId;
    };
    TuckShop.prototype.setPowerType = function (powerType) {
        this.powerType = powerType;
    };
    TuckShop.prototype.setVendingMachine = function (vendingMachine) {
        this.vendingMachine = vendingMachine;
    };
    return TuckShop;
}());
exports.TuckShop = TuckShop;
