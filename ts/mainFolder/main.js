"use strict";
exports.__esModule = true;
var tuckShop_1 = require("../tuckshop/tuckShop");
var vendingMachine_1 = require("../vending/vendingMachine");
function main() {
    var t = [];
    t.push(new tuckShop_1.TuckShop("T1", 1, "b", new vendingMachine_1.VendingMachine("Coco-cola", 1, 2, 15)));
    t.push(new tuckShop_1.TuckShop("T2", 2, "e", new vendingMachine_1.VendingMachine("Pepsi", 2, 2, 15)));
    t.push(new tuckShop_1.TuckShop("T3", 3, "b", new vendingMachine_1.VendingMachine("Maza", 3, 1, 20)));
    t.push(new tuckShop_1.TuckShop("T4", 4, "e", new vendingMachine_1.VendingMachine("ButterMilk", 2, 1, 12)));
    var vendingMachine = new vendingMachine_1.VendingMachine("ThumsUp", 4, 2, 30);
    t.push(new tuckShop_1.TuckShop("T5", 5, "b", vendingMachine));
    //Displaying details of TuckShop array
    console.table(t);
    t.forEach(function (e) {
        console.log("Machine Name = " + e.getMachineName() + " MachineId = " + e.getMachineId() + " PowerType = " + e.getPowerType());
    });
    // Searching 
    function findElement(drinkName) {
        return t.filter(function (e) { return e.getVendingMachine().getDrinkName() === drinkName; });
    }
    var element = findElement("Pepsi");
    if (element) {
        console.log(element[0]);
        console.log(element[0].getVendingMachine().findBill());
    }
    // sorting based of machine name
    t.sort(function (t1, t2) {
        if (t1.getMachineName() < t2.getMachineName()) {
            return 1;
        }
    });
    console.table(t);
    // sorting based on cost of one cup in vending machine.
    t.sort(function (t1, t2) { return t1.getVendingMachine().getCostOfOneCup() - t2.getVendingMachine().getCostOfOneCup(); });
    console.table(t);
    //searching based on costofonecup
    function findElementBasedOnCost(costofonecup) {
        return t.filter(function (e) { return e.getVendingMachine().getCostOfOneCup() === costofonecup; });
    }
    element = findElementBasedOnCost(12);
    if (element) {
        console.log(element[0]);
        console.log(element[0].getVendingMachine().findBill());
    }
}
main();
