import { create } from "zustand";

type ApplicationState = {
  applicationList: Application[];
};

type ApplicationAction = {
  updateApplicationList: (name: ApplicationState["applicationList"]) => void;
};

export const useApplicationStore = create<
  ApplicationState & ApplicationAction
>()((set) => ({
  applicationList: [],

  updateApplicationList: (applicationList: Application[]) => {
    set(() => ({ applicationList: applicationList }));
  },
}));
