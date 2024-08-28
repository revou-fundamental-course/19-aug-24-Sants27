var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n){
    showDivs(slideIndex += n);
}

function showDivs(n){
    var i;
    var imgList = document.getElementsByClassName("img-slideshow");
    if(n > imgList.length){
        slideIndex = 1;
    }else if(n < 1){
        slideIndex = imgList.length;
    }

    for(i=0; i < imgList.length; i++){
        imgList[i].style.display = "none";
    }
    imgList[slideIndex - 1].style.display = "block";
}

setInterval(() => {
    plusDivs(1)
},1000)

let nameInput = document.getElementById('name-input');

document.getElementById('submit').addEventListener("click", function(){
    const nama = nameInput.value;
    if(nama == ""){
        document.getElementById("error-name").innerHTML = "Nama tidak boleh kosong!";
    }else{
        document.getElementById("name").innerHTML = nama
        document.getElementById("error-name").innerHTML = ""
    }
    document.getElementById("name").innerHTML = nama
})

// let namaInput = document.getElementById('fname');
// let emailInput = document.getElementById('femail');
// let tglInput = document.getElementById('fdate');
// // let genderInput = document.querySelector('input[name="jk"]:checked');
// let pesanInput = document.getElementById('fpesan');

// document.getElementById('fsubmit').addEventListener("click", function(){
//     const formNamaDisplay = nameInput.value;
//     const formEmailDisplay = emailInput.value;
//     const formTglDisplay = tglInput.value;
//     // const formGenderDisplay = genderInput ? genderInput.value : 'Not Selected';
//     const formPesanDisplay = pesanInput.value;

//     document.getElementById('display-nama').innerHTML = formNamaDisplay
//     document.getElementById('display-email').innerHTML = formEmailDisplay
//     document.getElementById('display-date').innerHTML = formTglDisplay
//     // document.getElementById('display-gender').innerHTML = formGenderDisplay
//     document.getElementById('display-pesan').innerHTML = formPesanDisplay
// })

const nmInput = document.getElementById('iname');
const emInput = document.getElementById('iemail');
const dtInput = document.getElementById('idate');
const pInput = document.getElementById('ipesan');
const kirim = document.getElementById('kirim');

const nmOutput = document.getElementById('onama');
const emOutput = document.getElementById('oemail');
const dtOutput = document.getElementById('odate');
const pOutput = document.getElementById('opesan');
const genderOutput = document.getElementById('ogender');

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  tampil(); 
});

function tampil(){
    nmOutput.innerHTML= nmInput.value;
    emOutput.innerHTML= emInput.value;
    dtOutput.innerHTML= dtInput.value;
    pOutput.innerHTML= pInput.value;
    const selectedGender = document.querySelector('input[name="jk"]:checked');
    genderOutput.innerHTML = selectedGender.value;

}

kirim.addEventListener('click',tampil);

function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var day = now.getDay();
    var date = now.getDate();
    var month = now.getMonth();
    var year = now.getFullYear();

    var timeString = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
    var dateString = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'][day] + ', ' + date.toString().padStart(2, '0') + ' ' + ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Ags', 'Sep', 'Oct', 'Nov', 'Dec'][month] + ' ' + year;
    
    document.getElementById('display-time').textContent = dateString + ' - ' + timeString;
  }

  // Update clock every second
  setInterval(updateClock, 1000);

  // Initial update
  updateClock();