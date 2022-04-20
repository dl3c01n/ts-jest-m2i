export interface Prerequis{
    level: number;
    competence: Competence
}

export interface Competence {
    nom: string;
    description: string;
    prerequis: Prerequis[];
}