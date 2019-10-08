import { Fixture } from './fixture';
import { Channel } from './channel';
export class Device {

  channels: Array<Channel> = [];

  constructor(
    public fixture: Fixture,
    public name: string,
    public startAddress: number,
    public id: number
  ) {
    this.fixture.channelNames.forEach((channelName, i) => {
      const channel = new Channel(channelName, 0, i + startAddress)
      this.channels.push(channel);
    })
  }

  getNextAddress(): number {
    return this.startAddress + this.fixture.channelNames.length;
  }
}
