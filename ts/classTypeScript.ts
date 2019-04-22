class Chair{
    chairID : number;
    chairCompany :string;
    numberWheels :number;
    isMovable :boolean;
    purpose:string[];

    constructor(chairID:number,chairCompany:string,numberWheels:number,isMovable:boolean,purpose:string[]){
        this.chairID=chairID;
        this.chairCompany=chairCompany;
        this.isMovable=isMovable
        this.numberWheels=numberWheels;
        this.purpose=purpose;
    }
    
}