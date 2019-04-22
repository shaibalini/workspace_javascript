export class VendingMachine{
    private drinkName : string;
    private quantityOfDrink : number;
    private noOfCupsRequired : number;
    private costOfOneCup : number;
    private concentrationRequired : string[] = ['light',"medium","strong"];

    constructor(drinkName? : string, quantityOfDrink? : number, noOfCupsRequired? :number, costOfOneCup? : number){
        this.drinkName = drinkName;
        this.quantityOfDrink = quantityOfDrink;
        this.noOfCupsRequired = noOfCupsRequired;
        this.costOfOneCup = costOfOneCup;
    }

    public getDrinkName() : string{
        return this.drinkName;
    }

    public getQuantityOfDrink() : number{
        return this.quantityOfDrink;
    }

    public getNoOfCupsRequired() :number{
        return this.noOfCupsRequired;
    }    

    public getCostOfOneCup() : number{
        return this.costOfOneCup;
    }

    public getConcentrationRequired() : string[]{
        return this.concentrationRequired;
    }

    public setDrinkName(drinkName : string) : void{
        this.drinkName = drinkName;
    }   

    public setQuantityOfDrink(quantityOfDrink : number): void{
        this.quantityOfDrink = quantityOfDrink;
    }

    public setNoOfCupsRequired(noOfCupsRequired : number):void{
        this.noOfCupsRequired = noOfCupsRequired;
    }

    public setCostOfOneCup(costOfOneCup : number) : void{
        this.costOfOneCup = costOfOneCup;
    }

    public findBill() :number{
        let discount : number = (this.noOfCupsRequired * this.costOfOneCup)/10;
        let cost : number = (this.noOfCupsRequired * this.costOfOneCup)-discount;
        return cost;
    }
} 