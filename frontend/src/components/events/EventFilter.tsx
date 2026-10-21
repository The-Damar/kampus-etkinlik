interface EventFilterProps {
  searchText: string;
  onSearchChange: (text: string) => void;
  category: string;
  onCategoryChange: (cat: string) => void;
  categories: string[];
}

function EventFilter({
  searchText,
  onSearchChange,
  category,
  onCategoryChange,
  categories,
}: EventFilterProps) {
  return (
    <div className="filtre-alani">
      <div className="filtre-grup">
        <label htmlFor="search">Etkinlik ara</label>
        <input
          id="search"
          type="search"
          placeholder="Örn. atölye, kariyer"
          value={searchText}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      <div className="filtre-grup">
        <label htmlFor="category">Kategori</label>
        <select
          id="category"
          value={category}
          onChange={(e) => onCategoryChange(e.target.value)}
        >
          <option value="">Tümü</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default EventFilter;