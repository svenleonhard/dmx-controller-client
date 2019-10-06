import { Channel } from './channel';
export class Fixture {
  constructor(
    public name: string,
    public manufactor: string,
    public numberOfChannels: number,
    public id: number,
    public channelNames: Array<string>
  ) {}
}
