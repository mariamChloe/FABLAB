export interface Patient {
    id : string,
    nom: string,
    prenom: string,
    genre: string,
    email : string,
    contact1: string,
    contact2:string,
    birthday : string ,
    first_namechild : string ,
    last_namechild : string ,
    localite : string ,
    Diagnostique:string,
    motif:string,
    communication:string,
    conduite:string,
    severite:string,
    etat_clinique:string,
    date_consultation:string,
    observation:string,
    frequenceRespiratoireRealtime: string;
    frequenceCardiaqueRealtime: string;
    temperatureRealtime: string;
    nombrePasRealtime: string;
    GPSLatitude:string;
    GPSLongitude:string;
    nivauBaterie:string;
    giletid:string;
    geolocalisation?:string;
    carnet: {
        Diagnostique: string;
        motif: string;
        conduite: string;
        etat_clinique: string;
        date_consultation:string;
        observation:string;
    }
    password:string;
    role:string;
}