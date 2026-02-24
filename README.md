# Ayfa Seguros Digital

Landing page institucional da Ayfa Seguros, construída com React + Vite + TypeScript.

## Stack

- React 18
- Vite 5
- TypeScript
- Tailwind CSS
- shadcn/ui

## Desenvolvimento local

Pré-requisitos:

- Node.js 20+
- npm

```bash
npm install
npm run dev
```

Aplicação em modo desenvolvimento: `http://localhost:3030`.

## Build de produção

```bash
npm run build
npm run preview
```

## Deploy com Docker (Coolify)

Este projeto está preparado com `Dockerfile` multi-stage e Nginx para servir o build estático.

### Build local da imagem

```bash
docker build -t ayfa-seguros-digital .
```

### Rodar localmente

```bash
docker run --rm -p 3030:3030 ayfa-seguros-digital
```

Abra: `http://localhost:3030`.

### Publicar no Coolify

1. No Coolify, escolha **New Resource > Application**.
2. Conecte o repositório Git deste projeto.
3. Em **Build Pack**, selecione **Dockerfile**.
4. Mantenha a porta interna como `3030`.
5. Faça o deploy.

> Como o app é SPA, o Nginx já está configurado com fallback para `index.html`.
