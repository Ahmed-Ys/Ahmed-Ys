function detDate(){
    let day = new Date();
    let d = document.querySelector("#day");
    let m = document.querySelector("#month");
    d.innerHTML = day.getDate();
    m.innerHTML = day.getMonth();
    setTimeout(detDate, 1000);
}
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
})
// ADDing New Product
let ap12 = document.getElementById("snn");
ap12.addEventListener("click",() => {
    ProdForm.classList.toggle("Active");
    ProdForm.classList.toggle("box");
    profo.classList.toggle('proInfo');
});


let ap1 = document.querySelector("#addproduct");
const maindiv = document.getElementsByClassName("EMPTY")[0];
ap1.addEventListener("click",() => {
    const xxx = `<div class="p1">
    <div id="imgpos">
        <img src="./Assets/Images/p1.jpg" class="p1img" alt="Unavailable">
    </div>
    <div class="p1T">
        <h3>Apple Watch</h3>
        <p>The larger display enhances the entire experience, making Apple Watch easier to use and read. Series 7 represents our biggest and brightest thinking yet. <br>
            The challenge was to create a bigger display while barely expanding the dimensions of the watch itself. To do so, the display was completely re‑engineered reducing the borders by 40%, allowing for more screen area than both Series 6 and Series 3. Now that’s something to smile about
        </p>
        <button id="buP1">Buy Now</button>
    </div>
</div>`;
    // maindiv.innerHTML += xxx;
    alert("Successful");
});
