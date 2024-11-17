class LoginPage{

    constructor(page){
        this.page = page;
        this.Username = page.locator('input#username');
        this.Password = page.locator('input#password');
        this.button = page.locator('button#submit');
    }

    async validLogin(username, password){
        await this.Username.type(username);
        await this.Password.type(password);
        
        await this.button.click();
    }

    async goTo()
    {
        await this.page.goto('https://practicetestautomation.com/practice-test-login/');
    }


}

module.exports = {LoginPage};