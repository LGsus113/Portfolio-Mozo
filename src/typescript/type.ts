export interface LayoutProps {
  title: string;
  description: string;
}

interface ListProps {
  label: string;
  href: string;
  image: any;
  target?: string;
}

export interface ItemsProps {
  items: ListProps[];
}

export interface ListNavProps extends ItemsProps {
  variant?: "default" | "alt" | "third";
}
