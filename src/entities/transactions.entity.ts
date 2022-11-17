import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import Accounts from "./accounts.entity";

@Entity("transactions")
class Transactions {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "float" })
  value: number;

  @Column()
  createdAt: string;

  @ManyToOne(() => Accounts)
  debitedAccount: Accounts;

  @ManyToOne(() => Accounts)
  creditedAccount: Accounts;
}

export default Transactions;
