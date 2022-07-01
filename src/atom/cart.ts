import {atom} from 'jotai';
import {atomWithStorage} from 'jotai/utils';

export const cartItem = atomWithStorage('cartItem', []);

export const totalPrice = atom(0);
export const totalItems = atom(0);
export const totalPay = atom(0);
