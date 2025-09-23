import { IsNotEmpty } from 'class-validator';
import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

//dando nome a tabela do banco de dados
@Entity({ name: 'tb_postagens' })
export class Postagem {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  titulo: string;

  @IsNotEmpty()
  @Column({ length: 1000, nullable: false })
  texto: string;

  @UpdateDateColumn()
  data: Date;
}

// id PRIMARY KEY AUTO_INCREMENT
// titulo varchar(100) NOT NULL
// texto varchar(1000) NOT NULL
// data DATE(6) UPDATED_TIMESTAMP
