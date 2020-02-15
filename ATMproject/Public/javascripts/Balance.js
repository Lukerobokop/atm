/**
 * @author Rokop, Luke (lrokop14@gmail.com)
 * @version 0.0.1
 * @summary Automated teller machine machine || created 2/4/20
 * @todo
 */
export default class balance{
    #balance;
}
constructor(){
    let balance = 0;
    this.handlebalance();
}

function handlebalance(){
    let removeMe;
    document.getElementById('total').addEventListener('change', removeMe = () => {
        this.setBalance(document.getElementById("balance").value);
        this.displayBalance();
}
function setBalance(balance){
    this.#balance = balance;
}
function displayBalance(){
    document.getElementById("balance").innerHTML=`${this.#balance}`
}