export interface SlidersInterface {
    data: SlideType[];
}

type SlideType = {
    id:        number;
    h3:        string;
    url:       string;
    className: string;
}
