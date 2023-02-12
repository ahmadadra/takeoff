import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'footerbase',
  templateUrl: './footerbase.component.html',
  styleUrls: ['./footerbase.component.css']
})
export class FooterbaseComponent implements OnInit {
  @Input() lang: any
  constructor() { }

  ngOnInit(): void {

  }

}
