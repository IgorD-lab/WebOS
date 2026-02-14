import dayjs from 'dayjs';

import { NAV_ICONS, NAV_LINKS } from '#constants';

const Navbar = () => {
  return (
    <nav>
      <div>
        <img src="images/logo.svg" alt="logo" />
        <p className="font-bold">Y2K's Portfolio</p>

        <ul>
          {/* Map data into basic nav links turning them into jsx. Move data outside of component into a constant at the top of the file if it becomes unredable. */}
          {NAV_LINKS.map(({ id, name }) => (
            <li key={id}>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul>
          {NAV_ICONS.map(({ id, img }) => (
            <li key={id}>
              <img src={img} className="icon-hover" alt={`icon-${id}`} />
            </li>
          ))}
        </ul>

        <time>{dayjs().format('ddd MMM D h:mm A')}</time>
      </div>
    </nav>
  );
};

export default Navbar;
