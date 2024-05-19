describe('Тестирование staya', function () {

    it('Правильный логин и пароль ', function () {
       cy.visit('https://login.qa.studio/');//защел на сайт 
       cy.get('#mail').type('german@dolnikov.ru');// логин 
       cy.get('#pass').type('iLoveqastudio1');// пароль
       cy.get('#loginButton').click();// войти 
       cy.get('#messageHeader').should('be.visible');//текст
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');//кнопка 
       }) 
       

       it('Забыл пароль', function () {
        cy.visit('https://login.qa.studio/');//защел на сайт 
        cy.get('#forgotEmailButton').click();// нажал на забыл пароль 
        cy.get('#mailForgot').type('german@dolnikov.ru');// ввел любой mail
        cy.get('#restoreEmailButton').click()// нажал на отправить код
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');//проверил текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');// проверил крестик 
        })


        it('Правильный логин и не правильный пароль ', function () {
            cy.visit('https://login.qa.studio/');//защел на сайт 
            cy.get('#mail').type('german@dolnikov.ru');// логин 
            cy.get('#pass').type('1iLoveqastudio1');// пароль
            cy.get('#loginButton').click();// войти 
            cy.get('#messageHeader').contains('Такого логина или пароля нет');//текст
            cy.get('#exitMessageButton > .exitIcon').should('be.visible');//кнопка 
            }) 


            it('Не првавильный логин и правильный пароль ', function () {
                cy.visit('https://login.qa.studio/');//защел на сайт 
                cy.get('#mail').type('g1erman@dolnikov.ru');// логин 
                cy.get('#pass').type('iLoveqastudio1');// пароль
                cy.get('#loginButton').click();// войти 
                cy.get('#messageHeader').contains('Такого логина или пароля нет');//текст
                cy.get('#exitMessageButton > .exitIcon').should('be.visible');//кнопка 
                }) 


                it('Ошибка валидации без @ ', function () {
                    cy.visit('https://login.qa.studio/');//защел на сайт 
                    cy.get('#mail').type('g1ermandolnikov.ru');// логин 
                    cy.get('#pass').type('iLoveqastudio1');// пароль
                    cy.get('#loginButton').click();// войти 
                    cy.get('#messageHeader').contains('Нужно исправить проблему валидации');//текст
                    cy.get('#exitMessageButton > .exitIcon').should('be.visible');//кнопка 
                    }) 

                    it('Строчные буквы в логине ', function () {
                        cy.visit('https://login.qa.studio/');//защел на сайт 
                        cy.get('#mail').type('GerMan@Dolnikov.ru');// логин 
                        cy.get('#pass').type('iLoveqastudio1');// пароль
                        cy.get('#loginButton').click();// войти 
                        cy.get('#messageHeader').contains('Авторизация прошла успешно');//текст
                        cy.get('#exitMessageButton > .exitIcon').should('be.visible');//кнопка 
                        }) 

                        if(typeof myfunc == 'function') {
                            myfunc();
                        }
 })
