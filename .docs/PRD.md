# 📑 PRD - Legale Já: Regularização de Carretinhas

## 1. Visão Geral
**Objetivo:** Uma Landing Page moderna e de alta conversão para serviços de homologação e legalização de reboques, focada em captar leads via WhatsApp.

## 2. Escopo de Serviços (Categorias)
- **Asa Delta de Socorro** (Especializado)
- **Carretão/Reboque de Dois Eixos**
- **Fazendinha/Eixo Único**
- **Food Trucks e Trailers**

## 3. Requisitos de Design (Vibe & Code)
- **Framework:** Next.js 14 (App Router) + TypeScript.
- **UI Kit:** Shadcn/UI + Tailwind CSS.
- **Componentes Base:** Base44 (Padrão de layout).
- **Editor de Texto:** React Quill (para descrições técnicas).
- **Identidade:** Visual moderno, limpo, com botões de ação em destaque.

## 4. Funcionalidades Críticas
- **Botão Flutuante WhatsApp:** Deve usar o ícone oficial (Whats.png) e ser fixo.
- **CTA Link:** `https://wa.me/55[DDD][NUMERO]?text=Olá%20estou%20precisando%20legalizar%20minha%20carretinha`
- **Galeria Técnica:** Exibição das imagens enviadas (`ASA DELTA.jpg`, `CARRETAO.jpg`, etc.) usando Cards do Shadcn.

## 5. Regras de Negócio
- O sistema deve priorizar carregamento rápido de imagens.
- O formulário de contato (se houver) deve validar placa ou chassi (PINO.jpg) se o usuário anexar.