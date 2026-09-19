export interface NavItem {
  title: string;
  url: string;
}

export interface NavGroup {
  title: string;
  items: NavItem[];
}

export type NavRoutes = NavGroup[];