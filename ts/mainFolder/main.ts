import { TuckShop } from "../tuckshop/tuckShop";
import { VendingMachine } from "../vending/vendingMachine";

function main(){
    let t :TuckShop[] = [];

    t.push(new TuckShop("T1",1,"b",new VendingMachine("Coco-cola",1,2,15)))
    t.push(new TuckShop("T2",2,"e",new VendingMachine("Pepsi",2,2,15)))
    t.push(new TuckShop("T3",3,"b",new VendingMachine("Maza",3,1,20)))
    t.push(new TuckShop("T4",4,"e",new VendingMachine("ButterMilk",2,1,12)))
    let vendingMachine : VendingMachine =new VendingMachine("ThumsUp",4,2,30)
    t.push(new TuckShop("T5",5,"b",vendingMachine))

    //Displaying details of TuckShop array


    console.table(t)

    t.forEach((e) => {
        console.log(`Machine Name = ${e.getMachineName()} MachineId = ${e.getMachineId()} PowerType = ${e.getPowerType()}`)
    })

    // Searching 
    function findElement(drinkName :string) : TuckShop[]{
         return t.filter((e) => e.getVendingMachine().getDrinkName() === drinkName)
    } 

    let element = findElement("Pepsi");
    if(element){
        console.log(element[0])
        console.log(element[0].getVendingMachine().findBill())
    }



    // sorting based of machine name
    t.sort((t1:TuckShop,t2:TuckShop) => {
        if(t1.getMachineName() < t2.getMachineName()){
            return 1;
        }
    })
    console.table(t)

    // sorting based on cost of one cup in vending machine.
    t.sort((t1:TuckShop,t2:TuckShop) => t1.getVendingMachine().getCostOfOneCup()-t2.getVendingMachine().getCostOfOneCup())
    console.table(t)


    //searching based on costofonecup
    function findElementBasedOnCost(costofonecup :number) : TuckShop[]{
        return t.filter((e) => e.getVendingMachine().getCostOfOneCup() === costofonecup)
   } 

   element = findElementBasedOnCost(12);
   if(element){
       console.log(element[0])
       console.log(element[0].getVendingMachine().findBill())
   }
}


main();