export type DataISO = string;

export interface Expense {
  id: string;
  descrizione: string,
  importo: number;
  categoria: string;
  data: DataISO;
}