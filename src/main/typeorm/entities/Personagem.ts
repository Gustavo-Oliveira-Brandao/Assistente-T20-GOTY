import { Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Personagem {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  nome: string
}
