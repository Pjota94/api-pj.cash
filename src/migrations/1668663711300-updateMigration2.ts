import { MigrationInterface, QueryRunner } from "typeorm";

export class updateMigration21668663711300 implements MigrationInterface {
    name = 'updateMigration21668663711300'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "transactions" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "transactions" ADD "createdAt" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "transactions" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "transactions" ADD "createdAt" date NOT NULL`);
    }

}
