export class JoinUsEvent {
  name: string;
  date: string;
  hour: string;
  description: string;

  constructor(name = '', date = '', hour = '', description = '') {
    this.name = name;
    this.date = date;
    this.hour = hour;
    this.description = description;
  }
}
