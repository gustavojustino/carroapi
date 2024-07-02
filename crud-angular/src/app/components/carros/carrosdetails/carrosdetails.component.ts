import { Component, EventEmitter, inject, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import Swal from 'sweetalert2';

import { Carro } from '../../../models/carro';
import { Marca } from '../../../models/marca';
import { CarroService } from '../../../services/carro.service';
import { MarcaslistComponent } from '../../marcas/marcaslist/marcaslist.component';

@Component({
  selector: 'app-carrosdetails',
  standalone: true,
  imports: [MdbFormsModule, FormsModule, MarcaslistComponent],
  templateUrl: './carrosdetails.component.html',
  styleUrl: './carrosdetails.component.scss'
})
export class CarrosdetailsComponent {
  // ELEMENTOS DA MODAL
  modalService = inject(MdbModalService);
  @ViewChild("modalMarcas") modalMarcas!: TemplateRef<any>;
  modalRef!: MdbModalRef<any>;

  @Input("carro") carro: Carro = new Carro(0, "", null);
  @Output("return") return = new EventEmitter<any>();

  Router = inject(ActivatedRoute);
  Router2 = inject(Router);

  carroService = inject(CarroService);

  constructor() {
    let id = this.Router.snapshot.params['id'];
    if (id > 0) {
      this.findById(id);
    }
  }

  findById(id: number) {
    this.carroService.findById(id).subscribe({
      next: data => {
        this.carro = data;
      },
      error: error => {

          Swal.fire({
            title: 'Ocorreu um erro',
            icon: 'error',
            confirmButtonText: 'Ok'
          });
        }
    });

  }

  save(){
    if(this.carro.id > 0) {
      this.carroService.update(this.carro, this.carro.id).subscribe({
        next: data => {
          Swal.fire({
            title: data,
            icon: 'success',
            confirmButtonText: 'Ok'
          });
          this.Router2.navigate(['admin/carros'], {state: { carroEditado: this.carro}});
          this.return.emit(this.carro);
        },
        error: error => {

          Swal.fire({
            title: 'Ocorreu um erro',
            icon: 'error',
            confirmButtonText: 'Ok'
          });
        }

      });} else {
      this.carroService.save(this.carro).subscribe({
        next: data => {
          Swal.fire({
            title: data,
            icon: 'success',
            confirmButtonText: 'Ok'
          });
          this.return.emit(this.carro);
        },
         error: error => {

          Swal.fire({
            title: 'Ocorreu um erro',
            icon: 'error',
            confirmButtonText: 'Ok'
          });
          this.Router2.navigate(['admin/carros'], {state: { carroNovo: this.carro}});
        }
      });}

  }
  buscarMarca() {
    this.modalRef = this.modalService.open(this.modalMarcas);
  }

  returnMarca(marca: Marca) {
    this.carro.marca = marca;
    this.modalRef.close();
  }


}
