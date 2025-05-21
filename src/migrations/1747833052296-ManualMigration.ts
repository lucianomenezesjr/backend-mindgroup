import { MigrationInterface, QueryRunner } from "typeorm";

export class AddProfileFields1747833052296 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE user
            ADD COLUMN nome varchar(255) NULL,
            ADD COLUMN sobrenome varchar(255) NULL,
            ADD COLUMN imagemPerfil varchar(255) NULL
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE user
            DROP COLUMN nome,
            DROP COLUMN sobrenome,
            DROP COLUMN imagemPerfil
        `);
    }
}