import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MessageListComponent } from './message-list.component';
import { ChatInputComponent } from './chat-input.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageListComponent,
    ChatInputComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
