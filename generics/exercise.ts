// setItem(key: string, item: T) // should create a new key-value pair

// getItem(key: string) // should retrieve the value of the provided key
// clear() // should remove all key-value pairs
// printMap() // should output key-value pairs

class MyMap<T> {
  private map: { [key: string]: T } = {};

  public setItem(key: string, item: T): void {
    this.map[key] = item;
  }

  public getItem(key: string): T {
    return this.map[key];
  }

  public clear(): void {
    this.map = {};
  }

  public printMap(): void {
    Object.keys(this.map).forEach((key: string) => console.log(key, this.map[key]));
  }
}

const stringMap = new MyMap<string>();

stringMap.setItem('one', 'two');
stringMap.setItem('three', 'four');

console.log(stringMap.getItem('one'));

stringMap.printMap();

stringMap.clear();

stringMap.printMap();
