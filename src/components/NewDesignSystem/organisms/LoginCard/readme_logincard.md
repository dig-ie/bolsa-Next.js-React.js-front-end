## 🔐 Autenticação – Arquitetura Client-Side (React/Next + Atomic Design)

Este módulo de autenticação foi implementado utilizando **React Client-Side**,
mantendo a lógica de autenticação dentro dos Organisms e preservando os Forms
como moléculas puramente visuais e controláveis.

### 🎯 Razão da Escolha (Foco em React + Componentização)

A decisão por iniciar com um fluxo totalmente **Client-Side** foi intencional,
priorizando:

- demonstração sólida de **estado local e formulários controlados**
- construção de **UI reutilizável** via Atomic Design (Atoms → Molecules → Organisms)
- organização clara de componentes
- transição suave entre diferentes etapas do fluxo (login, recovery, reset)
- velocidade de entrega e prototipação rápida

Essa abordagem permite exibir as habilidades essenciais para desenvolvimento
React/Next focado em UI/UX, componentes reutilizáveis e arquitetura limpa.

### 🔧 Preparado para Evolução

A estrutura foi planejada para permitir a migração futura para:

- **Server Actions** (Next.js 13+)
- **SSR**
- **validação server-side**
- **cookies httpOnly / sessão segura**

Tudo isso **sem reescrever o design system ou os componentes visuais**, mantendo
a separação entre:

- **lógica de domínio** → Organisms
- **apresentação e UI** → Molecules e Atoms

### 🔑 Integração com JWT

O login realiza chamadas para a API da aplicação utilizando **JWT**, preservando
compatibilidade com ambientes REST tradicionais e permitindo futura adoção de
camadas server-side caso necessário.

---

> Em resumo: a implementação inicial prioriza clareza, componentização, UX e
> domínio de React, com uma arquitetura flexível o bastante para evoluir para
> SSR ou Server Actions quando o projeto exigir.
