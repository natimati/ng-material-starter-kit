export interface UserModel {
  readonly email: string;
  readonly username: string;
  readonly password: string;
  readonly name: {
    firstName: string;
    lastName: string;
  }
  readonly address: {
   city: string;
   street: string;
   number: string;
   zipcode: string;
  };
  readonly phone: string;
}
