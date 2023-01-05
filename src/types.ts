export interface CategoryD {
  name: string;
  id: string;
}

export interface FoodD {
  _id: string;
  name: string;
  price: number;
  desc: string;
  image: string;
  category: string;
  quantity: number;
  toppings: [
    {
      name: string;
      price: string;
    }
  ];
}

export interface OrderD {
  _id: string;
  products: [
    {
      productname: string;
      quantity: number;
      topping: [
        {
          name: string;
          price: string;
        }
      ];
    }
  ];
  address: {
    apartmant: string;
  };
  status: string;
  phoneNumber: number;
  cashMethod: string;
}
