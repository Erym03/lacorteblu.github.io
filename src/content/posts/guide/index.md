---
title: Titolo pagina
published: 2025-10-11
pinned: true
description: "La descrizione della pagina"
image: "./cover.webp"
tags: ["Descrizione", "AA", "AASA"]
category: Post
draft: false
---



Questo modello di blog è stato creato con [Astro](https://astro.build/). Per informazioni non trattate in questa guida, puoi trovare le risposte nella [documentazione di Astro](https://docs.astro.build/).

## Introduzione all'articolo
```yaml
---
titolo: Il mio primo post sul blog
pubblicato: 09/09/2023
descrizione: Questo è il primo post sul mio nuovo blog Astro.
image: ./cover.jpg
tag: [Front-End, Sviluppo]
categoria: Sviluppo Front-End
bozza: false
---
```




| Proprietà     | Descrizione                                                                                                                                                                                    |
|---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `title`       | Titolo                                                                                                                                                                                          |
| `published`   | Data di pubblicazione                                                                                                                                                                             |
| `pinned`      | Se aggiungere o no l'articolo agll'elenco                                                                                                                                                       |
| `description` | Descrizione breve articolo                                                                                                                                                                      |
| `image`       | Percorso dell'immagine di copertina dell'articolo. <br/>1. Inizia con `http://` o `https://`: utilizza un'immagine da Internet. <br/>2. Inizia con `/`: utilizza un'immagine dalla directory `public`. <br/>3. Senza prefisso: utilizza un percorso relativo al file markdown.|
| `tags`        | I tag dell'articolo                                                                                                                                                                            |
| `category`    | Categoria articolo                                                                                                                                                                                |
| `licenseName` | Nome della licensa del contenuto dell'articolo                                                                                                                                                                              |
| `author`      | Autore articolo                                                                                                                                                                                          |
| `sourceLink`  | Link alla fonte articolo                                                                                                                                                                          |
| `draft`       | se questo articolo è ancora una bozza non verrà visualizzato                                                                                                                                                                  |
| `slug`        | Personalizza il percorso URL del post. Se non impostato, verrà utilizzato il nome del file come URL. |

## Dove posizionare i file dei post

I file dei post devono essere posizionati nella directory `src/content/posts/`. Puoi anche creare delle sottodirectory per organizzare meglio i tuoi post e le tue risorse.

```
src/content/posts/
├── post-1.md
└── post-2/
    ├── cover.png
    └── index.md
```

## Personalizzazione degli URL dei post (slug)

### Cos'è uno slug?

Uno slug è una porzione personalizzata del percorso URL di un post. Se non viene impostato uno slug, il nome del file verrà utilizzato come URL.

### Esempio utilizzo degli slug

#### Esempio 1: Utilizzo di un nome file come URL
```yaml
---
titolo: Il mio primo post del blog
pubblicato: 09/09/2023
---
```
File: `src/content/posts/my-first-blog-post.md`
URL: `/posts/my-first-blog-post`

#### Esempio 2: Personalizzazione di uno slug
```yaml
---
titolo: Il mio primo post del blog
pubblicato: 09/09/2023
slug: hello-world
---
```
File: `src/content/posts/my-first-blog-post.md`
URL: `/posts/hello-world`

#### Esempio 3: Utilizzo di uno slug inglese con un titolo cinese
```yaml
---
titolo: Come utilizzare Tema Firefly Blog
Pubblicato: 09/09/2023
Slug: how-to-use-firefly-blog-theme
---
```
File: `src/content/posts/firefly-guide.md`
URL: `/posts/how-to-use-firefly-blog-theme`

### Consigli per l'utilizzo degli slug

1. **Usa l'inglese e i trattini**: `my-awesome-post` invece di `my awesome post`
2. **Sii conciso**: evita slug troppo lunghi
3. **Sii descrittivo**: fai in modo che l'URL rifletta il contenuto del post
4. **Evita caratteri speciali**: usa solo lettere, numeri e trattini
5. **Sii coerente**: usa un modello di denominazione simile in tutto il tuo blog

### Note

- Una volta impostato e pubblicato uno slug, si consiglia di non modificarlo in modo casuale per evitare di compromettere la SEO e i link esistenti. - Se più post utilizzano lo stesso slug, i post successivi sovrascriveranno quelli precedenti.
- Lo slug verrà automaticamente convertito in minuscolo