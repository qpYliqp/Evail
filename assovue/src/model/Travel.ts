export class Travel {

    //Cette classe a été créée car le client veut que l'on puisse ajouter des fonctionnalités à la frise chronologique :
    //-possibilité de cliquer sur une date de la frise pour changer les informations stockées.
    //-Cette classe permettra donc de contenir les informations (textes/images) en relation à chaque voyage.

constructor(private destination: string,
            private startDate: string,
            private description_paragraph: string[],
            private title: string,
            private images_path: string[]) {

}

getDestination(): string {
    return this.destination;
}

getStartDate(): string {
    return this.startDate;
}

getDescriptionParagraph(): string[] {
    return this.description_paragraph;
}

getTitle(): string {
    return this.title;
}

getImagesPath(): string[] {
    return this.images_path;
}

}