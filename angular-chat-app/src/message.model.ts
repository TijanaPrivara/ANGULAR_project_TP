export class Message {
  id: string;       
  text: string;
  timestamp: Date;
  userId: number;
  userType: 'user' | 'automatic';
  systemMessage?: string;

  constructor(id: string, text: string, timestamp: Date, userId: number, userType: 'user' | 'automatic', systemMessage?: string) {
    this.id = id;
    this.text = text;
    this.timestamp = timestamp;
    this.userId = userId;
    this.userType = userType;
    this.systemMessage = systemMessage;
  }
}
