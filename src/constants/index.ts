//collection
export const USERS_MODEL = 'users';

export const HEADER = {
  CLIENT_ID: 'CLIENT_ID',
  AUTHORIZATION: 'authorization',
  REFRESHTOKEN: 'x-rtoken-id',
};

export enum StatusOrderEnum{
  GETTING_ITEM = 1,
  IN_PROGRESS = 2,
  PACKAGING = 3,
  DELIVERING = 4,
  COMPLETED = 5,
  CANCELED = 6,
}

export enum Roles{
  Admin = "Admin",
  User = "User"
}