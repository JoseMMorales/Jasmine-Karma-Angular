import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of, throwError } from 'rxjs';
import { SharingService } from 'src/app/core/services/sharing.service';
import { Character } from '../models/character';

import { LazyComponent } from './lazy.component';

const mortyInfo = {
  "id": 2,
  "name": "Morty Smith",
  "status": "Alive",
  "species": "Human",
  "type": "",
  "gender": "Male",
  "origin": {
    "name": "Earth",
    "url": "https://rickandmortyapi.com/api/location/1"
  },
  "location": {
    "name": "Earth",
    "url": "https://rickandmortyapi.com/api/location/20"
  },
  "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
  "episode": [
    "https://rickandmortyapi.com/api/episode/1",
    "https://rickandmortyapi.com/api/episode/2",
  ],
  "url": "https://rickandmortyapi.com/api/character/2",
  "created": "2017-11-04T18:50:21.651Z"
};

const mockedSharingService: {
  getInformation: () => Observable<string[]>,
  setInformation: () => void,
  getMeAMorty: () => Observable<Character>
} = {
  getInformation: () => of(['']),
  setInformation: () => {},
  getMeAMorty: () => of(mortyInfo)
}

describe('LazyComponent', () => {
  let lazyComponent: LazyComponent;
  let fixture: ComponentFixture<LazyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyComponent ],
      imports: [ HttpClientModule ], // Add HttpLientModule
      providers: [
        {
          provide: SharingService,
          useValue: mockedSharingService
        }
      ] // Add Service mocked to be tested using mockedValues
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyComponent);
    lazyComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the LazyComponent', () => {
    expect(lazyComponent).toBeTruthy();
  });

  it(`should have an empty variable called emptyVAriable with vale []`, () => {
    expect(lazyComponent.emptyVariable).toBeTruthy();
    expect(lazyComponent.emptyVariable).toEqual([]);
  });

  it(`should render a message with value lazy works!`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('p').textContent
    ).toContain('lazy works!');
  });

  it('should call getMeAMorty, getMeAMorty()', () => {
    //Adding spy to a constant bcs we can´t spy twice the same object
    const getMeAMortySpy = spyOn(mockedSharingService, 'getMeAMorty');

    // Happy Path
    getMeAMortySpy.and.returnValue(of(mortyInfo));
    lazyComponent.getMorty();
    expect(mockedSharingService.getMeAMorty).toHaveBeenCalled();
    expect(lazyComponent.mortyValue).toEqual(mortyInfo);

    //Sad Path
    getMeAMortySpy.and.returnValue(throwError(() => 'server error'));
    lazyComponent.mortyValue = null; // Clean the object
    lazyComponent.getMorty();
    expect(mockedSharingService.getMeAMorty).toHaveBeenCalled();
    expect(lazyComponent.mortyValue).toBeFalsy();
  });


  // This test would be used to test a specific function in
  // lazy component(sum function)!!

  // it('should add two numbers, sum(num1: number, num2: number)', () => {
  //   const mockedData = { num1: 1, num2: 2 };
  //   const expectedResult = 3;
  //   const result = lazyComponent.sum(mockedData.num1, mockedData.num2);
  //   expect(result).toEqual(expectedResult);
  // })
});
