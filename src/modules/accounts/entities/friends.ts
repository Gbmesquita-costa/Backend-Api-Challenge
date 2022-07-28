import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm"
import { v4 as uuidV4 } from "uuid"

@Entity("friendlist")
class FriendList {
    
    @PrimaryColumn()
    id?: string;

    @Column()
    email: string;

    @Column()
    name: string;

    @Column()
    avatar: string;

    @Column()
    friend_id: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4()
        }
    }
}

export { FriendList }