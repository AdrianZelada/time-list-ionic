import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FooterTabsPage } from './footer-tabs.page';
import {TabOneComponent} from './tab-one/tab-one.component';
import {TabTwoComponent} from './tab-two/tab-two.component';

const routes: Routes = [
    {
      path: '',
        redirectTo: 'tabOne'
    },
    {
      path: '',
      component: FooterTabsPage,
      children: [
          {
              path: 'tabOne',
              component: TabOneComponent
          },
          {
              path: 'tabTwo',
              component: TabTwoComponent
          }
      ]
    }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FooterTabsPage, TabOneComponent, TabTwoComponent]
})
export class FooterTabsPageModule {}
