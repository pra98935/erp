import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portal-left',
  templateUrl: './portal-left.component.html',
  styleUrls: ['./portal-left.component.scss']
})
export class PortalLeftComponent implements OnInit {

  selectedItem: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

    /**
   * 
   * @param event 
   * @param module 
   */
  listClick(event, module) { 
    this.selectedItem = module;
    //this.router.navigate([module]);
  }

}
