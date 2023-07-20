export class Table {
  header: any[] = [];
  body: any[] = [];

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
