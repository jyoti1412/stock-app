import { Component, OnInit } from '@angular/core';
import * as M from "materialize-css";
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  initDropDown() {
    var elems = document.querySelectorAll('.nav-drop');
    var instances = M.Dropdown.init(elems, {});
    instances[0].open();
  }

}
