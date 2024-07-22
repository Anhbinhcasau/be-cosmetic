//collection
export const USERS_MODEL = 'users';

export const HEADER = {
  CLIENT_ID: 'CLIENT_ID',
  AUTHORIZATION: 'authorization',
  REFRESHTOKEN: 'x-rtoken-id',
};

export enum StatusOrderEnum{
  IN_PROGRESS = 1,
  DELIVERING = 2,
  COMPLETED = 3,
  CANCELED = 4,
}

export enum Roles{
  Admin = "Admin",
  User = "User"
}