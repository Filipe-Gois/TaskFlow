import { SearchBarStyle, SearchInputStyle } from "./style";
import { FaSearch } from "react-icons/fa";
import { InputProps } from "../../Types";

const SearchBar = (inputProps: InputProps) => {
  return (
    <SearchBarStyle>
      <FaSearch size={18} color="white" />
      <SearchInputStyle {...inputProps} />
    </SearchBarStyle>
  );
};

export default SearchBar;
