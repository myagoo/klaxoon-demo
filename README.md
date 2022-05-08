# Test Klaxoon

Pour démarer le projet
`yarn && yarn start`

## Architecture système de fichiers

Des fichiers/dossiers avec des rôles bien définis:

- `utils.ts` : Tout utilitaire non dépendant du métier ou de librairie de ce projet
- `helpers.ts` : Utilitaires propre au métier ou librairies de ce projet
- `hooks.ts` : collections de hooks

## CSS

Pour le style, j'ai fait une ébauche de framework css atomique tout en utilisant des variables css pour définir des "design tokens" dans le but de limiter l'utilisation de valeurs absolues par les futurs développeurs

## Points à améliorer

Contrairement aux spécifications, mon implémentation accepte tout provider dont le type serait `video` ou `photo`, et non pas juste Vimeo et Flickr.

L'affichage des erreurs aurait pu se faire directement en dessous de l'input ou en utilisant la [constraint validation api](https://developer.mozilla.org/en-US/docs/Web/API/Constraint_validation)

Dans cette application simple, le useRefreshInterval à la racine ne pose pas de problème de performance majeur, mais dans une application plus complexe, il ne faudrait pas re-render l'ensemble de l'application chaque seconde, mais plutôt seulement re-rendre le container du temps relatif
