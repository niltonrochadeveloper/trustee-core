import { store } from "@/store";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const useStore = () => {
  type AppStore = ReturnType<typeof store>;

  type RootState = ReturnType<AppStore["getState"]>;
  type AppDispatch = AppStore["dispatch"];

  const useAppDispatch = () => useDispatch<AppDispatch>();
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

  return { useAppDispatch, useAppSelector };
};

export default useStore;

// export type { RootState, AppDispatch, AppStore };
