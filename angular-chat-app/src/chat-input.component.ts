import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.css'],
})
export class ChatInputComponent {
  @Output() messageSent = new EventEmitter<string>();
  messageText: string = '';
  showEmojiPicker: boolean = false;

  constructor() {}

  sendMessage() {
    if (this.messageText.trim() !== '') {
      this.messageSent.emit(this.messageText);
      this.messageText = '';

      setTimeout(() => {
        const automaticResponse = "This is an automatic response. Anna is not logged in this chat.";
        this.messageSent.emit(automaticResponse);
      }, 1000);
    }
  }

  toggleEmojiPicker() {
    this.showEmojiPicker = !this.showEmojiPicker;
  }

  addEmoji(emoji: string) {
    this.messageText += emoji;
  }
}
