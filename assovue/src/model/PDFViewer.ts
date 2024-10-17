export class PDFViewer {

    constructor(private filePath: string) {
    }

    openPDF(): void {
        if (this.filePath) {
            window.open(this.filePath, "_blank");
        } else {
            console.error("Le chemin du fichier PDF est invalide.");
        }
    }
}
