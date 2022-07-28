import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class FriendList1658845828969 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "friendlist",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "email",
                        type: "varchar",
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "avatar",
                        type: "varchar",
                    },
                    {
                            name: "friend_id",
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
                        name: "fk_friendlist",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["friend_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("friendlist")
    }

}
