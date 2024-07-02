import { Component, EventEmitter, inject, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { MdbModalModule, MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import Swal from 'sweetalert2';

import { Marca } from '../../../models/marca';
import { MarcaService } from '../../../services/marca.service';
import { MarcasdetailsComponent } from '../marcasdetails/marcasdetails.component';

@Component({
  selector: 'app-marcaslist',
  standalone: true,
  imports: [MdbModalModule, MarcasdetailsComponent],
  templateUrl: './marcaslist.component.html',
  styleUrl: './marcaslist.component.scss'
})
export class MarcaslistComponent {

  lista!: Marca[];
  marcaEdit: Marca = new Marca(0, "");

  @Input("hiddenButton") hiddenButton = false;
  @Output("return") return = new EventEmitter<any>();

  marcaService = inject(MarcaService);

  modalService = inject(MdbModalService);
  @ViewChild("modalBuscarMarca") modalBuscarMarca!: TemplateRef<any>;
  modalRef!: MdbModalRef<any>;



  constructor() {

    this.findAll();

    let marcaNova = history.state.marcaNova;
    let marcaEdit = history.state.marcaEdit;

    if(marcaNova) {
      this.lista.push(marcaNova)
    }

    if(marcaEdit) {
      let indice = this.lista.findIndex(x => {return x.id == marcaEdit.id});
      this.lista[indice] = marcaEdit;
    }
  }

  findAll() {
    this.marcaService.findAll().subscribe({
      next: lista => {
        this.lista = lista;
      },

      error: err => {
        Swal.fire({
          title: 'Ocorreu um erro',
          icon: 'error',
          confirmButtonText: 'Ok'
        });
      },
    })
  }

  deleteById(marca: Marca) {
    Swal.fire({
      title: 'Tem certeza que deseja deletar este registro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, deletar isso!',
      cancelButtonText: 'Não, cancelar!'
    }).then(
      (result) => {
      if (result.isConfirmed) {
        this.marcaService.deleteById(marca.id).subscribe({
          next: mensagem => {
            Swal.fire({
              title: mensagem,
              icon: 'success',
              confirmButtonText: 'Ok'
            });
            this.findAll();
          },


          error: err => {
            Swal.fire({
              title: 'Ocorreu um erro',
              icon: 'error',
              confirmButtonText: 'Ok'
            });
          },
        })


      }
    });

  }

  new() {
    this.marcaEdit = new Marca(0, "");
    this.modalRef = this.modalService.open(this.modalBuscarMarca);
  }

  edit(marca: Marca) {
    this.marcaEdit = Object.assign({}, marca);
    this.modalRef = this.modalService.open(this.modalBuscarMarca);
  }

  returnMarca(marca: Marca) {
    this.findAll();
    this.modalRef.close();
  }

  select(marca: Marca) {
    this.return.emit(marca);
  }

}
