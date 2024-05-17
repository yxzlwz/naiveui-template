import { _ } from '../i18n';

export const menu = [
  {
    label: _('home'),
    key: 'home',
    action: 'route',
  },
  {
    type: 'divider',
  },
  {
    label: _('yiyan.show'),
    key: 'yiyan-show',
    action: 'route',
  },
  {
    label: _('yiyan.create'),
    key: 'yiyan-create',
    action: 'route',
  },
  {
    type: 'divider',
  },
  {
    label: _('login'),
    key: 'user-login',
    action: 'route',
  },
];
