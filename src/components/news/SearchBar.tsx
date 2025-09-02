import { Input } from "../ui/input";

interface SearchBarProps {
  onSearch: (searchTrem: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  return (
    <div className="mb-4 md:w-3/4">
      <h3 className="font-bold text-lg mb-2">Search News</h3>
      <Input
        onChange={(e)=>onSearch(e.target.value)}
        className="p-2 border rounded-md w-full "
        placeholder="Search News.."
        type="text"
      />
    </div>
  );
};

export default SearchBar;
