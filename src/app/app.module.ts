import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule,HttpInterceptor, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FruitsComponent } from './fruits/fruits.component';
import { GroceryComponent } from './grocery/grocery.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { MyAddressComponent } from './my-address/my-address.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { OrderListComponent } from './order-list/order-list.component';
import { ShopComponent } from './shop/shop.component';
import { SingleComponent } from './single/single.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ASMService} from './asm.service';
import { TokenInterceptorService} from './token-interceptor.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { CartService } from './cart.service';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    AboutComponent,
    FruitsComponent,
    GroceryComponent,
    FooterComponent,
    CartComponent,
    CheckoutComponent,
    ContactComponent,
    FaqComponent,
    MyAddressComponent,
    MyprofileComponent,
    OrderListComponent,
    ShopComponent,  
    SingleComponent,
    WishlistComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,         
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot()
    
  ],
  providers: [ASMService, CartService,
    {
    provide : HTTP_INTERCEPTORS,
    useClass : TokenInterceptorService,
    multi : true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
