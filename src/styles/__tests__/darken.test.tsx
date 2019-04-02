import {darken} from '..';

describe('darken(hexColor, amount)', () => {
  it("doesn't modify hex black", () => {
    expect(darken('#000000', 0.1)).toEqual('#000000');
  });

  it("doesn't overshoot if an above-range amount is supplied", () => {
    expect(darken('#007fff', 1.5)).toEqual('#000000');
  });

  it("doesn't overshoot if a below-range amount is supplied", () => {
    expect(darken('#007fff', -0.1)).toEqual('#007fff');
  });

  it('darkens hex white to black when amount is 1', () => {
    expect(darken('#ffffff', 1)).toEqual('#000000');
  });

  it('darkens hex white by 10% when amount is 0.1', () => {
    expect(darken('#ffffff', 0.1)).toEqual('#e5e5e5');
  });

  it('darkens hex red by 50% when amount is 0.5', () => {
    expect(darken('#ff0000', 0.5)).toEqual('#7f0000');
  });

  it('darkens hex grey by 50% when amount is 0.5', () => {
    expect(darken('#7f7f7f', 0.5)).toEqual('#3f3f3f');
  });

  it("doesn't modify hex colors when amount is 0", () => {
    expect(darken('#ffffff', 0)).toEqual('#ffffff');
  });
});
