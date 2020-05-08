import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { WalletService } from '../wallet.service';
import { WalletTransaction } from '../wallet-transaction';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  walletTransaction=new WalletTransaction();
  accountBalance:any;
 // amount:any;
  //description:any;
  message=" ";
  userName:any;
  constructor(private route:ActivatedRoute,private _router: Router,private _walletService: WalletService) {
    
  }

  ngOnInit() {
   // this.accountBalance=this.route.snapshot.params['accountBalance'];
    this.userName=this._walletService.userName;
    console.log(this.userName);
    if( this._walletService.walletTransaction!=null){
      
     this.accountBalance= this._walletService.walletTransaction.accountBalance;
     console.log(this.userName);
     console.log(this.accountBalance);
     this.message=this._walletService.walletTransaction.amount+" "+this._walletService.walletTransaction.description;
     setTimeout(()=>this.message="  ",3000);
    }
  }

 onAddClick() :void {
    this._router.navigate(['/add']);
}
onWithdrawClick() :void {
  this._router.navigate(['/withdraw']);
}


}
