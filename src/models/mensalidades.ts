import { Column, Entity, PrimaryColumn } from "typeorm"
//import { UsuarioAluno } from './UsuarioAluno';
import { v4 as uuid } from "uuid"

@Entity( 'mensalidades')
export class Mensalidade {
  @PrimaryColumn({ name: 'id_mensalidade', type: 'varchar' })
  idMensalidade: string;

  @Column({ name: 'usuarios_alunos', type: 'varchar' })
  usuariosAlunos: string;

  @Column({ name: 'mes_ref', type: 'integer' })
  mesRef: number;

  @Column({ name: 'ano_ref', type: 'integer' })
  anoRef: number;

  @Column({ name: 'dia_vcto', type: 'timestamp' })
  diaVcto: Date;

  @Column({ name: 'dia_pagamento', type: 'timestamp', nullable: true })
  diaPagamento?: Date;

  @Column({ name: 'pago', type: 'boolean', default: false })
  pago: boolean;

}

//sdasdasdasd