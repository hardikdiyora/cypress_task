export default class BasePage {
    open(url) {
        cy.visit(url);
    }

    getAllLinks() {
        return cy.get('a');
    }

    sendLinkRequest(url) {
        return cy.request({method:'HEAD', url: url, failOnStatusCode: false});
    }
}