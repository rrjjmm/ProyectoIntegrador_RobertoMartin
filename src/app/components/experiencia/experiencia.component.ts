import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/service/token.service';
import { Experiencia } from 'src/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  expe:  Experiencia[] = []
  sExperienciaService: any;
  

  constructor(private sExperiencia: SExperienciaService, private tokenService: TokenService) {}

  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    //if(this.tokenService.getToken()){
    //  this.isLogged = true;
    //} else {
   //  this.isLogged = false;
   //}
  }

  cargarExperiencia(): void{
    //this.sExperienciaService.lista().subscribe((data: any) => {this.expe = data;})
}

delete(id?: number){
  if(id!= undefined){
    this.sExperiencia.delete(id).subscribe(data => {this.cargarExperiencia();
    },err => {
      alert("No se pudo borrar la experiencia");
    }
    )
  }
}
}
