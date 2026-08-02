export interface MenuItem {
  id: string;
  label: string;
  icon: string;
}

export const menuItems: MenuItem[] = [
  { id: 'visao-geral', label: 'Visão Geral', icon: '📊' },
  { id: 'colmeias', label: 'Minhas Colmeias', icon: '🐝' },
  { id: 'producao', label: 'Produção de Mel', icon: '🍯' },
  { id: 'manejos', label: 'Manejos', icon: '📋' },
  { id: 'floradas', label: 'Floradas', icon: '🌸' },
  { id: 'sanidade', label: 'Sanidade', icon: '💊' },
  { id: 'financeiro', label: 'Financeiro', icon: '💰' },
  { id: 'estoque', label: 'Estoque', icon: '📦' },
  { id: 'relatorios', label: 'Relatórios', icon: '📈' },
  { id: 'configuracoes', label: 'Configurações', icon: '⚙️' },
];
