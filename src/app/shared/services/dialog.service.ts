import { Injectable, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { MatConfirmDialogComponent } from '../components/mat-confirm-dialog/mat-confirm-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  
  private dialog = inject(MatDialog);
  
  openConfirmDialog(msg: string){
    return this.dialog.open(MatConfirmDialogComponent, {
       width: '390px',
       panelClass: 'confirm-dialog-container',
       disableClose: true,
       position: { top: "100px" },
       data: {
         message : msg
       }
     });
   }
}
