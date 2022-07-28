import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm"
import { v4 as uuidV4 } from "uuid"

@Entity("posts")
class Posts {

    @PrimaryColumn()
    id?: string;

    @Column()
    post: string;

    @Column()
    posts_id: string

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4()
        }
    }
}

export { Posts }