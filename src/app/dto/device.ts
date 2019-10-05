import { Fixture } from './fixture';
export class Device {
  constructor(
    public fixture: Fixture,
    public name: string,
    public startAddress: number,
    public id: number
  ) {}
}
