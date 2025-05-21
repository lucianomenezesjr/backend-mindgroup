import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddUserArtigosRelation1680000000000 implements MigrationInterface {
  name = 'AddUserArtigosRelation1680000000000';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE "artigo" (
        "id" SERIAL NOT NULL,
        "titulo" character varying NOT NULL,
        "texto" text NOT NULL,
        "banner" character varying,
        "autorId" integer,
        CONSTRAINT "PK_artigo_id" PRIMARY KEY ("id")
      )
    `);

    await queryRunner.query(`
      ALTER TABLE "artigo"
      ADD CONSTRAINT "FK_artigo_autor"
      FOREIGN KEY ("autorId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "artigo" DROP CONSTRAINT "FK_artigo_autor"`);
    await queryRunner.query(`DROP TABLE "artigo"`);
  }
}
