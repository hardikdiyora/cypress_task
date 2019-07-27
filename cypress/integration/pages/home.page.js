import BasePage from "./base.page";

class HomePage extends BasePage {
    open(url = '/') {
        super.open(url);
    }
}

export default new HomePage();