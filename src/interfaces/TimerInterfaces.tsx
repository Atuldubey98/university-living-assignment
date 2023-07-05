export interface NewTimer {
  id: string;
  eventName: string;
  minutes: number;
  seconds: number;
}

export interface Timer {
  id: string;
  eventName: string;
  initialSeconds: number;
  seconds: number;
  isPaused: boolean;
}
