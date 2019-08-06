export class Questions{
  id: number;
  locationId: number;
  questionSetId: number;
  questionType: string;
  questionImage: string;
  questionText: string;
  choices: string[];
  answer: string;
  seconds: number;
  points: number;

}
