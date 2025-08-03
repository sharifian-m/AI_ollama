import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-voucher',
  templateUrl: './voucher.component.html',
  styleUrls: ['./voucher.component.scss'],
  standalone:false,
})
export class VoucherComponent {

constructor(private route:Router) {
}
  goBack() {
    this.route.navigate(['gpt'])
  }
}
