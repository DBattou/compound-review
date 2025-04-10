import fullList from './full-user-list.json';

export type Contact = {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address: string;
};
export type Contacts = Contact[];

const FULL_USER_LIST: Contacts = fullList;

export const USER_LIST: Contacts = FULL_USER_LIST.slice(0, 3);
