interface ICompany {
  name: string;
  business: string;
  quote: string;
}

interface IAddress {
  city: string;
  street: string;
  suite: string;
  zipcode: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface IUserBase {
  id: number;
  name: string;
  userName: string;
  email: string;
  phone: string;
  website: string;
}

export interface IUser extends IUserBase {
  company?: ICompany;
  address?: IAddress;
}
