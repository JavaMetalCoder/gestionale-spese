export type DataISO = string;

export interface Expense {
  id: string;
  title: string;
  descrizione: string;
  importo: number;
  categoria: string;
  data: DataISO;
}

export type ExpensePatch = Partial<Omit<Expense, 'id'>>;

export type UpdateExpenseEvent = {
  id: string,
  patch: ExpensePatch
}