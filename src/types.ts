export interface CategoryD {
  name: {
    en: string;
    ar: string;
  };
  _id: string;
}

export interface FoodD {
  _id?: string;
  name: {
    en: string;
    ar: string;
  };
  price: string;
  desc: {
    en: string;
    ar: string;
  };
  image?: string;
  category: string;
  quantity?: number;
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
      name: {
        en: string;
      };
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
    distruct: string;
    street: string;
    building: string;
    floor: string;
    office: string;
    additional: string;
    house: string;
  };
  status: string;
  phoneNumber: number;
  cashMethod: string;
  specialReq: string;
}
export interface SearchResultData {
  description: string;
  img: string;
  lat: number;
  location: string;
  long: number;
  price: string;
  star: number;
  title: string;
  total: string;
}
export interface ViewportData {
  width: string;
  height: string;
  latitude: number;
  longitude: number;
  zoom: number;
}
export interface LocationData {
  latitude: number;
  longitude: number;
}
