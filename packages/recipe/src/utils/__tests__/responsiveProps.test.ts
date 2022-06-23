import responsiveProps from '../responsiveProps';

describe('responsiveProps', () => {
  it('should map responsive props to media queries that apply *between* breakpoints', () => {
    expect(
      responsiveProps({layout: {base: 'cluster', medium: 'basic', large: 'split'}}, false, 'layout')
    ).toEqual({
      layout: {
        baseToMedium: 'cluster',
        mediumToLarge: 'basic',
        large: 'split',
      },
    });

    expect(responsiveProps({layout: {base: 'cluster', large: 'split'}}, false, 'layout')).toEqual({
      layout: {
        baseToLarge: 'cluster',
        large: 'split',
      },
    });

    expect(responsiveProps({layout: {base: 'cluster', medium: 'basic'}}, false, 'layout')).toEqual({
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
        false,
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
        false,
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
        false,
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

  it('should prefix an @ symbol if required by stitches', () => {
    expect(
      responsiveProps({layout: {base: 'cluster', medium: 'basic', large: 'split'}}, true, 'layout')
    ).toEqual({
      layout: {
        '@baseToMedium': 'cluster',
        '@mediumToLarge': 'basic',
        '@large': 'split',
      },
    });
  });
});
