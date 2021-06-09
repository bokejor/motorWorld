export class Banners {

    image: Array<string>;
    title: string;
    subtitleOption: boolean;
    subtitle: string;
    button: boolean;

    constructor(
        image: Array<string> = [],
        title: string = '',
        subtitleOption: boolean = true,
        subtitle: string = '',
        button: boolean = false
    ) {
        this.image = image;
        this.title = title;
        this.subtitleOption = subtitleOption;
        this.subtitle = subtitle;
        this.button = button
    }
}