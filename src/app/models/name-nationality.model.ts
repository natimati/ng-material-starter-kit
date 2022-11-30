export interface NameNationalityModel {
  readonly name: string;
  readonly country: {
    country_id: string;
    probability: number
  }[];
}
