import { Component } from '@angular/core';
import { Message } from './message.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  messages: Message[] = [];

  constructor() {}

  sendMessage(messageContent: string, userId: string) {
    const userIdNumber = parseInt(userId, 10);
    if (!isNaN(userIdNumber)) {
      if (messageContent.trim() !== '') {
        const messageId = this.generateUniqueId();
  
        const newMessage: Message = {
          id: messageId,
          text: messageContent.trim(),
          userId: userIdNumber,
          timestamp: new Date(),
          userType: 'user',
        };
        
        this.messages.push(newMessage);
      } else {
        console.error('Message content cannot be empty.');
      }
    } else {
      console.error('Invalid userId:', userId);
    }
  }
  

  private generateUniqueId(): string {
    return 'unique-id'; 
  }
}
