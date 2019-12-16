import { Component, OnInit } from '@angular/core';
import { auto } from '../modelos/auto';

@Component({
  selector: 'app-formucarga',
  templateUrl: './formucarga.component.html',
  styleUrls: ['./formucarga.component.css']
})
export class FormucargaComponent implements OnInit {

 
  //vehi:vehiculo;
  //unAuto = new auto("","","",0,"","","","");
  unAuto :auto;

  anios = new Array<number>();

  //marcas = new Array<string>;
  marcaSeleccionada= "";

  //modelos: Array<string>;
  modeloSeleccionado = "";

  tipos = new Array<string>();

  localidades = new Array<string>();

  concesionarias = new Array<string>();

   //marcasAutos:string;

   marca:string;
   modelo:string;
   an:string;
   tipo:string;
   localidad:string;
   concesionaria:string;
   foto:string;
   kilometros:number;
 // lista:Array<vehiculo>;
  //tipo:Tipo;

   //marcas = new Array<string>();
   //modelos  = new Array<string>();
   //t = "Alfa Romeo";    
   //types  = [];
   selectedValue:string ="Alfa Romeo";
  
   public filterTypes = [
     {value:'Alfa Romeo', display:'Alfa Romeo'},
     {value:'Audi', display:'Audi'},
     {value:'BMW', display:'BMW'},
   ];
 
    constructor() { 
        this.selectedValue='Alfa Romeo';
        this.modelo = "Alfa 1";

        this.modelos.push("Alfa 1");
        this.modelos.push("Alfa 2");
        this.modelos.push("Alfa 3");
    }
 
    modelos = new Array<string>();
    filterChanged(selectedValue:string){
        console.log('value is ',selectedValue);

        if(selectedValue == "Alfa Romeo") {
            this.modelos = new Array<string>();
            this.modelos.push("Alfa 1");
            this.modelos.push("Alfa 2");
            this.modelos.push("Alfa 3");
        }
        else if(selectedValue == "Audi") {
          this.modelos = new Array<string>();
          this.modelos.push("Audi 1");
          this.modelos.push("Audi 2");
          this.modelos.push("Audi 3");
        }
        else if(selectedValue == "BMW") {
          this.modelos = new Array<string>();
          this.modelos.push("BMW 1");
          this.modelos.push("BMW 2");
          this.modelos.push("BMW 3");
        }

 
    }



   /*
  constructor( ) //private http: HttpClient, private as:AutoService, private ta: TraerautosService, private router: Router) {
  { 
     //this.lista = new Array<vehiculo>();
     //this.vehi = new vehiculo("","","",0, "auto"  ,"");
    // this.unAuto = new auto( this.marca, this.modelo, this.an, this.kilometros,this.tipo, this.foto, this.localidad, this.concesionaria);

    this.types = ["Alfa Romeo", "Audi", "BMW"];
    
    
     this.marcas.push("Alfa Romeo");
     this.marcas.push("Audi");
     this.marcas.push("BMW");
     this.marcas.push("Cadillac");
     



     this.unAuto = new auto(this.marca,this.modelo,this.an, this.kilometros,
        this.tipo, this.foto, this.localidad, this.concesionaria);
       




     //this.unAuto = new auto( this.marca, this.modelo, this.an, 0,this.tipo, "", this.localidad, this.concesionaria);
    // this.unAuto = new auto( "", "", "", 0,"", "", "", "");

   }




   
   cargarModelos() {
      
     if(this.t == "Alfa Romeo") 
     {
      //modelos alfa romeo
          this.modelos.push("Alfa 75");
          this.modelos.push("Alfa Spider");
          this.modelos.push("Alfetta GTV");
      }
 
      else if(this.t == "Audi") 
      {
      //modelos audi
          this.modelos.push("145");
          this.modelos.push("146");
          this.modelos.push("147");
          this.modelos.push("A3 Limousine");
          this.modelos.push("Coupe");
      }
 
      
      else if(this.marca == "BMW") 
      {
          //modelos BMW
          this.modelos.push("BMW Serie 1");
          this.modelos.push("BMW Serie 2");
          this.modelos.push("BMW Serie 3");
          this.modelos.push("BMW Serie 4");
          this.modelos.push("i3");
          this.modelos.push("i8");
          this.modelos.push("x1");
          this.modelos.push("x2");
      }
      else if(this.marca == "Cadillac") 
      {
          this.modelos.push("ATS");
          this.modelos.push("BLS");
 
      }

  }*/

  ngOnInit() {
  
  }


}
