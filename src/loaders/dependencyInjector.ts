import { Container } from 'typedi';

import MessageService from '../services/message';

export default () => {
    Container.set('MessageService', MessageService);
}
