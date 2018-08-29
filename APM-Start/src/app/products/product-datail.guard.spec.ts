import { TestBed, async, inject } from '@angular/core/testing';

import { ProductDatailGuard } from './product-datail.guard';

describe('ProductDatailGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductDatailGuard]
    });
  });

  it('should ...', inject([ProductDatailGuard], (guard: ProductDatailGuard) => {
    expect(guard).toBeTruthy();
  }));
});
