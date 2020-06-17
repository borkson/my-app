export interface TableUsers {
  id: number;
  name: string;
  username: string;
  email?: string;
  address: IAddressApi;
  phone?: string;
  website?: string;
  company?: ICompanyApi;
}

export interface IAddressApi {
  street?: string;
  suite?: string;
  city: string;
  zipcode?: string;
  geo?: IGeoApi;
}

export interface IGeoApi {
  lat: string;
  lng: string;
}
export interface ICompanyApi {
  name: string;
  catchPhrase: string;
  bs: string;
}
