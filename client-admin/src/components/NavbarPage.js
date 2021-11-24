import OptionList from "./OptionList";

export default function Navbar() {
  return (
    <div id="sidebar" className="active">
      <div className="sidebar-wrapper active">
        <div className="sidebar-header">
          <div className="d-flex justify-content-between">
            <div className="logo">
              <a href="index.html">
                <h3>ACDC Collection</h3>
              </a>
            </div>
          </div>
        </div>
        <div className="sidebar-menu">
          <ul className="menu">
            <li className="sidebar-title">Option</li>
            <OptionList />
          </ul>
        </div>
        <button className="sidebar-toggler btn x">
          <i data-feather="x"></i>
        </button>
      </div>
    </div>
  );
}
