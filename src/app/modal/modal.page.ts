import { ModalController } from '@ionic/angular';
import { Component } from '@angular/core';
import { TecnologiaService } from '../services/tecnologia.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage  {

  constructor(private tecnologiaService: TecnologiaService, private modalCtrl: ModalController) { }

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  get getItem (){
    return this.tecnologiaService.itemSelected
  }
  resetItem (){
    this.closeModal();
    this.tecnologiaService.resetItem();
    
  }

  closeModal(){
    this.modalCtrl.dismiss();
  }

}
