Aqui está o seu arquivo Markdown organizado e formatado corretamente. Apliquei a hierarquia de títulos, blocos de código para os comandos e templates, e listas para melhorar a legibilidade e facilitar a navegação dos desenvolvedores.

---

# Guia de Contribuição

Obrigado por querer contribuir com este projeto!

Este repositório é um front-end em **React + TypeScript + Vite + TailwindCSS**, organizado em **arquitetura modular** (`src/modules/*`).

## 🌱 Visão Geral da Arquitetura

* **`src/app`**: Camada de aplicação (roteamento, providers globais, store futura).
* **`src/modules`**: Cada módulo de domínio é uma feature (ex.: `auth`, `dashboard`, `photos`).
* **`src/shared`**: Componentes e utilitários reutilizáveis entre módulos (ex.: `Button`).

**Diretrizes principais:**

* Componentes funcionais + hooks.
* Separar **UI**, **lógica de apresentação** e **acesso a dados**.
* Código claro, simples e com nomes descritivos (em inglês), mensagens exibidas ao usuário em português.

---

## 🔧 Preparando o Ambiente

**1. Clone o repositório**

```bash
git clone https://github.com/seu-usuario/photo-opp.git
cd photo-opp

```

**2. Instale as dependências**

```bash
npm install

```

**3. Rode o projeto**

```bash
npm run dev

```

**4. Rode o lint**

```bash
npm run lint

```

---

## 🌿 Fluxo de Trabalho com Git

**Mantendo sua branch atualizada:**

```bash
git checkout main
git pull origin main

```

**Criando uma nova feature ou correção:**
Use nomes descritivos para as branches (ex.: `feature/auth-loading-page`, `fix/login-error-message`, `chore/update-deps`).

```bash
git checkout -b feature/nome-da-feature

```

**Após suas alterações (Commit e Push):**

```bash
git add .
git commit -m "feat: descrição curta da mudança"
git push origin feature/nome-da-feature

```

Após o push, abra um Pull Request apontando para a branch `main`.

---

## 🧩 Convenções de Código

### Organização por Módulo

Estrutura esperada dentro de `src/modules/<feature>`:

* `pages/` – Páginas de rota (LoginPage, DashboardPage).
* `components/` – Componentes de UI específicos do módulo.
* `hooks/` – Hooks específicos da feature (useAuth, etc.).
* `services/` – Acesso a API (ex.: authApi.ts).
* `types/` – Tipos e contratos da feature.
* `context/` – Contextos React da feature (AuthProvider, etc.).
* `index.ts` – Ponto de entrada do módulo (re-exports).

### Estilo de Código

* **TypeScript:** Modo `strict` ativado. Sempre tipe props, retornos públicos e contratos de API.
* **React:** Sempre utilize componentes funcionais. Crie hooks customizados para encapsular a lógica de negócio/client-side. Evite lógica de dados diretamente em componentes de página.
* **TailwindCSS:** Use classes utilitárias diretamente no `className`. Extraia padrões comuns para componentes em `src/shared` quando começarem a se repetir.

### Nomenclatura

* **Componentes/Pages:** `PascalCase` (LoginPage, AuthProvider).
* **Hooks:** `camelCase` com prefixo *use* (useAuth, useAuthContext).
* **Tipos/Interfaces:** `PascalCase` (LoginPayload, AuthUser).
* **Variáveis e Funções:** `camelCase`.
* **Constantes Globais:** `UPPER_SNAKE_CASE`.

### Comentários e Documentação

* Comentários devem explicar a *intenção*, regras de negócio ou decisões não óbvias. O código bem tipado substitui a necessidade de muitos comentários.
* Mensagens de erro e sucesso exibidas para os usuários devem ser escritas em português.

---

## 🧪 Testes

Ainda não há suíte de testes configurada de forma abrangente, mas ao introduzir testes, siga estas diretrizes:

* Use **Vitest + Testing Library** (padrão em projetos Vite/React).
* Todo código novo com lógica não trivial deve ter testes.
* **Testes de componentes:** Teste o comportamento (o que o usuário vê e pode fazer), não a implementação interna.
* **Nomenclatura de arquivos:** `ComponentName.test.tsx` ou `hookName.test.ts`.

---

## 💬 Commits

Usamos o padrão **Conventional Commits** simplificado:
`<tipo>[escopo opcional]: <descrição>`

**Tipos sugeridos:**

* `feat`: Nova funcionalidade
* `fix`: Correção de bug
* `chore`: Tarefas de infraestrutura/build
* `refactor`: Refatoração sem mudança de comportamento
* `style`: Ajustes de estilo/layout sem mudar a lógica
* `test`: Adição ou ajuste de testes
* `docs`: Alterações de documentação

**Exemplos:**

> `feat(auth): adiciona fluxo de recuperação de senha`
> `fix(auth): corrige estado de loading no login`
> `style(ui): aplica layout da tela de login`

---

## 🚀 Pull Requests

### Antes de abrir o PR, verifique se:

* O comando `npm run lint` está passando.
* A aplicação sobe com `npm run dev` sem erros no console.
* O código está organizado na estrutura modular correta (`modules/` e `shared/`).
* Os nomes de variáveis/arquivos estão em inglês e os textos da UI em português.

### Template de PR

Copie e cole este template ao abrir seu Pull Request:

```markdown
## Descrição
Descreva em poucas linhas o que este PR faz.

## Mudanças principais
- [ ] Item 1
- [ ] Item 2
- [ ] Item 3

## Como testar
1. Passo 1
2. Passo 2
3. Passo 3

## Checklist
- [ ] Lint passando
- [ ] App inicia sem erros
- [ ] Estrutura modular respeitada
- [ ] (Opcional) Testes adicionados/atualizados

```

---

## 🐛 Reportando Bugs

Ao abrir uma issue relatando um bug, utilize o modelo abaixo:

```markdown
## Descrição do bug
Explique o problema de forma clara.

## Como reproduzir
1. Passo 1
2. Passo 2
3. Passo 3

## Comportamento esperado
O que você esperava que acontecesse?

## Comportamento atual
O que está acontecendo hoje?

## Ambiente
- OS: [ex.: Windows 11]
- Node: [ex.: 22.x]
- Navegador: [ex.: Chrome 123]

```

---

## 📚 Recursos Úteis

* [Documentação React](https://react.dev/)
* [TailwindCSS](https://tailwindcss.com/docs)
* [Vite](https://vitejs.dev/guide/)
* [Conventional Commits](https://www.conventionalcommits.org/)
* Diretrizes internas do usuário para Node/React (consulte os arquivos `diretrizes.md` da organização).

---

## ❓ Dúvidas

Se tiver dúvidas durante o desenvolvimento:

1. Leia este `CONTRIBUTING.md` e o `README.md`.
2. Confira o código existente em `src/modules` e `src/shared` para absorver os padrões na prática.
3. Procure por *issues* similares já fechadas ou abertas.
4. Abra uma *issue* com a tag `question` descrevendo seu contexto e o que já tentou.