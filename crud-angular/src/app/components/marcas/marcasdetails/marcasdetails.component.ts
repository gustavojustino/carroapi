import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import Swal from 'sweetalert2';

import { Marca } from '../../../models/marca';
import { MarcaService } from '../../../services/marca.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-marcasdetails',
  standalone: true,
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './marcasdetails.component.html',
  styleUrls: ['./marcasdetails.component.scss']
})
export class MarcasdetailsComponent {

  @Input("marca") marca: Marca = new Marca(0, "");
  @Output("return") return = new EventEmitter<any>();

  activatedRoute = inject(ActivatedRoute);
  Router2 = inject(Router);
  router = inject(Router);
  marcaService = inject(MarcaService);

  constructor() {
    let id = this.activatedRoute.snapshot.params['id'];
    if (id > 0) {
      this.findById(id);
    }
  }

  findById(id: number) {
    this.marcaService.findById(id).subscribe({
      next: data => {
        this.marca = data;
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

  save() {
    if (this.marca.id > 0) {
      this.marcaService.update(this.marca, this.marca.id).subscribe({
        next: data => {
          Swal.fire({
            title: data,
            icon: 'success',
            confirmButtonText: 'Ok'
          });
          this.router.navigate(['admin/marca'], { state: { marcaEdit: this.marca } });
          this.return.emit(this.marca);
        },
        error: error => {
          Swal.fire({
            title: 'Ocorreu um erro',
            icon: 'error',
            confirmButtonText: 'Ok'
          });
        }
      });
    } else {
      this.marcaService.save(this.marca).subscribe({
        next: data => {
          Swal.fire({
            title: data,
            icon: 'success',
            confirmButtonText: 'Ok'
          });
          this.return.emit(this.marca);
        },
        error: error => {
          Swal.fire({
            title: 'Ocorreu um erro ao salvar',
            icon: 'error',
            confirmButtonText: 'Ok'
          });
          this.Router2.navigate(['admin/marcas'], {state: { marcaNova: this.marca}});
        }
      });
    }
  }




}
