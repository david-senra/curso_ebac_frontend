/// <reference types='cypress' />

describe('Testes para Home', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.reload(true)
    })

    it('Deve carregar a página normalmente', () => {
        cy.get('.sc-jTrPJq').should('be.visible')
        cy.get('.sc-iAEyYk').should('be.visible')
        
        cy.screenshot('tela-carregada')
    })

    const nomeValido = 'David Senra'
    const nomeAlterado = 'David Azeredo'
    const emailValido = 'davidsenra33@gmail.com'
    const emailAlterado = 'davidsenra@gmail.com'
    const telefoneValido = '31 98495-9703'
    const telefoneAlterado = '31 98495-9714'
    const nome2 = 'Jorge Almeida'
    const email2 = 'jorgealmeida@gmail.com'
    const telefone2 = '21 95534-8643'

    it('Deve cadastrar um novo contato corretamente', () => {
        cy.get('[type="text"]').type(nomeValido)
        cy.get('[type="email"]').type(emailValido)
        cy.get('[type="tel"]').type(telefoneValido)
        cy.get('.adicionar').click()

        cy.get('.sc-iAEyYk').should('contain.html', `<li>${nomeValido}</li>`)
        cy.get('.sc-iAEyYk').should('contain.html', `<li>${emailValido}</li>`)
        cy.get('.sc-iAEyYk').should('contain.html', `<li>${telefoneValido}</li>`)
        
        cy.screenshot('tela-cadastro')
    })

    it('Deve alterar nome do contato corretamente', () => {
        cy.get(':nth-child(5) > .sc-gueYoa > .delete').click()

        cy.get('[type="text"]').type(nomeValido)
        cy.get('[type="email"]').type(emailValido)
        cy.get('[type="tel"]').type(telefoneValido)
        cy.get('.adicionar').click()
        
        cy.get(':nth-child(5) > .sc-gueYoa > .edit').click()
        cy.get('[type="text"]').clear()
        cy.get('[type="text"]').type(nomeAlterado)
        cy.get('.alterar').click()

        cy.get('.sc-iAEyYk').should('contain.html', `<li>${nomeAlterado}</li>`)
        cy.get('.sc-iAEyYk').should('contain.html', `<li>${emailValido}</li>`)
        cy.get('.sc-iAEyYk').should('contain.html', `<li>${telefoneValido}</li>`)
        
        cy.screenshot('tela-edicao-nome')
    })

    it('Deve alterar e-mail do contato corretamente', () => {
        cy.get(':nth-child(5) > .sc-gueYoa > .delete').click()
        cy.get('[type="text"]').type(nomeValido)
        cy.get('[type="email"]').type(emailValido)
        cy.get('[type="tel"]').type(telefoneValido)
        cy.get('.adicionar').click()
        
        cy.get(':nth-child(5) > .sc-gueYoa > .edit').click()
        cy.get('[type="email"]').clear()
        cy.get('[type="email"]').type(emailAlterado)
        cy.get('.alterar').click()

        cy.get('.sc-iAEyYk').should('contain.html', `<li>${nomeValido}</li>`)
        cy.get('.sc-iAEyYk').should('contain.html', `<li>${emailAlterado}</li>`)
        cy.get('.sc-iAEyYk').should('contain.html', `<li>${telefoneValido}</li>`)

        cy.screenshot('tela-edicao-email')
    })
    
    it('Deve alterar telefone do contato corretamente', () => {
        cy.get(':nth-child(5) > .sc-gueYoa > .delete').click()
        cy.get('[type="text"]').type(nomeValido)
        cy.get('[type="email"]').type(emailValido)
        cy.get('[type="tel"]').type(telefoneValido)
        cy.get('.adicionar').click()
        
        cy.get(':nth-child(5) > .sc-gueYoa > .edit').click()
        cy.get('[type="tel"]').clear()
        cy.get('[type="tel"]').type(telefoneAlterado)
        cy.get('.alterar').click()

        cy.get('.sc-iAEyYk').should('contain.html', `<li>${nomeValido}</li>`)
        cy.get('.sc-iAEyYk').should('contain.html', `<li>${emailValido}</li>`)
        cy.get('.sc-iAEyYk').should('contain.html', `<li>${telefoneAlterado}</li>`)

        cy.screenshot('tela-edicao-telefone')
    })

    it('Deve remover um contato corretamente', () => {
        cy.get(':nth-child(5) > .sc-gueYoa > .delete').click()
        cy.get('[type="text"]').type(nomeValido)
        cy.get('[type="email"]').type(emailValido)
        cy.get('[type="tel"]').type(telefoneValido)
        cy.get('.adicionar').click()
        cy.get('.sc-iAEyYk').should('contain.html', `<li>${nomeValido}</li>`)
        cy.get('.sc-iAEyYk').should('contain.html', `<li>${emailValido}</li>`)
        cy.get('.sc-iAEyYk').should('contain.html', `<li>${telefoneValido}</li>`)

        cy.get(':nth-child(5) > .sc-gueYoa > .delete').click()
        cy.get('.sc-iAEyYk').should('not.contain.html', `<li>${nomeValido}</li>`)
        cy.get('.sc-iAEyYk').should('not.contain.html', `<li>${emailValido}</li>`)
        cy.get('.sc-iAEyYk').should('not.contain.html', `<li>${telefoneValido}</li>`)
        
        cy.screenshot('tela-remocao')
    })
    
    it('Deve adicionar múltiplos contatos corretamente', () => {
        cy.get('[type="text"]').type(nomeValido)
        cy.get('[type="email"]').type(emailValido)
        cy.get('[type="tel"]').type(telefoneValido)
        cy.get('.adicionar').click()
        
        cy.get('[type="text"]').type(nome2)
        cy.get('[type="email"]').type(email2)
        cy.get('[type="tel"]').type(telefone2)
        cy.get('.adicionar').click()

        cy.get('.sc-iAEyYk').should('contain.html', `<li>${nomeValido}</li>`)
        cy.get('.sc-iAEyYk').should('contain.html', `<li>${emailValido}</li>`)
        cy.get('.sc-iAEyYk').should('contain.html', `<li>${telefoneValido}</li>`)
        
        cy.get('.sc-iAEyYk').should('contain.html', `<li>${nome2}</li>`)
        cy.get('.sc-iAEyYk').should('contain.html', `<li>${email2}</li>`)
        cy.get('.sc-iAEyYk').should('contain.html', `<li>${telefone2}</li>`)

        cy.get('.sc-beqWaB').should('have.length.greaterThan', 4)
        
        cy.screenshot('tela-multiplos-contatos')
        
        cy.get(':nth-child(5) > .sc-gueYoa > .delete').click()
        cy.get(':nth-child(6) > .sc-gueYoa > .delete').click()
    })
})