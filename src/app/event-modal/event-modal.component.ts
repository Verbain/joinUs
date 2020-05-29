import {Component, OnInit, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-event-modal',
  templateUrl: './event-modal.component.html',
  styleUrls: ['./event-modal.component.css']
})
export class EventModalComponent implements OnInit {
  modalRef: BsModalRef;
  formInputValues: any = [
    {value: 'Titre', placeholder: 'Entrez le nom de l\'évènement'},
    {value: 'Date', placeholder: 'Entrez une date'},
    {value: 'Heure', placeholder: 'Entrez une heure'}
  ];

  formTextValues: any = [
    {value: 'A propos', placeholder: 'Description de l\'évènement'}
  ];

  constructor(private modalService: BsModalService) {
  }

  ngOnInit(): void {
  }

  openModalWithClass(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'grey modal-lg'})
    );
  }
}
