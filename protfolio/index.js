function linkclick(id) {
  let navlink = document.getElementsByClassName("link");

  for (let i = 0; i < navlink.length; i++) {
    navlink[i].classList.remove("active");
  }

  document.getElementById(id + 1).classList.add("active");
  document.getElementById("navlinks").classList.remove("navbox2-1");
  document.getElementById("about").classList.add("fade");
}

function aboutlink(id) {
  let aboulink = document.getElementsByClassName("personaldetails");

  for (let i = 0; i < aboulink.length; i++) {
    aboulink[i].classList.remove("personalclass");
  }
  console.log("priyan");
  document.getElementById(id + 1).classList.add("personalclass");

  let educationbtn = document.getElementsByClassName("perbtn");
  for (let i = 0; i < educationbtn.length; i++) {
    console.log(id);
    educationbtn[i].classList.remove("perbtn1");
  }
  document.getElementById(id + "btn" + 1).classList.add("perbtn1");
}

//  from
const username = document.getElementById("username");
const phonenumber = document.getElementById("phonenumber");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const form = document.getElementById("submit");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formvaldation();
});

function formvaldation() {
  const uservalue = username.value.trim();
  const phonevalue = phonenumber.value.trim();
  const mailvalue = email.value.trim();
  const subjectvalue = subject.value.trim();

  if (
    uservalue === "" ||
    subjectvalue === "" ||
    phonevalue === "" ||
    mailvalue === ""
  ) {
    window.alert("Form submission was not successful. Please try again.");
  } else {
    setTimeout(() => {
      clearForm();
    }, 1000);
    setTimeout(() => {
      document.querySelector(".popup").classList.add("popupnone");
    }, 3000);
  }
}
function conformmessage() {
  document.querySelector(".popup").classList.remove("popupnone");
  console.log("confrom");
}
function clearForm() {
  username.value = "";

  phonenumber.value = "";
  email.value = "";
  subject.value = "";
  document.getElementById("message").value = "";
}

// scrool

function scroll() {
  return window.scrollY;
}

window.addEventListener("scroll", () => {
  let scrolly = scroll();
  console.log(scrolly, "px");

  if (50 <= scrolly) {
    document.querySelector(".hometext").classList.add("hometextscroll");
  }

  if (515 <= scrolly) {
    document
      .querySelector(".headercontainer")
      .classList.add("headcontainerscroll");
    document.querySelectorAll(".link").forEach((val) => {
      return (val.style.color = "white");
    });
  } else if (515 >= scrolly) {
    document
      .querySelector(".headercontainer")
      .classList.remove("headcontainerscroll");
    document.querySelectorAll(".link").forEach((val) => {
      return (val.style.color = "white");
    });
  }
  // if (415 <= scrolly) {
  //   document.getElementById("about").classList.add("fade");
  // }

  if (3500 <= scrolly) {
    document.querySelector(".blackbg").classList.add("blackbg1");
  } else if (3500 >= scrolly) {
    document.querySelector(".blackbg").classList.remove("blackbg1");
  }

  if (600 <= scrolly) {
    document.getElementById("about1").style.color = " #f7b318";
    document.getElementById("home1").classList.remove("active");
    document.getElementById("contact1").classList.remove("active");
    document.getElementById("project1").classList.remove("active");
  } else if (600 >= scrolly) {
    //  document.getElementById('about1').style.color=" #f7b318"
    document.getElementById("home1").classList.add("active");

    document.getElementById("about1").classList.remove("active");
    document.getElementById("contact1").classList.remove("active");
    document.getElementById("project1").classList.remove("active");
  }
  if (1300 <= scrolly) {
    document.getElementById("project1").style.color = " #f7b318";
    document.getElementById("about1").style.color = "white";
    document.getElementById("home1").classList.remove("active");
    document.getElementById("contact1").classList.remove("active");
    document.getElementById("about1").classList.remove("active");
  }
  if (2624 <= scrolly) {
    document.getElementById("contact1").style.color = "#f7b318";
    document.getElementById("project1").style.color = "white";
    document.getElementById("home1").classList.remove("active");
    document.getElementById("about1").classList.remove("active");
    document.getElementById("project1").classList.remove("active");
  }
});

function viewmore(id) {
  console.log(id);
  document.getElementById(id + 1).classList.add("viewmore");
  document.getElementById(id + "btn" + 1).classList.add("lessnone");
}
function lessmore(id) {
  console.log(id);
  document.getElementById(id + 1).classList.remove("viewmore");
  document.getElementById(id + "btn" + 1).classList.remove("lessnone");
}

function bars() {
  document.getElementById("navlinks").classList.toggle("navbox2-1");
}
