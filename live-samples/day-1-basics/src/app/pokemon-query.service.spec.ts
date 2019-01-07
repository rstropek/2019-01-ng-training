import { TestBed } from '@angular/core/testing';

import { PokemonQueryService } from './pokemon-query.service';

describe('PokemonQueryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PokemonQueryService = TestBed.get(PokemonQueryService);
    expect(service).toBeTruthy();
  });
});
