import {Events} from './Events'

export const eventsTest = () => {
  const events = new Events();
  
  events.on('ping', () => {
    console.log('pong!');
  })

  events.on('ding', () => {
    console.log('dong!')
  })

  
  const calls = [
    ['ping', 2000],
    ['ding', 5000],
    ['ding', 1000],
    ['ping', 2000],
  ]; 

  calls.forEach(([eventName, ms]) => {
    // uncomment line and FIX the error
    // setTimeout(() => events.trigger(eventName), ms)
  })

}