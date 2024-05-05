import { Registerdstdent } from "./registerdstdent";

export interface Studentdata {
    [courseName: string]: {
        [duration: number]: Registerdstdent[];
      };

}
