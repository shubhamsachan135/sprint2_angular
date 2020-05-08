export class WalletTransaction {
    accountBalance:number;
    amount:number;
    dateOfTransaction:Date;
    description:String;
    transactionId:number;
    constructor(){}

public getAmount(){
    return this.amount;
}    

public getDescription(){
    return this.description;
} 

public getAccountBalance(){
    return this.accountBalance;
} 


}
