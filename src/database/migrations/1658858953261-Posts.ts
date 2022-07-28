import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Posts1658858953261 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "posts",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "post",
                        type: "varchar"
                    },
                    {
                            name: "posts_id",
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
                        name: "fk_posts",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["posts_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("posts")
    }

}
