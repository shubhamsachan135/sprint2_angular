import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { WalletService } from '../wallet.service';
import {ActivatedRoute,Router} from '@angular/router';
import { WalletTransaction } from '../wallet-transaction';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  submitted = false;
   accountBalance:any;
  amount:any;
   userId:any;
   userName:any;
  addWithdrawForm: FormGroup;
  constructor(private _walletService: WalletService,private _router:Router) {
    
   }
   
  ngOnInit() {
    this.addWithdrawForm = new FormGroup({
      amount: new FormControl('',[Validators.required,Validators.pattern("^[1-9][0-9]*.[0-9]*$")]), 
    });
    this.userId=this._walletService.userId;
    this.userName=this._walletService.userName;
  }
  get f() { return this.addWithdrawForm.controls; }
  onSubmit() { 
    this.submitted = true;
    //console.log(this.addWithdrawForm.value);
     this.amount=this.addWithdrawForm.value.amount;
    this._walletService.addMoney(this.userId,this.amount)
     //.subscribe(data=>{console.log(data)
      //     this.walletTransaction=data;
    //      console.log(this.walletTransaction.accountBalance);
    //      this._router.navigate(['/dashboard',this.walletTransaction.accountBalance]);
    //      alert("Money Added Successfully");
  //  },
  //   error=>console.log(error)
  //    );
   // console.log(this.accountBalance);
   
    
  }

  

}
