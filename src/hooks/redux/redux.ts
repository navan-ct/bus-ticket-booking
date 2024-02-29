import {
  type TypedUseSelectorHook,
  useDispatch as _useDispatch,
  useSelector as _useSelector
} from 'react-redux';

import { type StoreState, type StoreDispatch } from '@/store';

export const useDispatch: () => StoreDispatch = _useDispatch;
export const useSelector: TypedUseSelectorHook<StoreState> = _useSelector;
