import {Events} from './Events'

type Call = [string, number];

export const eventsTest = () => {
  const events = new Events();
  
  events.on('ping', () => {
    console.log('pong!');
  })

  events.on('ding', () => {
    console.log('dong!')
  })

  const calls: Call[] = [
    ['ping', 2000],
    ['ding', 5000],
    ['ding', 1000],
    ['ping', 2000],
  ];

  calls.forEach(([eventName, ms]) => {
    setTimeout(() => events.trigger(eventName), ms)
  })

}