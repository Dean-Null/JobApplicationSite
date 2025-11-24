import { MyInformationData } from './IMyInformationData';
import { Experience } from './IExperience';

export interface ApplicationContextType {
  myInformation: MyInformationData;
  setMyInformation: (data: MyInformationData) => void;
  updateMyInformationField: (field: keyof MyInformationData, value: string) => void;
  experiences: Experience[];
  setExperiences: (experiences: Experience[]) => void;
  updateExperience: (id: number, experience: Experience) => void;
  addExperience: (experience: Experience) => void;
  removeExperience: (id: number) => void;
}

// This is a test project created by Dean Morrison for reviewing React and Playwright. Check out other projects at https://github.com/Dean-Null
