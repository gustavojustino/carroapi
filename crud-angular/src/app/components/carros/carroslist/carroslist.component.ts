import { Component, inject, TemplateRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MdbModalModule, MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import Swal from 'sweetalert2';

import { Carro } from '../../../models/carro';
import { Marca } from '../../../models/marca';
import { CarrosdetailsComponent } from '../carrosdetails/carrosdetails.component';
import { CarroService } from './../../../services/carro.service';

@Component({
  selector: 'app-carroslist',
  standalone: true,
  imports: [RouterLink, MdbModalModule, CarrosdetailsComponent],
  templateUrl: './carroslist.component.html',
  styleUrl: './carroslist.component.scss'
})
export class CarroslistComponent {

  // ELEMENTOS DA MODAL
  modalService = inject(MdbModalService);
  @ViewChild("modalCarroDetalhe") modalCarroDetalhe!: TemplateRef<any>;
  modalRef!: MdbModalRef<any>;

  lista: Carro[] = [];
  carroEdit: Carro = new Carro(0, "", null);

  carroService = inject (CarroService);

  constructor() {

    this.findAll();

    let carroNovo = history.state.carroNovo;
    let carroEditado = history.state.carroEditado;

    if(carroNovo) {
      carroNovo.id = 52;
      this.lista.push(carroNovo)
    }

    if(carroEditado) {
      let indice = this.lista.findIndex(x => {return x.id == carroEditado.id});
      this.lista[indice] = carroEditado;
    }
  }

  findAll() {
    this.carroService.findAll().subscribe({
      next: lista => { // retornar o esperado
        this.lista = lista;
      },

      error: err => { // retornr qualquer erro (badrequest, exception)
        Swal.fire({
          title: 'Ocorreu um erro',
          icon: 'error',
          confirmButtonText: 'Ok'
        });
      },
    })
  }

  deleteById(carro: Carro) {
    Swal.fire({
      title: 'Tem certeza que deseja deletar este registro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, deletar isso!',
      cancelButtonText: 'Não, cancelar!'
    }).then(
      (result) => {
      if (result.isConfirmed) {
        this.carroService.deleteById(carro.id).subscribe({
          next: mensagem => { // retornar o esperado
            Swal.fire({
              title: mensagem,
              icon: 'success',
              confirmButtonText: 'Ok'
            });
            this.findAll();
          },


          error: err => { // retornar qualquer erro (badrequest, exception)
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
    this.carroEdit = new Carro(0, "", null);
    this.modalRef = this.modalService.open(this.modalCarroDetalhe);
  }

  edit(carro: Carro) {
    this.carroEdit = Object.assign({}, carro);
    this.modalRef = this.modalService.open(this.modalCarroDetalhe);
  }

  returnDetails(carro: Carro) {
    this.findAll();
    this.modalRef.close();
  }

}
