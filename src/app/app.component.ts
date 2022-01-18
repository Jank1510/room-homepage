import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Room-homepage';

  img: any
  txtTitulo: any
  txtParrafo: any
  indicador: any = 0
  nombreanimacion: any
  txt: any
  visible:any=false

  constructor() {
    this.img = 'url(../assets/desktop-image-hero-1.jpg)'
    this.txtTitulo = 'Discover innovative ways to decorate'
    this.txtParrafo = 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.'
    this.indicador = 1

  }
  abrirNav(){
this.visible=true
  }
  cerrarNav(){
    this.visible=false

  } 
  siguiente1() {
    this.nombreanimacion = 'AnimationIMGSigueinte1'
    this.txt= 'Animationtxt1'
    setTimeout(() => {                           // <<<---using ()=> syntax
      this.nombreanimacion = '';
    }, 300);
    if (this.indicador != 3) {
      this.indicador = this.indicador + 1
    } else {
      this.indicador = 1
    }
    if (this.indicador === 1) {
      this.img = 'url(../assets/desktop-image-hero-1.jpg)'
      this.txtTitulo = 'Discover innovative ways to decorate'
      this.txtParrafo = 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.'
    } else {
      if (this.indicador === 2) {
        this.img = 'url(../assets/desktop-image-hero-2.jpg)'
        this.txtTitulo = 'We are available all across the globe'
        this.txtParrafo = 'With stores all over the world, it`s easy for you to find furniture for your home or place of business.Locally, we’re in most major cities throughout the country.Find the branch nearest you using our store locator.Any questions ? Don`t hesitate to contact us today.'
      } else {
        if (this.indicador === 3) {
          this.img = 'url(../assets/desktop-image-hero-3.jpg)'
          this.txtTitulo = 'Manufactured with the best materials'
          this.txtParrafo = 'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.'
        }
      }
    }    
  }

  siguiente() {
    this.nombreanimacion = 'AnimationIMGSigueinte2'
    this.txt= 'Animationtxt2'
    setTimeout(() => {                           // <<<---using ()=> syntax
      this.siguiente1();
    }, 300);
  }

  atras1() {
    this.nombreanimacion = 'AnimationIMGAtras1'
    this.txt= 'Animationtxt1'
    setTimeout(() => {                           // <<<---using ()=> syntax
      this.nombreanimacion = '';
    }, 300);
    if (this.indicador != 1) {
      this.indicador = this.indicador - 1
    } else {
      this.indicador = 3
    }
    if (this.indicador === 3) {
      this.img = 'url(../assets/desktop-image-hero-3.jpg)'
      this.txtTitulo = 'Manufactured with the best materials'
      this.txtParrafo = 'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.'
    } else {
      if (this.indicador === 2) {
        this.img = 'url(../assets/desktop-image-hero-2.jpg)'
        this.txtTitulo = 'We are available all across the globe'
        this.txtParrafo = 'With stores all over the world, it`s easy for you to find furniture for your home or place of business.Locally, we’re in most major cities throughout the country.Find the branch nearest you using our store locator.Any questions ? Don`t hesitate to contact us today.'
      }
      else {
        if (this.indicador === 1) {
          this.img = 'url(../assets/desktop-image-hero-1.jpg)'
          this.txtTitulo = 'Discover innovative ways to decorate'
          this.txtParrafo = 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.'
        }
      }
    }
  }

  atras() {
    this.nombreanimacion = 'AnimationIMGAtras2'
    this.txt= 'Animationtxt2'
    setTimeout(() => {                           // <<<---using ()=> syntax
      this.atras1();
    }, 300);
  }
}
