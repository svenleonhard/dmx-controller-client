import { Fixture } from './fixture';
import { Channel } from './channel';
export class Device {
  constructor(
    public fixture: Fixture,
    public name: string,
    public startAddress: number,
    public id: number,
    public channels: Array<Channel>
  ) {}
}
