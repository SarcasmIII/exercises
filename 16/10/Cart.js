// @ts-check

// import _ from 'lodash';

// BEGIN (write your solution here)

class Cart {
  constructor() {
    this.items = [];
  }

  getItems() {
    return this.items;
  }

  addItem(good, count) {
    const item = { good, count };
    this.items.push(item);
  }

  getCost() {
    const items = this.getItems();
    const cost = items.reduce((acc, item) => acc + item.good.price * item.count, 0);
    return cost;
  }

  getCount() {
    const items = this.getItems();
    const sumCount = items.reduce((acc, item) => acc + item.count, 0);
    return sumCount;
  }
}

export default Cart;
// END
