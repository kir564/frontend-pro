import { classNames } from './classNames';

describe('classNames', () => {
  test('with only first param', () => {
    const expected = 'class1';
    expect(classNames('class1')).toBe(expected);
  });

  test('with additional', () => {
    const expected = 'class1 class2';
    expect(classNames('class1', {}, ['class2'])).toBe(expected);
  });
  test('with additional and all mods true', () => {
    const expected = 'class1 class2 class3 class4';
    expect(
      classNames('class1', { class2: true, class3: true }, ['class4']),
    ).toBe(expected);
  });
  test('with additional and  mods with false', () => {
    const expected = 'class1 class3 class4';
    expect(
      classNames('class1', { class2: false, class3: true }, ['class4']),
    ).toBe(expected);
  });
  test('with additional and  mods with undefined', () => {
    const expected = 'class1 class3 class4';
    expect(
      classNames('class1', { class2: undefined, class3: true }, ['class4']),
    ).toBe(expected);
  });
});
