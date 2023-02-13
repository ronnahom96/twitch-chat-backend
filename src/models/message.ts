import { Column, Entity, ObjectIdColumn } from 'typeorm';

const MESSAGE_COLLECTION_NAME = process.env.MESSAGE_COLLECTION_NAME;

@Entity(MESSAGE_COLLECTION_NAME)
export class Message {
    @ObjectIdColumn()
    id!: string;

    @Column()
    author!: string;

    @Column()
    text!: string;
}
