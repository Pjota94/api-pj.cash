import { Exclude } from "class-transformer";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from "typeorm";
import Accounts from "./accounts.entity";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  username: string;

  @Column()
  @Exclude()
  password: string;

  @OneToOne(() => Accounts, { eager: true })
  @JoinColumn()
  accounts: Accounts;
}

export default User;
