export default class CustomSet {
  constructor(private collection: any[] = []) {}

  // check if a value already exists on the collection
  has(value: any) {
    return this.collection.indexOf(value) >= 0;
  }

  // get values of the collection
  values() {
    return this.collection;
  }

  // add a unique value into the collection
  add(value: any) {
    if (this.has(value)) return false;

    this.collection.push(value);

    return true;
  }

  // remove a value from the collection
  remove(value: any) {
    if (!this.has(value)) return false;

    const index = this.collection.indexOf(value);

    this.collection.splice(index, 1);

    return true;
  }

  // get the size of the collection
  size() {
    return this.collection.length;
  }

  // union of two sets
  union(otherSet: CustomSet) {
    const unionSet = new Set([...this.collection, ...otherSet.values()]);
    return new CustomSet([...unionSet]);
  }

  // intersection of two sets
  intersection(otherSet: CustomSet) {
    const intersectionSet: any[] = [];

    this.collection.forEach((element) => {
      if (otherSet.has(element)) intersectionSet.push(element);
    });

    return new CustomSet(intersectionSet);
  }
}
