import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { HeadersComponent } from './components/headers/headers.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsComponent } from './components/products/products.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { CartComponent } from './components/cart/cart.component';
import { CatrgotyComponent } from './components/catrgoty/catrgoty.component';
import { PagenotFoundComponent } from './components/pagenot-found/pagenot-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './components/carousel/carousel.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactComponent } from './components/contact/contact.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateProductComponent,
    HeadersComponent,
    FooterComponent,
    ProductsComponent,
    LoginComponent,
    RegisterComponent,
    UpdateProductComponent,
    CartComponent,
    CatrgotyComponent,
    PagenotFoundComponent,
    CarouselComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    NgbCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
