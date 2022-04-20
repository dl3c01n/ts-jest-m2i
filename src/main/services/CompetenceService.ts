import { Competence } from "../entities/Competence";
import { CompetenceRepository } from "../repositories/CompetenceRepository";

export class CompetenceService {
    public constructor(private competenceRepository: CompetenceRepository) {}

    public sauvegarder(competence: Competence): Promise<Competence> {
        if(competence.nom.length > 50) throw new Error("Skill name is too long");
        return this.competenceRepository.sauvegarder(competence)
    }
}
    



// export const skillsService = Object.freeze(new SkillsService());