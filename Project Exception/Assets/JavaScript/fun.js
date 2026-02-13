function detDate(){
    let day = new Date();
    let d = document.querySelector("#day");
    let m = document.querySelector("#month");
    d.innerHTML = day.getDate();
    m.innerHTML = day.getMonth();
    setTimeout(detDate, 1000);
}
// ADDing New Product
function Add(){
    let ProdForm = document.querySelector('.proInfo');
    let addProd = document.getElementById("proBu");
    let body = document.querySelector('.P');
    let profo = document.querySelector('.fopro');
    let cancel = document.querySelector('.crpro1');

    addProd.addEventListener("click",() => {
        ProdForm.classList.toggle("Active");
        ProdForm.classList.toggle("box");
        profo.classList.toggle('proInfo');
    });

    cancel.addEventListener("click",() => {
        ProdForm.classList.toggle("Active");
        ProdForm.classList.toggle("box");
        profo.classList.toggle('proInfo');
    });
};

// Updating the product
function Update(){
let ap13 = document.getElementsByClassName("proBu2")[0];
ap13.addEventListener("click",() => {
    alert("Your Product Has been Updated");
});};

// Deleting the product
function Delete(){
let ap14 = document.getElementsByClassName("proBu2")[1];
ap14.addEventListener("click",() => {
    alert("Your Product Has been Removed");
});};

// Payment Part
function payment(){
    let ap15 = document.getElementsByClassName("x")[0];
    const parchase = document.querySelector(".bigdiv");
    const exit = document.getElementById("bu");
    const buy =document.getElementById("bu1");
    const to = document.getElementById("toast");
    const dia =document.getElementById("dia");
    exit.addEventListener("click",(eo) => {
        parchase.classList.remove("non");
        eo.preventDefault();
    });
    const fun = (eo) => {
        parchase.classList.remove("non")
    };
    const fun1 = (eo) => {
        dia.style.display="block";
        to.classList.remove("non");
    };
    buy.addEventListener("click",(eo) => {
        to.classList.add("non");
        dia.style.display="none";
        setTimeout(fun,2000);
        setTimeout(fun1,2100);
    });
    ap15.addEventListener("click",(eo) => {
    parchase.classList.add("non");
    });
    let bigc = document.getElementById("org");
    bigc.addEventListener("click",(eo) => {
        if (eo.target.className == "modbup1 x"){
            eo.preventDefault();
            parchase.classList.add("non");
        };
    });};

