import headerStyles from "./appheader.module.css";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

function AppHeader() {
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.menuBlock}>
        <div className={headerStyles.menuElement}>
          <BurgerIcon type="primary" />
          <p className="text text_type_main-default pl-2">Конструктор</p>
        </div>

        <div className={headerStyles.menuElement}>
          <ListIcon type="primary" className={headerStyles.logo} />
          <p className="text text_type_main-default text_color_inactive pl-2">
            Лента заказов
          </p>
        </div>
      </div>

      <div className={headerStyles.menuBlock}>
        <Logo />
      </div>

      <div className={headerStyles.menuBlock}>
        <div className={headerStyles.menuElement}>
          <ProfileIcon type="primary" />
          <p className="text text_type_main-default text_color_inactive pl-2">
            Личный кабинет
          </p>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
