import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'leagues' })
export class League {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  country: string;

  @Column({ name: 'logo_url' })
  logoUrl: string;

  @Column({ default: null })
  season: number;

  @Column({ default: null })
  round: string;
}
