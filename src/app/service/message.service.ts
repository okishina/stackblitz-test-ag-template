import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = []

  add(message: string) {
    this.messages.push(message)
  }

  clear() {
    this.messages = []
  }

  getTop10() {
    return this.messages.slice(-10)
  }
}
