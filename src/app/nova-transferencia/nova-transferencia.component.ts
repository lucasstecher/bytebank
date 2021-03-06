import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {

  valor!: number;
  destino!: number;

  @Output() aoTransferir = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  transferir() {
    console.log('Solicitada transferĂȘncia!');
    const valorEmitir = { valor: this.valor, destino:this.destino };
    this.aoTransferir.emit(valorEmitir);
    this.limparCampos();
  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }
}
