import { Competence } from "../entities/Competence";

export interface CompetenceRepository {
    sauvegarder(competence: Competence): Promise<Competence>;
}