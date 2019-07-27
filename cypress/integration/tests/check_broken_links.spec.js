import homePage from "../pages/home.page";

const checkLinks = () => {
    homePage.getAllLinks().each((link) => {
        homePage.sendLinkRequest(link[0].href)
            .then((resp) => {
                if(resp.status >= 400) {
                    let message = "Link Text :- "+ link[0].innerText +"and, status code :- "+ resp.status;
                    cy.log(message);
                }
                expect(resp.status).to.equal(200);
            });
    });
};

describe('Check whether hyperlinks are broken or not.', () => {
    it('Check broken link on home page', () => {
        homePage.open();
        checkLinks();
    });

    it('Check broken link on features page',  () => {
        homePage.open('/features');
        checkLinks();
    });

    it('Check broken link on how-it-works page',  () => {
        homePage.open('/how-it-works');
        checkLinks();
    });

    it('Check broken link on dashboard page',  () => {
        homePage.open('/dashboard');
        checkLinks();
    });

    it('Check broken link on pricing page',  () => {
        homePage.open('/pricing');
        checkLinks();
    });

    it('Check broken link on support page',  () => {
        homePage.open('/support');
        checkLinks();
    });

    it('Check broken link on blog page',  () => {
        homePage.open('/blog');
        checkLinks();
    });
});
