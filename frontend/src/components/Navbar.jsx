import { Search } from '../../public/images/search.jsx';
import { Close } from '../../public/images/close.jsx';

function Navbar({ search, setSearch, onWatch, count, selectOnWatch, resetOrder }) {
  return <>
    <div className="navbar pt-10">
      <div className="flex-1">
        <img src="/public/images/Logo.png" className="cursor-pointer" onClick={resetOrder} />
        <div className="form-control w-auto relative ml-10">
          <div className="icon-container top-0 left-0">
            <Search />
          </div>
          <input
            type="text"
            placeholder="Search"
            className=" search input"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="icon-container top-0 right-0 cursor-pointer">
            <Close />
          </div>
        </div>
      </div>
      <div className="flex-none gap-2 mr-10 relative">
        <div className="btn btn-sm top-watch " onClick={onWatch}>
          {selectOnWatch && count > 0 ? 'See All' : 'Watch'}
        </div>
        {count > 0 && !selectOnWatch &&
          <div className="index absolute">
            {count}
          </div>
        }
      </div>
      <div className="flex-none gap-2">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src="/public/images/profile-placeholder.png" />
          </div>
        </label>
      </div>
    </div>
  </>
}

export default Navbar
