import { v4 as uuidV4 } from "uuid"
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity("details")
class PostEntity {
    @PrimaryColumn()
    id?: string

    @Column()
    details: string;

    @Column()
    postdetails_id: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4()
        }
    }
}

export { PostEntity }