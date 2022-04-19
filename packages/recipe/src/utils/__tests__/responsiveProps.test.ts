import responsiveProps from '../responsiveProps';

describe('responsiveProps', () => {
  it('should maps responsive props to media queries that apply *between* breakpoints', () => {
    expect(
      responsiveProps({layout: {base: 'cluster', medium: 'basic', large: 'split'}}, 'layout')
    ).toEqual({
      layout: {
        baseToMedium: 'cluster',
        mediumToLarge: 'basic',
        large: 'split',
      },
    });

    expect(responsiveProps({layout: {base: 'cluster', large: 'split'}}, 'layout')).toEqual({
      layout: {
        baseToLarge: 'cluster',
        large: 'split',
      },
    });

    expect(responsiveProps({layout: {base: 'cluster', medium: 'basic'}}, 'layout')).toEqual({
      layout: {
        baseToMedium: 'cluster',
        medium: 'basic',
      },
    });
  });

  it('should map multiple variants in one shot', () => {
    expect(
      responsiveProps(
        {
          layout: {base: 'cluster', medium: 'basic'},
          alignX: {base: 'center', medium: 'right'},
          alignY: {base: 'top', large: 'bottom'},
        },
        'layout',
        'alignX',
        'alignY'
      )
    ).toEqual({
      layout: {
        baseToMedium: 'cluster',
        medium: 'basic',
      },
      alignX: {baseToMedium: 'center', medium: 'right'},
      alignY: {baseToLarge: 'top', large: 'bottom'},
    });
  });

  it('should leave props not included in variant names untouched', () => {
    expect(
      responsiveProps(
        {
          layout: {base: 'cluster', medium: 'basic'},
          alignX: {base: 'center', medium: 'right'},
          alignY: {base: 'top', large: 'bottom'},
        },
        'layout'
      )
    ).toEqual({
      layout: {
        baseToMedium: 'cluster',
        medium: 'basic',
      },
      alignX: {base: 'center', medium: 'right'},
      alignY: {base: 'top', large: 'bottom'},
    });
  });

  it('should leave props with non-responsive values untouched', () => {
    expect(
      responsiveProps(
        {
          layout: 'cluster',
          alignX: 'center',
          alignY: {base: 'top', large: 'bottom'},
        },
        'layout',
        'alignX',
        'alignY'
      )
    ).toEqual({
      layout: 'cluster',
      alignX: 'center',
      alignY: {baseToLarge: 'top', large: 'bottom'},
    });
  });
});
