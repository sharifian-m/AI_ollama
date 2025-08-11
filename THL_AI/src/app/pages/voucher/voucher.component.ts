import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-voucher',
  templateUrl: './voucher.component.html',
  styleUrls: ['./voucher.component.scss'],

  standalone:false,
})
export class VoucherComponent implements OnInit{

constructor(private route:Router,
            private routerActive:ActivatedRoute) {
}
ngOnInit() {
}

  goBack() {
    this.route.navigate(['gpt'])
  }
}
