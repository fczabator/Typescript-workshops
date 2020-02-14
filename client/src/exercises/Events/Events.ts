export class Events {
  events: any = {};

  on = (eventName: any, callback: any): any => {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  };

  trigger = (eventName: any): any => {
    const handlers = this.events[eventName];

    if (!handlers || handlers.length === 0) {
      return;
    }

    handlers.forEach((callback: any) => {
      callback();
    });
  };
}
