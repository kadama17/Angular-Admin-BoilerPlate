import { MenuItem } from '../models/menu.model';

export class Menu {
  public static pages: MenuItem[] = [
    {
      group: 'Base',
      separator: false,
      items: [
        {
          icon: 'assets/icons/outline/chart-pie.svg',
          label: 'Tableau de bord',
          route: '/expense',
        },
      ],
    },
    {
      group: 'Options',
      separator: true,
      items: [
        {
          icon: 'assets/icons/outline/credit-card.svg',
          label: 'Depenses',
          route: '/download',
          children: [
            { label: 'Ajout de depenses', route: '/expense-form' },
            { label: 'Liste des depenses ', route: '/expense-list' },
          ],
        },
        {
          icon: 'assets/icons/outline/presentation-chart.svg',
          label: 'Statistiques',
          route: '/gift',
        },
        {
          icon: 'assets/icons/outline/clipboard.svg',
          label: 'Historique',
          route: '/historique',
        },
        {
          icon: 'assets/icons/outline/check.svg',
          label: 'Approbations',
          route: '/users',
        },
      ],
    },
    {
      group: 'Config',
      separator: false,
      items: [
        {
          icon: 'assets/icons/outline/cog.svg',
          label: 'Paramètres',
          route: '/settings',
        },
        {
          icon: 'assets/icons/outline/bell.svg',
          label: 'Notifications',
          route: '/gift',
        },
      ],
    },
  ];
}
