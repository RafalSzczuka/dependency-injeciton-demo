import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { ShopComponent } from './components/shop/shop.component';

const routes: Route[] = [
    {
        path: "shop",
        loadChildren: () => import("./components/shop/shop.module").then(m => m.ShopModule)
        // component: ShopComponent
    },
    {
        path: "cart",
        loadChildren: () => import("./components/cart/cart.module").then(m => m.CartModule)
        // component: CartComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
