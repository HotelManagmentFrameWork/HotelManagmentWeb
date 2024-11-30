// function myFunction() {
//   document.getElementById("myDropdown").classList.toggle("show");
// }

// Close the dropdown menu if the user clicks outside of it


function myFunction2() {
  // document.getElementById("sibdebarnav").classList.toggle("open");

  document.querySelectorAll('.menu').forEach((menu) => {
    const items = menu.querySelector('.sidebar');

    menu.addEventListener('click', (e) => {
        items.classList.add("open");
        menu.focus(); // Probably redundant but just in case!
    });

    menu.addEventListener('mouseleave', () => {
        items.classList.remove("open");
    });
});

}



 


// let menu_icon_box = document.querySelector(".scroll");
// function clickevent(){

//   document.getElementById("act").classList.toggle("active");

// }
        //     menu_icon_box.classList.toggle("active");
        // }


function closeNavBAr(){
  document.body.addEventListener("click", e => document.getElementById("sibdebarnav").classList.replace("open" ,""))
}
 

// function previewFile() {
//   const preview = document.querySelector("img");
//   const file = document.querySelector("input[type=file]").files[0];
//   const reader = new FileReader();

//   reader.addEventListener(
//     "load",
//     () => {
//       // convert image file to base64 string
//       preview.src = reader.result;
//     },
//     false,
//   );

//   if (file) {
//     reader.readAsDataURL(file);
//   }
// }


 


function tester(unBouton) {
  // ici tu testes ton bouton
  if(trim(unBouton.value)=="")
     alert("problème!!");
}

function trim(string) 
{ 
return string.replace(/(^\s*)|(\s*$)/g,''); 
} 

 


function myFunction() {
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
  // var y = document.getElementById("icons");
  // if(x.type === "password"){
  //   y.className = "fa fa-eye ";
  // }else {
  //   y.className = "fa fa-eye-slash";
  // }
}



function ClickNotif(){
  window.addEventListener("DOMContentLoaded", () => {
    const n = new Notifications("#notifications");
});
class Notifications {
    constructor(qs) {
        this.el = document.querySelector(qs);
        this.badge = null;
        this.items = 0;
        this.timeout = null;

        this.init();
    }
    init() {
        if (this.el) {
            this.el.addEventListener("click", this.read.bind(this));
            this.badge = this.el.querySelector("[data-badge]");

            this.reset(1);
        }
    }
    read() {
        if (this.items > 0) {
            this.items = 0;
            this.el.classList.remove("notifications--active");
            this.badge.innerHTML = "";

            const items = this.random(1, 10, true);

            clearTimeout(this.timeout);
            this.timeout = setTimeout(this.reset.bind(this, items), 2e3);
        }
    }
    reset(items) {
        this.items = items;

        if (this.items > 0) {
            this.el.classList.add("notifications--active");
            this.badge.innerHTML = this.items;
        }
    }
    random(min, max, round = false) {
        const percent = crypto.getRandomValues(new Uint32Array(1))[0] / 2 ** 32;
        const relativeValue = (max - min) * percent;
        return min + (round === true ? Math.round(relativeValue) : +relativeValue.toFixed(2));
    }
}


}
 
 