import { Competence } from "../main/entities/Competence";
import { CompetenceRepository } from "../main/repositories/CompetenceRepository";
import { CompetenceService } from "../main/services/CompetenceService";
const mockSauvegarde = jest.fn(async x=>x)
const competenceRepository: CompetenceRepository = {
    sauvegarder: mockSauvegarde,
}
const skillService = new CompetenceService(competenceRepository);
it("Le nom de la compétence ne dois pas dépasser 50 caractères", () => {
    //Given
    const competence: Competence = {
        description: "nsjfndsjfndsjofnsdjkfnsjodf",
        nom: "dff,fkdsfkdjsf,nksdjlnfjkldsnfjklsdnksdjlnfjkldsnfjklsdnksdjlnfjkldsnfjklsdnksdjlnfjkldsnfjklsdnksdjlnfjkldsnfjklsd",
        prerequis: []
    }
    //When & Then
    expect(() => skillService.sauvegarder(competence)).toThrowError();
})

it("Si la compétence est valide, elle doit être sauvegarder par le repository", () => {
    //Given
    const competence: Competence = {
        nom: "Angular",
        description: "Angular de chez Google avec TypeScript",
        prerequis: []
    } 

    //When
    skillService.sauvegarder(competence);

    //Then
    expect(mockSauvegarde.mock.calls.length).toBe(1);
})