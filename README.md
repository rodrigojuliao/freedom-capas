# Freedom Capas Personalizadas - Site Premium

Este repositório contém a versão premium do site da Freedom Capas, desenvolvida seguindo os mais altos padrões de design (Alfaiataria Automotiva).

## Tecnologias Utilizadas
- HTML5 Semântico (Otimizado para SEO)
- CSS3 Vanilla com variáveis customizadas e Dark Mode nativo
- Vanilla JavaScript com **GSAP** + **ScrollTrigger** para animações cinematográficas estilo "Apple"

## Como rodar o projeto localmente
Você não precisa de build ou empacotador (webpack, vite). O site é puramente nativo.
Existem duas formas fáceis:
1. Usando a extensão **Live Server** no VSCode: clique com o botão direito no `index.html` e escolha "Open with Live Server".
2. Abrindo o `index.html` diretamente no seu navegador de preferência.

## Inserção do Vídeo 3D (Nano Banana)
Há um marcador muito claro no arquivo `index.html` logo no topo da `section class="hero"`.
- **Passo 1:** Gere o vídeo 3D da capa cobrindo o veículo no Nano Banana na resolução 1920x1080.
- **Passo 2:** Salve o vídeo dentro de uma nova pasta `site/assets/`.
- **Passo 3:** No `index.html`, substitua a `div.nano-banana-placeholder` por:
```html
<video autoplay loop muted playsinline class="hero-video-bg">
    <source src="assets/seu-video-gerado.mp4" type="video/mp4">
</video>
```
- **Passo 4:** No CSS, garanta que `.hero-video-bg` tenha `width: 100%; height: 100%; object-fit: cover; opacity: 0.6;`.

## Instruções de Deploy
Como o site é estático (HTML/CSS/JS), o deploy é gratuito e extremamente rápido.
Recomendamos o uso da **Vercel** ou **Netlify**:
1. Arraste e solte a pasta `site` diretamente no painel do Netlify (Deploy manual) OU
2. Conecte este repositório ao seu GitHub e importe o projeto na Vercel (Configurações baseadas em Root Directory: `site/`).

## Custos de Infraestrutura
- Hospedagem (Netlify/Vercel): R$ 0,00/mês
- Domínio (.com.br): R$ 40,00/ano
- Ferramentas de Análise (Google Analytics/Search Console): Gratuitas.
