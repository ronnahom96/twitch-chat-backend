import { Message } from "@/interfaces/message";
import Container, { Service } from "typedi";
import { DataSource } from "typeorm";

@Service()
export default class MessageService {
  constructor(private readonly messageRepository: DataSource) {
    this.messageRepository = Container.get('MessageRepository');
  }

  public addMessage(message: Message) {
    console.log(this.messageRepository);
  }
}