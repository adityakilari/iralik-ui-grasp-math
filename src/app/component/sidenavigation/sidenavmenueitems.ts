export class Sidenavmenueitems {

    constructor(
        public name: string,
        public route: string,
        public toolTip: string,
        public icon: string = ''
    ) {}


}
export const menuList = [
    new Sidenavmenueitems('Home', 'home', 'Home page', 'house-fill'),
    new Sidenavmenueitems('Registration', 'registration', 'Registration page', 'card-text'),
    new Sidenavmenueitems('DeveloperInformation', 'mathematics', 'know more about developer', 'braces')
];