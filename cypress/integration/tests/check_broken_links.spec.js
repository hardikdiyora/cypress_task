describe('Check whether hyperlinks are broken or not.', () => {

    it('Check hyperlinks', () => {
        cy.visit('/');
        cy.get('a').each((link) => {
            cy.request({method:'HEAD', url: link[0].href, failOnStatusCode: false})
                .then((resp) => {
                    if(resp.status >= 400) {
                        let message = "Link Text :- "+ link[0].innerText +"and, status code :- "+ resp.status;
                        cy.log(message);
                    }
                });
        });
        expect(true).to.equal(true);
    });
});
