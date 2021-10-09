import { Component } from '@angular/core';
import { Articulo } from './articulo.model';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  faTrashAlt = faTrashAlt;
  faPencilAlt = faPencilAlt;
  title = 'articulos';
  codigo = 0;
  descripcion ='';
  precio = 0;
  articulo: any = {};

  articulos: Articulo[] = [
    new Articulo('papas', 10.55),
    new Articulo('manzanas', 12.1),
    new Articulo('melon', 52.3),
    new Articulo('cebollas', 17),
    new Articulo('calabaza', 20),
  ];

  agregarArticulo() {
    let nuevoArticulo = new Articulo(this.descripcion, this.precio);
    this.articulos.push(nuevoArticulo);
  };
  eliminarArticulo(i: number) {
    var answer = confirm('está seguro de eliminar este artículo?');
    if(answer) {
      this.articulos.splice(i, 1);
    }
  };
  editarArticulo(i: number) {
    this.articulo = this.articulos[i];
    this.descripcion = this.articulo.descripcion;
    this.precio = this.articulo.precio;
    this.codigo = i+1;    
  };
  modificarArticulo() {
    for(var j = 0; j < this.articulos.length; j++) {
      if (this.codigo-1 == j) {
        this.articulos[j].descripcion = this.descripcion;
        this.articulos[j].precio = this.precio;
      }
    }
  };
}
