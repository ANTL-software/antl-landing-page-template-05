# antl — Landing Page Template 05

Template React, Vite et TypeScript pour une boulangerie-pâtisserie, un traiteur ou un commerce alimentaire artisanal.

## Personnalisation

`src/content/site.ts` centralise tous les éléments à modifier pour un client : textes, navigation, CTA, horaires, produits, images et cadrages, ainsi que la palette et les polices dans `site.theme`.

Les blocs métier sont indépendants et reconfigurables depuis `site.sections` : les déplacer modifie l'ordre d'affichage ; passer `enabled` à `false` les masque sans supprimer de code.

```ts
sections: [
  { id: "specialties", enabled: true },
  { id: "preorder", enabled: true },
  { id: "story", enabled: false },
]
```

Le header, le hero et le footer restent structurels. Les sections disponibles sont `specialties`, `story`, `visit` et `preorder`.

## Modules

Le CTA de précommande est volontairement une demande par email dans la démo. Il peut être remplacé par le module de réservation `antl-site-booking`, ou complété par `antl-site-payments` lorsque le parcours client et l'offre sont définis.

## Développement

```sh
npm install
npm run dev
npm run build
```

Le projet utilise `HashRouter` et contient une page 404 compatible GitHub Pages.
