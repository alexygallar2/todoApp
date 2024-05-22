import { useAppDispatch, useAppSelector } from "./store";
import { changeFilter, type FilterValue } from "../../filters/filtersSlice";

export const useFilterAction = () => {
	const dispatch = useAppDispatch();
    const currentFilter = useAppSelector(state => state.filters);

    const changeCurrentFilter = ( newFilter: FilterValue) => {
        dispatch(changeFilter(newFilter))
    }

	return { currentFilter, changeCurrentFilter };
};