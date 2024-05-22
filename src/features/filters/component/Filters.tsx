import { useFilterAction } from "../../todos/hooks/useFilters"
import { FilterValue, TODO_FILTERS } from "../filtersSlice"

export const Filter = () => {
    const { changeCurrentFilter, currentFilter } = useFilterAction()
    
    const FILTERS_BUTTONS = {
        [TODO_FILTERS.ALL]: { literal: 'All', href: `/?filter=${TODO_FILTERS.ALL}` },
        [TODO_FILTERS.ACTIVE]: { literal: 'Active', href: `/?filter=${TODO_FILTERS.ACTIVE}` },
        [TODO_FILTERS.COMPLETED]: { literal: 'Completed', href: `/?filter=${TODO_FILTERS.COMPLETED}` }
      } as const

      const handleClick = (filter: FilterValue) => (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        changeCurrentFilter(filter)
      }
      
    return (
        <ul className="filters">
          {
            Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }]) => {
              const isSelected = key === currentFilter
              const className = isSelected ? 'selected' : ''
      
              return (
                <li key={key}>
                  <a href={href}
                    className={className}
                    onClick={handleClick(key as FilterValue)}>{literal}
                  </a>
                </li>
              )
            })
          }
        </ul>
    )
}