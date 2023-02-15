import { Message } from '../models/message';
import { Container } from 'typedi';
import { DataSource } from 'typeorm';

import MessageService from '../services/message';

export default (dataSource: DataSource) => {
    Container.set('MessageService', MessageService);
    Container.set('MessageRepository', dataSource.getRepository(Message));
}
