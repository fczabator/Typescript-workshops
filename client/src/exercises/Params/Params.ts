export class Params<T> {
  constructor(private data: any) {}

  get = (key: any): any => {
    return this.data[key];
  };

  set(update: any): void {
    Object.assign(this.data, update);
  }

  getAll(): any {
    return this.data;
  }
}
