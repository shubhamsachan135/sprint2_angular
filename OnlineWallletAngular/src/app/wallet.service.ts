import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient}   from '@angular/common/http';
import {ActivatedRoute,Router} from '@angular/router';
import { WalletTransaction } from './wallet-transaction';
@Injectable({
  providedIn: 'root'
})
export class WalletService {
  userName="Shubham Sachan";
  userId="shubham135@gmail.com";
  walletTransaction:any;
  constructor(private _http:HttpClient,private _router:Router) { }

  addMoney(userId:String,amount:number){
    console.log({userId});
    console.log({amount});

    this._http.get(`http://localhost:8888/add-withdraw-micro-service/wallet/add/${userId}/${amount}`)
    .subscribe(data=>{console.log(data)
           this.walletTransaction=data;
     console.log(this.walletTransaction.accountBalance);
     this._router.navigate(['/dashboard']);
    // alert("Money Added Successfully");
    },
     error=>console.log(error)
    );   
     }

  withdrawMoney(userId:String,amount:any){
    console.log({userId});
    console.log({amount});
   this._http.get(`http://localhost:8888/add-withdraw-micro-service/wallet/withdraw/${userId}/${amount}`)
   .subscribe(data=>{console.log(data)
    this.walletTransaction=data;
   console.log(this.walletTransaction.accountBalance);
    this._router.navigate(['/dashboard']);
   // alert("Money Withdrawn Successfully");
    },
    error=>console.log(error)
   );   
   }
  }
  

