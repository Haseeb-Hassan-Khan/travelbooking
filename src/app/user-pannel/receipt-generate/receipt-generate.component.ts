import { Component } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { UserService } from '../user.service';

@Component({
  selector: 'app-receipt-generate',
  templateUrl: './receipt-generate.component.html',
  styleUrls: ['./receipt-generate.component.css']
})
export class ReceiptGenerateComponent {
  
  constructor(){}

  downloadPDF() {
    const element = document.getElementById('receipt');
    if (element) {
      html2canvas(element).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        const imgWidth = 190; // Set according to your needs
        const pageHeight = pdf.internal.pageSize.height;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let heightLeft = imgHeight;

        let position = 0;

        pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }

        pdf.save('receipt.pdf');
      });
    }
  }

}
