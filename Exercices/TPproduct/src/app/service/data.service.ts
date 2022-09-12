import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  static getData() {
    throw new Error('Method not implemented.');
  }

  data: any[] = [
    {
      color: 'violet',

      department: 'Grocery',

      productName: 'Tasty Frozen Towels',

      price: '952.00',

      productAdjective: 'Practical',

      productMaterial: 'Frozen',

      product: 'Keyboard',

      img: 'https://mohamed-bucket-soft.s3.eu-west-3.amazonaws.com/picture/image1.jpeg',
    },

    {
      color: 'plum',

      department: 'Games',

      productName: 'Gorgeous Wooden Chips',

      price: '984.00',

      productAdjective: 'Gorgeous',

      productMaterial: 'Cotton',

      product: 'Pants',

      img: 'https://mohamed-bucket-soft.s3.eu-west-3.amazonaws.com/picture/image2.png',
    },

    {
      color: 'olive',

      department: 'Books',

      productName: 'Generic Soft Pants',

      price: '919.00',

      productAdjective: 'Sleek',

      productMaterial: 'Fresh',

      product: 'Ball',

      img: 'https://mohamed-bucket-soft.s3.eu-west-3.amazonaws.com/picture/image3.png',
    },

    {
      color: 'magenta',

      department: 'Industrial',

      productName: 'Fantastic Steel Chair',

      price: '452.00',

      productAdjective: 'Awesome',

      productMaterial: 'Steel',

      product: 'Fish',

      img: 'https://mohamed-bucket-soft.s3.eu-west-3.amazonaws.com/picture/image4.webp',
    },

    {
      color: 'mint green',

      department: 'Electronics',

      productName: 'Unbranded Frozen Chair',

      price: '93.00',

      productAdjective: 'Awesome',

      productMaterial: 'Plastic',

      product: 'Salad',

      img: 'https://mohamed-bucket-soft.s3.eu-west-3.amazonaws.com/picture/image5.jpeg',
    },

    {
      color: 'orchid',

      department: 'Electronics',

      productName: 'Handcrafted Concrete Bacon',

      price: '660.00',

      productAdjective: 'Intelligent',

      productMaterial: 'Fresh',

      product: 'Pizza',

      img: 'https://mohamed-bucket-soft.s3.eu-west-3.amazonaws.com/picture/image6.jpeg',
    },

    {
      color: 'gold',

      department: 'Electronics',

      productName: 'Handcrafted Soft Bike',

      price: '520.00',

      productAdjective: 'Refined',

      productMaterial: 'Metal',

      product: 'Pants',

      img: 'https://mohamed-bucket-soft.s3.eu-west-3.amazonaws.com/picture/image7.jpeg',
    },

    {
      color: 'grey',

      department: 'Books',

      productName: 'Small Fresh Shoes',

      price: '592.00',

      productAdjective: 'Rustic',

      productMaterial: 'Concrete',

      product: 'Ball',

      img: 'https://mohamed-bucket-soft.s3.eu-west-3.amazonaws.com/picture/image8.jpeg',
    },

    {
      color: 'mint green',

      department: 'Computers',

      productName: 'Rustic Plastic Chips',

      price: '923.00',

      productAdjective: 'Tasty',

      productMaterial: 'Fresh',

      product: 'Tuna',

      img: 'https://mohamed-bucket-soft.s3.eu-west-3.amazonaws.com/picture/image9.jpeg',
    },

    {
      color: 'turquoise',

      department: 'Movies',

      productName: 'Unbranded Wooden Chips',

      price: '270.00',

      productAdjective: 'Incredible',

      productMaterial: 'Concrete',

      product: 'Fish',

      img: 'https://mohamed-bucket-soft.s3.eu-west-3.amazonaws.com/picture/image10.jpeg',
    },

    {
      color: 'tan',

      department: 'Grocery',

      productName: 'Refined Soft Chair',

      price: '55.00',

      productAdjective: 'Small',

      productMaterial: 'Frozen',

      product: 'Ball',

      img: 'https://mohamed-bucket-soft.s3.eu-west-3.amazonaws.com/picture/image11.jpeg',
    },

    {
      color: 'mint green',

      department: 'Clothing',

      productName: 'Rustic Metal Ball',

      price: '245.00',

      productAdjective: 'Gorgeous',

      productMaterial: 'Wooden',

      product: 'Computer',

      img: 'https://mohamed-bucket-soft.s3.eu-west-3.amazonaws.com/picture/image12.jpeg',
    },

    {
      color: 'purple',

      department: 'Clothing',

      productName: 'Licensed Fresh Car',

      price: '659.00',

      productAdjective: 'Licensed',

      productMaterial: 'Wooden',

      product: 'Car',

      img: 'https://mohamed-bucket-soft.s3.eu-west-3.amazonaws.com/picture/image13.jpeg',
    },

    {
      color: 'orange',

      department: 'Industrial',

      productName: 'Intelligent Cotton Chair',

      price: '994.00',

      productAdjective: 'Licensed',

      productMaterial: 'Wooden',

      product: 'Car',

      img: 'https://mohamed-bucket-soft.s3.eu-west-3.amazonaws.com/picture/image14.jpeg',
    },

    {
      color: 'purple',

      department: 'Garden',

      productName: 'Awesome Wooden Sausages',

      price: '179.00',

      productAdjective: 'Fantastic',

      productMaterial: 'Plastic',

      product: 'Towels',

      img: 'https://mohamed-bucket-soft.s3.eu-west-3.amazonaws.com/picture/image15.jpeg',
    },

    {
      color: 'maroon',

      department: 'Shoes',

      productName: 'Small Rubber Pants',

      price: '256.00',

      productAdjective: 'Incredible',

      productMaterial: 'Frozen',

      product: 'Sausages',

      img: 'https://mohamed-bucket-soft.s3.eu-west-3.amazonaws.com/picture/image16.jpeg',
    },

    {
      color: 'blue',

      department: 'Grocery',

      productName: 'Gorgeous Frozen Shoes',

      price: '12.00',

      productAdjective: 'Refined',

      productMaterial: 'Fresh',

      product: 'Ball',

      img: 'https://mohamed-bucket-soft.s3.eu-west-3.amazonaws.com/picture/image17.jpeg',
    },

    {
      color: 'green',

      department: 'Outdoors',

      productName: 'Practical Steel Shoes',

      price: '409.00',

      productAdjective: 'Licensed',

      productMaterial: 'Plastic',

      product: 'Chips',

      img: 'https://mohamed-bucket-soft.s3.eu-west-3.amazonaws.com/picture/image18.jpeg',
    },

    {
      color: 'maroon',

      department: 'Tools',

      productName: 'Unbranded Steel Soap',

      price: '0.00',

      productAdjective: 'Intelligent',

      productMaterial: 'Cotton',

      product: 'Tuna',

      img: 'https://mohamed-bucket-soft.s3.eu-west-3.amazonaws.com/picture/image19.jpeg',
    },

    {
      color: 'orange',

      department: 'Home',

      productName: 'Unbranded Metal Pizza',

      price: '44.00',

      productAdjective: 'Ergonomic',

      productMaterial: 'Cotton',

      product: 'Tuna',

      img: 'https://mohamed-bucket-soft.s3.eu-west-3.amazonaws.com/picture/image20.jpeg',
    },
  ];
  getData():any[]{
    return this.data;
  }

  getDataId(id:any):any[]{
    return this.data[id];
  }

  constructor() {}
}
