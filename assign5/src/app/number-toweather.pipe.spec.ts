import { NumberToweatherPipe } from './number-toweather.pipe';

describe('NumberToweatherPipe', () => {
  const pipe = new NumberToweatherPipe();
  it('create an instance', () => {
    
    expect(pipe).toBeTruthy();
  });
  it('should match 0 to snowey', () =>{
      expect(pipe.transform(0)).toBe('snowey');
  });

  it('should match 1 to rainy', ()=>{
      expect(pipe.transform(1)).toBe('rainy');
  });
  it('should match any value other than 0 1nd 1',()=>{
   // let test='mydefault'
    expect(pipe.transform(5)).toBe(5);
  });
});
