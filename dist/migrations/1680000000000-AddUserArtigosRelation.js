"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddUserArtigosRelation1680000000000 = void 0;
class AddUserArtigosRelation1680000000000 {
    name = 'AddUserArtigosRelation1680000000000';
    async up(queryRunner) {
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
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "artigo" DROP CONSTRAINT "FK_artigo_autor"`);
        await queryRunner.query(`DROP TABLE "artigo"`);
    }
}
exports.AddUserArtigosRelation1680000000000 = AddUserArtigosRelation1680000000000;
//# sourceMappingURL=1680000000000-AddUserArtigosRelation.js.map