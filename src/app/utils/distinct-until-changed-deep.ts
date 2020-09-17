import { distinctUntilChanged } from 'rxjs/operators';
import { MonoTypeOperatorFunction } from 'rxjs';

export function distinctUntilChangedDeep<T>(): MonoTypeOperatorFunction<T> {
  return distinctUntilChanged((a, b) => JSON.stringify(a) === JSON.stringify(b));
}
