/**
 * @author Rokop, Luke (lrokop14@gmail.com)
 * @version 0.0.1
 * @summary Automated teller machine machine || created 2/4/20
 * @todo
 */
import balance from "./Balance.js";

export default class atm {

    constructor(){
    new balance();
}

window.addEventListener("load", () => {
new atm();
});



