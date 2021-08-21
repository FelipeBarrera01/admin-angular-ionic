import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Body } from '../interfaces/denario.interface';
import { ModalPage } from '../modal/modal.page';
import { TecnologiaService } from '../services/tecnologia.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  get resultados() {
return this.tecnologiaService.response;
  }
  constructor(private tecnologiaService: TecnologiaService,
      private modalCtrl: ModalController
    ) {}

  selectItem(item: Body): void {
    this.mostrarModal();
    this.tecnologiaService.selectItem(item);
    
  }

  async mostrarModal (){
    const modal = await this.modalCtrl.create({
      component: ModalPage
    })
    await modal.present();
  }
}
