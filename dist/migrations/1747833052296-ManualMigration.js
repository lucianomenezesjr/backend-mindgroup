"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddProfileFields1747833052296 = void 0;
class AddProfileFields1747833052296 {
    async up(queryRunner) {
        await queryRunner.query(`
            ALTER TABLE user
            ADD COLUMN nome varchar(255) NULL,
            ADD COLUMN sobrenome varchar(255) NULL,
            ADD COLUMN imagemPerfil varchar(255) NULL
        `);
    }
    async down(queryRunner) {
        await queryRunner.query(`
            ALTER TABLE user
            DROP COLUMN nome,
            DROP COLUMN sobrenome,
            DROP COLUMN imagemPerfil
        `);
    }
}
exports.AddProfileFields1747833052296 = AddProfileFields1747833052296;
//# sourceMappingURL=1747833052296-ManualMigration.js.map