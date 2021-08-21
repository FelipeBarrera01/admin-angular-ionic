export interface ResponseDenario {
    result: string;
    body:   Body[];
}

export interface Body {
    Id?:          number;
    Titulo?:      string;
    SKU?:         string;
    Marca?:       string;
    Modelo?:      string;
    UrlFotos?:    any;
    ValorUnt?:    number;
    Stock?:       number | null;
    Descripcion?: string;
}
