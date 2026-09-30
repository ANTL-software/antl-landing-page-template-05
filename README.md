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

Le header, le hero et le footer restent structurels. Les sections disponibles sont `specialties`, `story`, `visit` et `preorder`. Les composants sont isolés dans `src/views/components/`, les layouts sont passifs dans `src/views/layouts/`, et `src/hooks/useBakeryPage.ts` résout la composition.

## Modules

Le CTA de précommande est volontairement une demande par email dans la démo. Le contrat typé `preorder.action` permet trois parcours sans modifier les composants :

- `inquiry` : demande de devis ou commande sur mesure ;
- `booking` : retrait sur créneau, atelier ou rendez-vous, via le consommateur `BookingProviderEmbed` de `src/booking/` ;
- `commerce` : produit standardisé payable, via `CheckoutButton` de `src/payments/` et `/api/checkout`.

Les sources client des deux modules ont été exportées dans ce dépôt. Pour activer une formule, compléter `BOOKING_SETUP.md` ou `PAYMENTS_SETUP.md` avec les comptes et règles du client. Le mode `commerce` exige un serveur/fonctions pour Checkout et le webhook Stripe ; aucune clé ni offre de paiement n’est incluse dans la démo GitHub Pages.

## Développement

```sh
npm install
npm run dev
npm run build
```

Le projet utilise `HashRouter` et contient une page 404 compatible GitHub Pages.
