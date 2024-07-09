async function getText() {
    let a = document.querySelector(".loader").innerText;

    return new Promise((resolve, reject) => {
        let a = document.getElementById("two");
        let b = document.getElementById("three");
        let c = document.getElementById("four");
        let d = document.getElementById("five");
        setTimeout(() => {
            resolve(a.style.display = "block")
        }, 2000);
        setTimeout(() => {
            resolve(b.style.display = "block")
        }, 4000);
        setTimeout(() => {
            resolve(c.style.display = "block")
        }, 5500);
        setTimeout(() => {
            resolve(d.style.display = "block")
        }, 7000);

    })
}
async function main() {
    let data = await getText();
    console.log(data)
}
main()
