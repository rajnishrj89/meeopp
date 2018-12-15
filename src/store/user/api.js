import { usersRef } from '../../config/firebase';

export const createProfile = credentials => {
  usersRef.push().set(credentials);
};