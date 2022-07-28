import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class PostDetails1658931051271 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "details",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "details",
                        type: "varchar"
                    },
                    {
                            name: "postdetails_id",
                            type: "uuid",
                            isNullable: true
                    },
                    {
                        name: "created_at",
                        type: "timestamp", 
                        default: "now()"
                    }
                ],
                foreignKeys: [
                    {
                        name: "fk_postdetails",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["postdetails_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("details")
    }

}
