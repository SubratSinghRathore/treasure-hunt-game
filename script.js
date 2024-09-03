function btnClick1() {
    const step1 = document.getElementById("step1");
    document.getElementsByClassName("first_step")[0].classList.add("first")
    document.getElementsByClassName("second_step")[0].classList.remove("second_step")
}
function btnClick2() {
    const step2 = document.getElementById("step2");
    document.getElementById("second_step").classList.add("second_step");
    document.getElementById("third_step").classList.remove("third_step");
}
function btnClick3() {
    document.getElementById("third_step").classList.add("third_step");
    document.getElementById("skipBtn").classList.add("display_none_all");
    document.getElementById("header").classList.add("display_none_all");
    document.getElementById("userTarget").style.display = "block";

}
function btnClickSkip() {
    document.getElementById("skipBtn").classList.add("display_none_all");
    document.getElementById("header").classList.add("display_none_all");
    document.getElementById("userTarget").style.display = "block";
}
function play() {
    document.getElementsByClassName("game_container")[0].style.display = "block";
    document.getElementById("userTarget").style.display = "none";
    document.getElementsByClassName("objectiveAndScore")[0].style.display = "block";
}
const valComp = Math.ceil(Math.random() * (16 - 1) + 1);
let count = 0;
function check(val) {
    if (count < 5) {
        if (val === valComp) {
            win(val);
        }
        else {
            conti(val);
        }
}
    }

function win(box) {
    switch (box) {
        case 1: document.getElementById("1").getAttributeNode("src").value = "./assets/win_box.webp";
            break;
        case 2: document.getElementById("2").getAttributeNode("src").value = "./assets/win_box.webp";
            break;
        case 3: document.getElementById("3").getAttributeNode("src").value = "./assets/win_box.webp";
            break;
        case 4: document.getElementById("4").getAttributeNode("src").value = "./assets/win_box.webp";
            break;
        case 5: document.getElementById("5").getAttributeNode("src").value = "./assets/win_box.webp";
            break;
        case 6: document.getElementById("6").getAttributeNode("src").value = "./assets/win_box.webp";
            break;
        case 7: document.getElementById("7").getAttributeNode("src").value = "./assets/win_box.webp";
            break;
        case 8: document.getElementById("8").getAttributeNode("src").value = "./assets/win_box.webp";
            break;
        case 9: document.getElementById("9").getAttributeNode("src").value = "./assets/win_box.webp";
            break;
        case 10: document.getElementById("10").getAttributeNode("src").value = "./assets/win_box.webp";
            break;
        case 11: document.getElementById("11").getAttributeNode("src").value = "./assets/win_box.webp";
            break;
        case 12: document.getElementById("12").getAttributeNode("src").value = "./assets/win_box.webp";
            break;
        case 13: document.getElementById("13").getAttributeNode("src").value = "./assets/win_box.webp";
            break;
        case 14: document.getElementById("14").getAttributeNode("src").value = "./assets/win_box.webp";
            break;
        case 15: document.getElementById("15").getAttributeNode("src").value = "./assets/win_box.webp";
            break;
        default: document.getElementById("16").getAttributeNode("src").value = "./assets/win_box.webp";
            break;
    }

    const scoreBoard = document.getElementById("scoreBoard");
    scoreBoard.innerHTML = ` Congratulations ${document.getElementById("name").value} you win! Grab your chocolate and thanks for playing.`
    scoreBoard.classList.remove("display_none_all");
}

function conti(box) {
    switch (box) {
        case 1: { document.getElementById("1").getAttributeNode("src").value = "./assets/empty_box.webp"; count++ };
            break;
        case 2: { document.getElementById("2").getAttributeNode("src").value = "./assets/empty_box.webp"; count++ };
            break;
        case 3: { document.getElementById("3").getAttributeNode("src").value = "./assets/empty_box.webp"; count++ };
            break;
        case 4: { document.getElementById("4").getAttributeNode("src").value = "./assets/empty_box.webp"; count++ };
            break;
        case 5: { document.getElementById("5").getAttributeNode("src").value = "./assets/empty_box.webp"; count++ };
            break;
        case 6: { document.getElementById("6").getAttributeNode("src").value = "./assets/empty_box.webp"; count++ };
            break;
        case 7: { document.getElementById("7").getAttributeNode("src").value = "./assets/empty_box.webp"; count++ };
            break;
        case 8: { document.getElementById("8").getAttributeNode("src").value = "./assets/empty_box.webp"; count++ };
            break;
        case 9: { document.getElementById("9").getAttributeNode("src").value = "./assets/empty_box.webp"; count++ };
            break;
        case 10: { document.getElementById("10").getAttributeNode("src").value = "./assets/empty_box.webp"; count++ };
            break;
        case 11: { document.getElementById("11").getAttributeNode("src").value = "./assets/empty_box.webp"; count++ };
            break;
        case 12: { document.getElementById("12").getAttributeNode("src").value = "./assets/empty_box.webp"; count++ };
            break;
        case 13: { document.getElementById("13").getAttributeNode("src").value = "./assets/empty_box.webp"; count++ };
            break;
        case 14: { document.getElementById("14").getAttributeNode("src").value = "./assets/empty_box.webp"; count++ };
            break;
        case 15: { document.getElementById("15").getAttributeNode("src").value = "./assets/empty_box.webp"; count++ };
            break;
        default: { document.getElementById("16").getAttributeNode("src").value = "./assets/empty_box.webp"; count++ };
            break;
    }
}

function stopRefresh(){
    return false;
}