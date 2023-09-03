import { Component, OnInit, Input } from '@angular/core';
import { Message } from './message.model';
import { MessageService } from './message.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css'],
})
export class MessageListComponent implements OnInit {
  @Input() messages: Message[] = [];
  messageText: string = '';

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {}

  sendMessage(): void {
    const trimmedMessageText = this.messageText.trim();
    if (!trimmedMessageText) {
      return; // Don't send empty messages
    }
  
    const messageId = uuidv4();
    const newMessage: Message = {
      id: messageId,
      text: trimmedMessageText,
      timestamp: new Date(),
      userId: 1,
      userType: 'user', // Add userType property with an appropriate value
    };
  
    this.messageService.addMessage(newMessage);
    this.messages = this.messageService.getMessages();
    this.messageText = '';
  }
  
  deleteConversation(): void {
    const systemMessage: Message = {
      id: uuidv4(),
      text: 'You left conversation.',
      timestamp: new Date(),
      userId: 0,
      userType: 'automatic',
    };
  
    this.messages = [systemMessage];
    this.messageService.deleteConversation();
  }
  

}
