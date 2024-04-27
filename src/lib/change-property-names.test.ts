import { translatePropertyName } from './change-property-names';

describe('translatePropertyName', () => {
  it('should change property names according to translations', () => {
    const obj = {
      name: 'C-3PO',
      height: '167',
      mass: '75',
      hair_color: 'n/a',
    };

    const translations = {
      name: 'nombre',
      height: 'altura',
      mass: 'masa',
      hair_color: 'color_del_cabello',
    };

    const result = translatePropertyName(obj, translations);

    expect(result).toEqual({
      nombre: 'C-3PO',
      altura: '167',
      masa: '75',
      color_del_cabello: 'n/a',
    });
  });

  it('should preserve properties not in translations', () => {
    const obj = {
      name: 'C-3PO',
      height: '167',
      mass: '75',
      hair_color: 'n/a',
    };

    const translations = {
      name: 'nombre',
      height: 'altura',
    };

    const result = translatePropertyName(obj, translations);

    expect(result).toEqual({
      nombre: 'C-3PO',
      altura: '167',
      mass: '75',
      hair_color: 'n/a',
    });
  });
});

describe('translatePropertyName', () => {
  it('should return an empty object if provided with an empty object', () => {
    const obj = {};
    const translations = {};
    const result = translatePropertyName(obj, translations);
    expect(result).toEqual({});
  });

  it('should return the same object if no translations are provided', () => {
    const obj = {
      name: 'C-3PO',
      height: '167',
      mass: '75',
      hair_color: 'n/a',
    };
    const translations = {};
    const result = translatePropertyName(obj, translations);
    expect(result).toEqual(obj);
  });

  it('should return the same object if translations are provided but no matching keys are found', () => {
    const obj = {
      name: 'C-3PO',
      height: '167',
      mass: '75',
      hair_color: 'n/a',
    };
    const translations = {
      gender: 'sexo',
      planet: 'planeta',
    };
    const result = translatePropertyName(obj, translations);
    expect(result).toEqual(obj);
  });

  it('should ignore additional properties in the translations object', () => {
    const obj = {
      name: 'C-3PO',
      height: '167',
      mass: '75',
      hair_color: 'n/a',
    };
    const translations = {
      name: 'nombre',
      height: 'altura',
      mass: 'masa',
      hair_color: 'color_del_cabello',
      gender: 'sexo',
    };
    const result = translatePropertyName(obj, translations);
    expect(result).toEqual({
      nombre: 'C-3PO',
      altura: '167',
      masa: '75',
      color_del_cabello: 'n/a',
    });
  });
});

