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
