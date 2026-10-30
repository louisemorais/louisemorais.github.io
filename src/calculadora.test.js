const { somar, subtrair, multiplicar, dividir } = require("./calculadora");

describe("operações matemáticas", () => {
  test("soma dois números", () => {
    expect(somar(2, 3)).toBe(5);
  });

  test("subtrai dois números", () => {
    expect(subtrair(7, 4)).toBe(3);
  });

  test("multiplica dois números", () => {
    expect(multiplicar(3, 4)).toBe(12);
  });

  test("divide dois números", () => {
    expect(dividir(10, 2)).toBe(5);
  });

  test("não permite divisão por zero", () => {
    expect(() => dividir(10, 0)).toThrow("Não é possível dividir por zero.");
  });
});
