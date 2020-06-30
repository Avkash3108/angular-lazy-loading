import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-admin-content-header',
  templateUrl: './admin-content-header.component.html',
  styleUrls: ['./admin-content-header.component.scss']
})
export class AdminContentHeaderComponent implements OnInit {

  @Input() headerTitle: string = 'My Dashboard';

  constructor() { }

  ngOnInit(): void {
  }

}
