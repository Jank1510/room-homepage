import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Room-homepage';
  animationDescripcion: object
  img: string
  txtTitulo: string
  txtParrafo: string
  indicador: number = 0
  visible: boolean = false
  iconNavPhone:string

  constructor() {
    this.animationDescripcion = {
      'animation-name': 'opacity',
      'animation-direction': 'reverse'
    }
    setTimeout(() => {
      this.animationDescripcion = {}
    }, 250);
    this.img = '../assets/desktop-image-hero-1.jpg'
    this.txtTitulo = 'Discover innovative ways to decorate'
    this.txtParrafo = 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.'
    this.indicador = 1
    this.iconNavPhone='../assets/icon-hamburger.svg'
  }

  IconNavEvento() {
    if (this.visible==false){
      this.visible=true
      this.iconNavPhone='../assets/icon-close.svg'
    }else{
      this.iconNavPhone='../assets/icon-hamburger.svg'
      this.visible = false
    }
  }

  siguiente() {
    this.animationDescripcion = { 'animation-name': 'opacity' }
    setTimeout(() => {
      this.animationDescripcion = {
        'animation-name': 'opacity',
        'animation-direction': 'reverse'
      }
      setTimeout(() => {                           // <<<---using ()=> syntax
        this.animationDescripcion = {};
      }, 250);
      if (this.indicador != 3) {
        this.indicador = this.indicador + 1
      } else {
        this.indicador = 1
      }
      if (this.indicador === 1) {
        this.img = '../assets/desktop-image-hero-1.jpg'
        this.txtTitulo = 'Discover innovative ways to decorate'
        this.txtParrafo = 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.'
      } else {
        if (this.indicador === 2) {
          this.img = '../assets/desktop-image-hero-2.jpg'
          this.txtTitulo = 'We are available all across the globe'
          this.txtParrafo = 'With stores all over the world, it`s easy for you to find furniture for your home or place of business.Locally, we’re in most major cities throughout the country.Find the branch nearest you using our store locator.Any questions ? Don`t hesitate to contact us today.'
        } else {
          if (this.indicador === 3) {
            this.img = '../assets/desktop-image-hero-3.jpg'
            this.txtTitulo = 'Manufactured with the best materials'
            this.txtParrafo = 'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.'
          }
        }
      }
    }, 250);
  }

  atras() {
    this.animationDescripcion = { 'animation-name': 'opacity' }
    setTimeout(() => {
      this.animationDescripcion = {
        'animation-name': 'opacity',
        'animation-direction': 'reverse'
      }
      setTimeout(() => {                           // <<<---using ()=> syntax
        this.animationDescripcion ={};
      }, 250);
      if (this.indicador != 1) {
        this.indicador = this.indicador - 1
      } else {
        this.indicador = 3
      }
      if (this.indicador === 3) {
        this.img = '../assets/desktop-image-hero-3.jpg'
        this.txtTitulo = 'Manufactured with the best materials'
        this.txtParrafo = 'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.'
      } else {
        if (this.indicador === 2) {
          this.img = '../assets/desktop-image-hero-2.jpg'
          this.txtTitulo = 'We are available all across the globe'
          this.txtParrafo = 'With stores all over the world, it`s easy for you to find furniture for your home or place of business.Locally, we’re in most major cities throughout the country.Find the branch nearest you using our store locator.Any questions ? Don`t hesitate to contact us today.'
        }
        else {
          if (this.indicador === 1) {
            this.img = '../assets/desktop-image-hero-1.jpg'
            this.txtTitulo = 'Discover innovative ways to decorate'
            this.txtParrafo = 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.'
          }
        }
      }
    }, 250);
  }
}
