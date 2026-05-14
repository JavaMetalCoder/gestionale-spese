import { Component, inject, input, output, signal } from '@angular/core';
import { Expense, UpdateExpenseEvent } from '../../type/spesa';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { SpesaService } from '../../services/spesa-service';

@Component({
  selector: 'app-expense-list',
  imports: [CurrencyPipe, UpperCasePipe],
  templateUrl: './expense-list.html',
  styleUrl: './expense-list.css',
})
export class ExpenseList {
  expense = input.required<Expense>();
  onRemove = output<string>();
  onUpdate = output<UpdateExpenseEvent>();

  protected editTitle = signal('');
  protected editDescrizione = signal('');
  protected isEditing = signal(false);
  
  

  onRemoveFunc(id: string): void {
    this.onRemove.emit(id);
  }

  onUpdateFunc(): void {
    this.onUpdate.emit({
      id: this.expense().id,
      patch: {
        title: '',
        descrizione: ''
      }
    });
  }

  protected startEdit(): void {
    const currentExpense = this.expense();

    this.editTitle.set(currentExpense.title);

    this.editDescrizione.set(currentExpense.descrizione);
    this.isEditing.set(true);
  }

}
