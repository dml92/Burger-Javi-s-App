import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, MenuController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { LoginComponent } from '../pages/login/login.component';
import { OrdersComponent } from '../pages/orders/orders.component';
import { MenuComponent } from '../pages/menu/menu.component';
import { SummaryComponent } from '../pages/summary/summary.component';
import { KitchenComponent } from '../pages/kitchen/kitchen.component';

@Component({
  templateUrl: 'app.html'
})
export class AppComponent {

  @ViewChild(Nav)
  nav: Nav;

  rootPage = LoginComponent;
  currentPage = LoginComponent;

  adminPages: Array<{title: string, component: any}>;
  waiterPages: Array<{title: string, component: any}>;
  kitchenPages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController
  ) {
    this.initializeApp();

    // set app's pages depending on the role
    this.adminPages = [
      { title: 'Pedidos', component: OrdersComponent },
      { title: 'Cocina', component: KitchenComponent },
      { title: 'Menú', component: MenuComponent },
      { title: 'Resumen', component: SummaryComponent }
    ];
    this.waiterPages = [
      { title: 'Pedidos', component: OrdersComponent },
      { title: 'Menú', component: MenuComponent }
    ];
    this.kitchenPages = [
      { title: 'Cocina', component: KitchenComponent },
      { title: 'Menú', component: MenuComponent }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();

    if (page.component !== this.currentPage) {
      // navigate to the new page if it is not the current page
      this.nav.setRoot(page.component);
      this.currentPage = page.component;
    }
  }
}
