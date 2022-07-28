import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AlterUserAddName1658937539962 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("users", 
        new TableColumn({
            name: "name",
            type: "varchar"
        })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("users", "name")
    }

}
