import {
  Entity,
  PrimaryColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'
import { v4 as uuid } from "uuid"
//import { Perfil } from './Perfil';

@Entity({ name: 'usuarios_admins' })
export class UsuarioAdmin {
  @PrimaryColumn({ name: 'id_user', type: 'varchar' })
  idUser: string;

  @Column({ name: 'id_perfil', type: 'varchar' })
  idPerfil: string;

  @Column({ name: 'nome', type: 'varchar' })
  nome: string;

  @Column({ name: 'user', type: 'varchar' })
  user: string;

  @Column({ name: 'password', type: 'varchar' })
  password: string;

  @Column({ name: 'cpf', type: 'varchar' })
  cpf: string
  constructor(){
    this.idUser = uuid()
  }
}
