import renderer from "react-test-renderer";

// UI
import { LinkTest } from "./snapshot";

describe("Teste de Snapshot com Jest", () => {
  /*
   * Regenerando snapshots

   * jest --updateSnapshot: atualiza o snapshot gerado.
   * flags: -u
   *
   * Caso queira atualizar apenas um teste especifico: --testNamePattern
   *
   * Você pode atualizar os testes no modo watch com:
   * u: atualiza todos os snapshots.
   * i: atualiza o snapshot que falhou.
   *
   */

  it("toMatchSnapshot", () => {
    const tree = renderer.create(<LinkTest href="http://www.facebook.com">Facebook</LinkTest>).toJSON();

    expect(tree).toMatchSnapshot();

    // Mockando valores, para retornar um valor fixo,
    // para não falhar os testes devido a geração dos valores diferentes por padrão.

    let random_id = () => Math.floor(Math.random() * 20);

    random_id = jest.fn(() => 7);
    Date.now = jest.fn(() => 1_482_363_367_071);

    // Gravando snapshot de props
    const user = {
      createdAt: Date.now,
      id: random_id,
      name: "LeBron James",
    };

    expect(user).toMatchSnapshot(user);
  });
});

// ==================================================

/*
   * toMatchInlineSnapshot:

   * tem a mesma função do toMatchSnapshot(),
   * com a diferença de que ele não cria um arquivo .snap para gravar o teste,
   * ele escreve o resultado do teste na propria funçao invocada, como parametro em um template-literal.
   * 
   */

it("toInlineSnapshot", () => {
  const tree = renderer.create(<LinkTest href="http://www.facebook.com">Facebook</LinkTest>).toJSON();

  expect(tree).toMatchInlineSnapshot(`
<a
  href="http://www.facebook.com"
  onClick={[Function]}
  onMouseEnter={[Function]}
  onTouchStart={[Function]}
>
  Facebook
</a>
`);
});
