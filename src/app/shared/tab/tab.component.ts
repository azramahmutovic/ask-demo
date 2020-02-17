import { Component, OnInit, Input } from '@angular/core';
import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  @Input() tabTitle: string;
  @Input() tabIcon: string;
  
  active: boolean;

  constructor(tabs: TabsComponent) {
    tabs.addTab(this);
  }
  
  ngOnInit() {
  }

}
