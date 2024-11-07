import {
  Entity,
  PrimaryColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UsuarioAluno } from './UsuarioAluno';

@Entity({ name: 'mensalidades' })
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

  @ManyToOne(() => UsuarioAluno, (usuarioAluno) => usuarioAluno.mensalidades, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'usuarios_alunos', referencedColumnName: 'matricula' })
  usuarioAluno: UsuarioAluno;

  // Opcional: Campos de auditoria
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}

//sdasdasdasd