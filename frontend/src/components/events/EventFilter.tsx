interface EventFilterProps {
  searchText: string;
  category: string;
  onSearchChange: (text: string) => void;
  onCategoryChange: (category: string) => void;
  categories?: string[];
}

const defaultCategories = ["Seminer", "Atölye", "Söyleşi", "Yarışma"];

function EventFilter({
  searchText,
  category,
  onSearchChange,
  onCategoryChange,
  categories = defaultCategories,
}: EventFilterProps) {
  return (
    <div className="filtre-alani">
      <div className="form-grup">
        <label htmlFor="search">Arama</label>
        <input
          id="search"
          type="text"
          placeholder="Etkinlik veya açıklama ara..."
          value={searchText}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      <div className="form-grup">
        <label htmlFor="category-filter">Kategori</label>
        <select
          id="category-filter"
          value={category}
          onChange={(e) => onCategoryChange(e.target.value)}
        >
          <option value="">Tüm Kategoriler</option>
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