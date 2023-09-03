import { Injectable } from '@angular/core';
import { Message } from './message.model';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private messages: Message[] = [];

  constructor() {}

  addMessage(message: Message): void {
    if (!message) {
      throw new Error('Message cannot be null or undefined');
    }

    this.messages.push(message);
  }

  getMessages(): Message[] {
    return this.messages;
  }

  deleteConversation() {
    this.messages = [];
  }
}
