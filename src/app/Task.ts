import { Time } from "@angular/common";

export interface Task {
  id?: number;
  text: string;
  date: Date;
  time: Time;
  reminder: boolean;
}
