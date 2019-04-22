import { VendingMachine } from "./VendingMachine";

export class TuckShop{
    private machineName : string;
    private machineId : number;
    private powerType : string;
    private vendingMachine : VendingMachine;

    constructor(machineName? : string,machineId? :number,powerType?:string,vendingMachine? : VendingMachine){
        this.machineName = machineName;
        this.machineId = machineId;
        if(powerType == "b" || powerType == "e"){
            this.powerType = powerType;
        }else{
            console.log("please enter valid machine type")
        }
        this.vendingMachine = vendingMachine;        
    }

    public getMachineName() : string{
        return this.machineName;
    }

    public getMachineId() : number{
        return this.machineId;
    }

    public getPowerType() : string{
        return this.powerType;
    }

    public getVendingMachine() : VendingMachine{
        return this.vendingMachine;
    }


    public setMachineName(machineName : string){
        this.machineName = machineName;
    }

    public setMachineId(machineId : number){
        this.machineId = machineId;
    }

    public setPowerType(powerType : string){
        this.powerType = powerType;
    }

    public setVendingMachine(vendingMachine : VendingMachine){
        this.vendingMachine = vendingMachine;
    }
}