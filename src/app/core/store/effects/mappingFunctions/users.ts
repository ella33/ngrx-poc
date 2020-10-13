import { IUser } from '@app/core/types/users.types';

export const mapServerToLocalUserDetails = (user): IUser => ({
  id: user.id,
  name: user.name,
  userName: user.username,
  email: user.email,
  phone: user.phone,
  website: user.website,
  company: {
    name: user.company.name,
    business: user.company.bs,
    quote: user.company.catchPhrase,
  },
  address: {
    city: user.address.city,
    street: user.address.street,
    suite: user.address.suite,
    zipcode: user.address.zipcode,
    coordinates: {
      lat: Number(user.address.geo.lat),
      lng: Number(user.address.geo.lng),
    },
  },
});

export const mapServerToLocalUsers = (data: any) => data.map(mapServerToLocalUserDetails);
