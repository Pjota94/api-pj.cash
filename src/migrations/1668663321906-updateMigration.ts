import { MigrationInterface, QueryRunner } from "typeorm";

export class updateMigration1668663321906 implements MigrationInterface {
    name = 'updateMigration1668663321906'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "transactions" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "transactions" ADD "createdAt" date NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "transactions" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "transactions" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
    }

}
