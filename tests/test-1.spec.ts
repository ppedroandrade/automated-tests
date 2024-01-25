import { test, expect, defineConfig } from "@playwright/test";

const apcontasks = {
  name: "cleyton guilherme silva de oliveira",
  age: "07/03/1992",
  cpf: "12797395760",
  email: "teste136@mailinator.com",
  senha: "Senha123;",
  user: "TesteAutomatizado6",
};

const apcontasLogin = {
  Login: "ClienteOne",
  password: "Senha123;",
};

const editAccount = {
  emailEdit: "testeEdit1@mailinator.com",
};

const TitlePage = {
  titlePage: "JBPix",
};

test("test", async ({ page }) => {
  await page.goto("https://jbpix.sysgaming.dev/");
  await expect(await page.title()).toBe(TitlePage.titlePage);

  await page.getByText("Entrar", { exact: true }).first().click();
  await page.getByPlaceholder("Digite seu nome de usuário").click();
  await page
    .getByPlaceholder("Digite seu nome de usuário")
    .fill(apcontasLogin.Login);
  await page.getByPlaceholder("Digite sua senha").fill(apcontasLogin.password);
  await page.getByRole("button", { name: "Entrar" }).click();
  await page.goto("https://jbpix.sysgaming.dev/configuraciones");
  await page.getByPlaceholder("Digite seu e-mail").click();
  await page.getByPlaceholder("Digite seu e-mail").fill("227@kkkk.com");
  await page.getByRole("button", { name: "Salvar dados" }).click();
  await expect(page.locator("dl")).toContainText("227@kkkk.com");

  await page.getByRole("link", { name: "Depositar" }).click();
  await page.getByPlaceholder("Valor do depósito").click();
  await page.getByPlaceholder("Valor do depósito").fill("1,000");
  await page.getByRole("button", { name: "Gerar QR Code R$" }).click();
  await expect(page.getByTitle("QR CODE")).toBeVisible();
  await page.getByRole("button", { name: "Voltar" }).click();
  await page.getByPlaceholder("Valor do depósito").click();
  await page.getByPlaceholder("Valor do depósito").fill("1,000");
  await page.getByRole("button", { name: "Gerar QR Code R$" }).click();
  await expect(page.getByText("O QR Code expirará em: ")).toBeVisible();
  await expect(page.locator("ol")).toContainText(
    "Abra o aplicativo do seu banco"
  );
  await expect(page.locator("ol")).toContainText(
    "Acesse a opção de pagamento por QR Code"
  );
  await expect(page.locator("ol")).toContainText(
    "Aponte a câmera do seu telefone para o QR Code acima"
  );
  await expect(page.locator("ol")).toContainText(
    "Confirme o pagamento e pronto!"
  );
  await expect(page.locator("#conteudo")).toContainText("Copiar link");
  await page.getByRole("button", { name: "Copiar link" }).click();
  await expect(page.getByText("Link copiado com sucesso!")).toBeVisible();
  await page.getByRole("link", { name: "Saque" }).click();
  await page.getByPlaceholder("Valor de saque").click();
  await page.getByPlaceholder("Valor de saque").fill("0,100");
  await page.getByPlaceholder("CPF").click();
  await page.getByPlaceholder("CPF").fill("53907563042");
  await page.getByRole("button", { name: "Enviar" }).click();
  await expect(
    page.getByText(
      "Ocorreu um erro no método de pagamento. Por favor, tente novamente mais tarde."
    )
  ).toBeVisible();
  await page.getByRole("link", { name: "Atividades" }).click();
  await page.locator("#conteudo").getByText("Esportes").click();
  await page.locator("#conteudo").getByText("Cassino").click();
  await page.getByText("Movimentos").click();
  await expect(page.getByText("Saque pelo Pix").first()).toBeVisible();
  await page
    .locator(".movimentos-listar-content > div:nth-child(3) > div:nth-child(2)")
    .click();
  await page.getByText("Situação").click();
  await page.getByText("Valor", { exact: true }).click();
  await page.getByText("Tipo").click();
  await page.getByText("Data").click();
  await page.getByText("Gerar compilação anual:").click();
  await page.getByPlaceholder("Digite o ano").click();
  await page.getByPlaceholder("Digite o ano").fill("2024");
  await page.getByRole("button", { name: "Gerar" }).click();
  await expect(page.getByRole("link", { name: "Voltar" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Imprimir…" })).toBeVisible();
  await page.getByText("Cassino").first().click();
  await page.getByText("Loteria Popular").first().click();
  await expect(
    page.getByRole("img", { name: "Thumb Jb Online" })
  ).toBeVisible();
  await expect(
    page.getByRole("img", { name: "Thumb Loto Online" })
  ).toBeVisible();

  await expect(
    page.getByRole("heading", { name: "Aposte na sua intuição com o" })
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Chegou a hora de fazer aquela" })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Jogue agora!" }).first()
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Jogue agora!" }).nth(1)
  ).toBeVisible();
  await page.getByText("Esportes").first().click();
  await expect(
    page.getByRole("heading", { name: "Minha aposta" })
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Cashout Retirar Aposta" })
  ).toBeVisible();
  await expect(page.getByText("Simples", { exact: true })).toBeVisible();
  await expect(page.getByText("Múltipla", { exact: true })).toBeVisible();
  await expect(page.getByText("Nenhuma aposta selecionada")).toBeVisible();
});
test("Teste2", async ({ page }) => {
  await page.goto("https://jbpix.sysgaming.dev/registro");
  await page.getByPlaceholder("Nome", { exact: true }).click();
  await page.getByPlaceholder("Nome", { exact: true }).fill(apcontasks.name);
  await page.getByPlaceholder("dd/mm/aaaa").fill(apcontasks.age);
  await page.getByPlaceholder("CPF").fill(apcontasks.cpf);
  await page.getByRole("textbox", { name: "Digite seu e-mail" }).click();
  await page
    .getByRole("textbox", { name: "Digite seu e-mail" })
    .fill(apcontasks.email);
  await page
    .getByPlaceholder("Nome de usuário", { exact: true })
    .fill(apcontasks.user);
  await page.locator('input[name="password"]').fill(apcontasks.senha);
  await page.locator("#passwordConfirmation").fill(apcontasks.senha);
  await page.getByLabel("").check();

  await page.getByRole("button", { name: "Criar conta" }).click();
  await expect(
    page.getByRole("link", { name: "Acessar a página" })
  ).toBeVisible();
  await page.getByRole("link", { name: "Detalhes da conta" }).click();

  await expect(page).toHaveURL("https://jbpix.sysgaming.dev/configuraciones");
  await page.getByRole("link", { name: "Validar E-mail" }).click();
  await page.locator(".closer").click();
  await page.getByRole("link", { name: "Validar E-mail" }).click();
  await page.getByRole("link", { name: "Fechar" }).click();
  await page.getByPlaceholder("Digite seu e-mail").click();
  await page.getByPlaceholder("Digite seu e-mail").fill(editAccount.emailEdit);
  await page.getByRole("button", { name: "Salvar dados" }).click();
  await expect(
    page.getByRole("link", { name: "Validar E-mail" })
  ).toBeVisible();
});
