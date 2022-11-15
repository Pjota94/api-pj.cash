import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("accounts")
class Accounts {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "float" })
  balance: number;
}

export default Accounts;
