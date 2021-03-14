let bottom = document.querySelector('.bottom');
let content = document.querySelector('.content');
let textStyleBtns = document.querySelectorAll('.header-big-block');
let textAlineBtns = document.querySelector('.text-align-block');
let textColors = document.querySelector('.modal-text-colors');
let backgroundColors = document.querySelector('.modal-background-colors');
let backgroundImages = document.querySelector('.modal-background-images');
let backgroundColorshider = document.querySelector('.background-colors-hider');
let backgroundImageshider = document.querySelector('.background-images-hider');
let fileHider = document.querySelector('.file-hider');
let imageFile = document.getElementById('customFile');
let dropDownMenu = document.querySelectorAll('.dropdown-menu');
let editBtn = document.querySelector('.editBtn');
let saveBtn = document.querySelector('.saveBtn');
let styleMenu = document.querySelector('.style-menu-hider');
let editMenu = document.querySelector('.edit-menu-hider');
let textarea = document.querySelector('.textarea');

textStyleBtns[0].addEventListener('click', function (event) {
    let name = event.target.getAttribute('name')
    if (name == "bold") {
        if (content.style.fontWeight != "bold") {
            content.style.fontWeight = "bold";
        } else {
            content.style.fontWeight = "";
        }
    }
    if (name == "italic") {
        if (content.style.fontStyle != "italic") {
            content.style.fontStyle = "italic";
        } else {
            content.style.fontStyle = "";
        }
    }
    if (name == "underline") {
        if (content.style.textDecoration != "underline") {
            content.style.textDecoration = "underline";
        } else {
            content.style.textDecoration = "";
        }
    }
    if (name == "line-through") {
        if (content.style.textDecoration != "line-through") {
            content.style.textDecoration = "line-through";
        } else {
            content.style.textDecoration = "";
        }
    }
})

textAlineBtns.addEventListener('click', function (event) {
    let name = event.target.getAttribute('name');
    if (name == "left") {
        content.style.textAlign = "left";
    } else if (name == "center") {
        content.style.textAlign = "center";
    } else {
        content.style.textAlign = "right";
    }
})

textColors.addEventListener('click', function (event) {
    if (event.target.classList[0] == "color") {
        content.style.color = event.target.style.backgroundColor;
    }
})

backgroundColors.addEventListener('click', function (event) {
    if (event.target.classList[0] == "color") {
        bottom.style.backgroundImage = "";
        bottom.style.backgroundColor = event.target.style.backgroundColor;
    }
})

backgroundImages.addEventListener('click', function (event) {
    if (event.target.classList[0] == "image") {
        bottom.style.backgroundColor = "";
        bottom.style.backgroundImage = event.target.style.backgroundImage;
    }
})

let colorsBtn = document.querySelector('.colorsBtn');
let imagesBtn = document.querySelector('.imagesBtn');
let filesBtn = document.querySelector('.filesBtn');
let colorsboolean = true;
let imagesboolean;
let filesboolean;

colorsBtn.addEventListener('click', function () {
    colorsboolean = true;
    imagesboolean = false;
    filesboolean = false;
    colorsBtn.style.borderBottom = "none";
    colorsBtn.style.borderTop = "1px solid #dee2e6";
    colorsBtn.style.borderRight = "1px solid #dee2e6";
    colorsBtn.style.borderTopRightRadius = "4px";
    imagesBtn.style.border = "none";
    imagesBtn.style.borderBottom = "1px solid #dee2e6";
    filesBtn.style.border = "none";
    filesBtn.style.borderBottom = "1px solid #dee2e6";
    backgroundImageshider.style.display = "none";
    fileHider.style.display = "none";
    backgroundColorshider.style.display = "block";
    colorsBtn.style.color = "black"
    filesBtn.style.color = "#549edf"
    imagesBtn.style.color = "#549edf"
    imagesBtn.classList.add('imagesBtn');
    filesBtn.classList.add('filesBtn');
})

colorsBtn.addEventListener('mouseover', function () {
    colorsBtn.style.borderTop = "1px solid #dee2e6";
    colorsBtn.style.borderRight = "1px solid #dee2e6";
    colorsBtn.style.borderTopRightRadius = "4px";
})

colorsBtn.addEventListener('mouseout', function () {
    if (colorsboolean != true) {
        colorsBtn.style.border = "none";
        colorsBtn.style.borderBottom = "1px solid #dee2e6";
    }
})

imagesBtn.addEventListener('click', function () {
    imagesboolean = true;
    colorsboolean = false;
    filesboolean = false;
    imagesBtn.style.borderBottom = "none";
    imagesBtn.style.borderTop = "1px solid #dee2e6";
    imagesBtn.style.borderRight = "1px solid #dee2e6";
    imagesBtn.style.borderLeft = "1px solid #dee2e6";
    imagesBtn.style.borderTopRightRadius = "4px";
    imagesBtn.style.borderTopLeftRadius = "4px";
    colorsBtn.style.border = "none";
    colorsBtn.style.borderBottom = "1px solid #dee2e6";
    filesBtn.style.border = "none";
    filesBtn.style.borderBottom = "1px solid #dee2e6";
    backgroundColorshider.style.display = "none";
    fileHider.style.display = "none";
    backgroundImageshider.style.display = "block";
    imagesBtn.style.color = "black"
    filesBtn.style.color = "#549edf"
    colorsBtn.style.color = "#549edf"
    imagesBtn.classList.add('imagesBtn');
})

imagesBtn.addEventListener('mouseover', function () {
    imagesBtn.style.borderTop = "1px solid #dee2e6";
    imagesBtn.style.borderRight = "1px solid #dee2e6";
    imagesBtn.style.borderLeft = "1px solid #dee2e6";
    imagesBtn.style.borderTopRightRadius = "4px";
    imagesBtn.style.borderTopLeftRadius = "4px";
})

imagesBtn.addEventListener('mouseout', function () {
    if (imagesboolean != true) {
        imagesBtn.style.border = "none";
        imagesBtn.style.borderBottom = "1px solid #dee2e6";
    }
})


filesBtn.addEventListener('click', function () {
    filesboolean = true;
    imagesboolean = false;
    colorsboolean = false;
    filesBtn.style.borderBottom = "none";
    filesBtn.style.borderTop = "1px solid #dee2e6";
    filesBtn.style.borderRight = "1px solid #dee2e6";
    filesBtn.style.borderLeft = "1px solid #dee2e6";
    filesBtn.style.borderTopRightRadius = "4px";
    filesBtn.style.borderTopLeftRadius = "4px";
    colorsBtn.style.border = "none";
    colorsBtn.style.borderBottom = "1px solid #dee2e6";
    imagesBtn.style.border = "none";
    imagesBtn.style.borderBottom = "1px solid #dee2e6";
    backgroundColorshider.style.display = "none";
    backgroundImageshider.style.display = "none";
    fileHider.style.display = "block";
    filesBtn.style.color = "black"
    imagesBtn.style.color = "#549edf"
    colorsBtn.style.color = "#549edf"
    filesBtn.classList.add('filesBtn');
})

filesBtn.addEventListener('mouseover', function () {
    filesBtn.style.borderTop = "1px solid #dee2e6";
    filesBtn.style.borderRight = "1px solid #dee2e6";
    filesBtn.style.borderLeft = "1px solid #dee2e6";
    filesBtn.style.borderTopRightRadius = "4px";
    filesBtn.style.borderTopLeftRadius = "4px";
})

filesBtn.addEventListener('mouseout', function () {
    if (filesboolean != true) {
        filesBtn.style.border = "none";
        filesBtn.style.borderBottom = "1px solid #dee2e6";
    }
})


imageFile.addEventListener('change', function (event) {
    let image = event.target.files[0];
    let urlImage = URL.createObjectURL(image);
    bottom.style.backgroundColor = "";
    bottom.style.backgroundImage = `url(${urlImage})`;
    imageFile.value = "";
})

dropDownMenu[0].addEventListener('click', function (event) {
    if (event.target.classList[0] == "dropdown-item") {
        content.style.fontFamily = event.target.style.fontFamily;
    }
})

dropDownMenu[1].addEventListener('click', function (event) {
    if (event.target.classList[0] == "dropdown-item") {
        content.style.fontSize = event.target.textContent;
    }
})

let checkPassword = false;

editBtn.addEventListener('click', function () {
    if (checkPassword) {
        textarea.value = content.innerHTML;
        styleMenu.style.display = "none";
        editMenu.style.display = "block";
        bottom.style.display = "none";
        textarea.style.display = "block";
    }
})

saveBtn.addEventListener('click', function () {
    content.innerHTML = textarea.value;
    editMenu.style.display = "none";
    styleMenu.style.display = "block";
    textarea.style.display = "none";
    bottom.style.display = "block";
})

let errorMessage = document.querySelectorAll('.invalid')
const TABLEFORM = document.forms.tableForm;
TABLEFORM.createBtn.addEventListener('click', tableCreate);
TABLEFORM.resetBtn.addEventListener('click', tableReset);

function tableCreate() {
    let check = 0;
    for (let i = 0; i <= 4; i++) {
        if (TABLEFORM.elements[i].value == '') {
            TABLEFORM.elements[i].className = "form-control input-style is-invalid";
            errorMessage[1].textContent = "invaid value";
            check++
        } else {
            TABLEFORM.elements[i].className = "form-control input-style";
        }
    }
    for (let i = 5; i <= 6; i++) {
        if (TABLEFORM.elements[i].options[0].selected == true) {
            TABLEFORM.elements[i].className = "custom-select is-invalid";
            errorMessage[1].textContent = "invaid value";
            check++;
        } else {
            TABLEFORM.elements[i].className = "custom-select";
        }
    }
    if (check == 0) {
        let tbl = document.createElement("table");
        for (let i = 0; i < TABLEFORM.CountTR.value; i++) {
            let tr = document.createElement("tr");
            for (let j = 0; j < TABLEFORM.CountTD.value; j++) {
                let td = document.createElement("td");
                let text = document.createTextNode("TD");
                td.appendChild(text);
                td.style.width = TABLEFORM.widthTD.value + 'px';
                td.style.height = TABLEFORM.heightTD.value + 'px';
                td.style.borderWidth = TABLEFORM.bdWidth.value + 'px';
                td.style.borderStyle = TABLEFORM.bdStyle.value;
                td.style.borderColor = TABLEFORM.bdColor.value;
                tr.appendChild(td);
            }
            tbl.appendChild(tr);
        }
        textarea.value += tbl.outerHTML;
        errorMessage[1].textContent = "";
    }
}

function tableReset() {
    for (let i = 0; i <= 4; i++) {
        TABLEFORM.elements[i].value = '';
        TABLEFORM.elements[i].className = "form-control input-style";
    }
    for (let i = 5; i <= 6; i++) {
        TABLEFORM.elements[i].className = "custom-select";
    }
    TABLEFORM.bdStyle.options[0].selected = true;
    TABLEFORM.bdColor.options[0].selected = true;
    errorMessage[1].textContent = "";

}

const OLFORM = document.forms.olForm;
OLFORM.createBtn.addEventListener('click', OlCreate);
OLFORM.resetBtn.addEventListener('click', OlReset);

function OlCreate() {
    if (OLFORM.CountLi.value == '') {
        OLFORM.CountLi.className = "form-control is-invalid";
        errorMessage[2].textContent = "invaid value";
    } else {
        OLFORM.CountLi.className = "form-control";
    }
    if (OLFORM.olStyle.options[0].selected == true) {
        OLFORM.olStyle.className = "custom-select is-invalid";
        errorMessage[2].textContent = "invaid value";
    } else {
        OLFORM.olStyle.className = "custom-select";
    }
    if (OLFORM.CountLi.value.length > 0 && OLFORM.olStyle.options[0].selected == false) {
        let ol = document.createElement('ol');
        for (let i = 0; i < OLFORM.CountLi.value; i++) {
            let li = document.createElement('li');
            let text = document.createTextNode("item" + (i + 1));
            li.appendChild(text);
            ol.appendChild(li);
            ol.type = OLFORM.olStyle.value;
        }
        textarea.value += ol.outerHTML;
        errorMessage[2].textContent = "";
    }
}

function OlReset() {
    OLFORM.olStyle.className = "custom-select";
    OLFORM.CountLi.className = "form-control";
    OLFORM.CountLi.value = '';
    OLFORM.olStyle.options[0].selected = true;
    errorMessage[2].textContent = "";
}

const ULFORM = document.forms.ulForm;
ULFORM.createBtn.addEventListener('click', ULCreate);
ULFORM.resetBtn.addEventListener('click', ULReset);

function ULCreate() {
    if (ULFORM.CountLi.value == '') {
        ULFORM.CountLi.className = "form-control is-invalid";
        errorMessage[3].textContent = "invaid value";
    } else {
        ULFORM.CountLi.className = "form-control";
    }
    if (ULFORM.ulStyle.options[0].selected == true) {
        ULFORM.ulStyle.className = "custom-select is-invalid";
        errorMessage[3].textContent = "invaid value";
    } else {
        ULFORM.ulStyle.className = "custom-select";
    }
    if (ULFORM.CountLi.value.length > 0 && ULFORM.ulStyle.options[0].selected == false) {
        let ul = document.createElement('ul');
        for (let i = 0; i < ULFORM.CountLi.value; i++) {
            let li = document.createElement('li');
            let text = document.createTextNode("item" + (i + 1));
            li.appendChild(text);
            li.style.listStyle = ULFORM.ulStyle.value;
            ul.appendChild(li);
        }
        textarea.value += ul.outerHTML;
        errorMessage[3].textContent = "";
    }

}

function ULReset() {
    ULFORM.ulStyle.className = "custom-select";
    ULFORM.CountLi.className = "form-control";
    ULFORM.CountLi.value = '';
    ULFORM.ulStyle.options[0].selected = true;
    errorMessage[3].textContent = "";
}

const SIGNIN = document.forms.signIn;
SIGNIN.submitBtn.addEventListener('click', () => {
    if (SIGNIN.login.value == 'admin') {
        errorMessage[0].textContent = "";
        SIGNIN.login.className = 'form-control';
    } else {
        errorMessage[0].textContent = 'Please check your login or password';
        SIGNIN.login.className = 'form-control is-invalid';
    }
    if (SIGNIN.password.value == 'admin') {
        SIGNIN.password.className = 'form-control';
    } else {
        errorMessage[0].textContent = 'Please check your login or password';
        SIGNIN.password.className = 'form-control is-invalid';
    }
    if (SIGNIN.login.value == '') {
        errorMessage[0].textContent = 'Value is empty';
        SIGNIN.login.className = 'form-control is-invalid';
    }
    if (SIGNIN.password.value == '') {
        errorMessage[0].textContent = 'Value is empty';
        SIGNIN.password.className = 'form-control is-invalid';
    }

    if (SIGNIN.login.value == 'admin' && SIGNIN.password.value == 'admin') {
        checkPassword = true;
        SIGNIN.submitBtn.setAttribute('data-dismiss', 'modal');
        document.querySelector('.signIn').style.display = 'none';
        document.querySelector('.signOut').style.display = 'block';
        SIGNIN.login.value = '';
        SIGNIN.password.value = '';
        editBtn.className = 'editBtn btn-outline-light'
        editBtn.style.backgroundColor = 'white';
        focusStyle()
    }
});

function mousedownBtn() {
    this.style.backgroundColor = 'rgb(223, 223, 223)';
}

function mouseoutBtn() {
    this.style.backgroundColor = 'white';
}

function mouseoverBtn() {
    this.style.backgroundColor = 'rgb(223, 223, 223)';
}

const SIGNOUT = document.querySelector('.signOut');
SIGNOUT.addEventListener('click', () => {
    SIGNIN.submitBtn.setAttribute('data-dismiss', '');
    document.querySelector('.singOutBtn').setAttribute('data-dismiss', 'modal');
    document.querySelector('.singOutBtn').addEventListener('click', () => {
        document.querySelector('.signIn').style.display = 'block';
        document.querySelector('.signOut').style.display = 'none';
        checkPassword = false;
        editBtn.className = 'editBtn';
        editBtn.style.backgroundColor = 'rgb(209, 207, 207)';
        editBtn.removeEventListener('mousedown', mousedownBtn);
        editBtn.removeEventListener('mouseout', mouseoutBtn);
        editBtn.removeEventListener('mouseover', mouseoverBtn);
    })
})

function focusStyle() {
    let buttons = document.querySelectorAll('.btn-outline-light');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('mousedown', mousedownBtn);
        buttons[i].addEventListener('mouseout', mouseoutBtn);
        buttons[i].addEventListener('mouseover', mouseoverBtn);
    }

}

focusStyle()

let dropDowns = document.querySelectorAll('.dropdown-menu');
dropDowns[0].addEventListener('mouseover', () => {
    document.querySelector('.drop-down-1').style.backgroundColor = 'rgb(223, 223, 223)';
})
dropDowns[0].addEventListener('mouseout', () => {
    document.querySelector('.drop-down-1').style.backgroundColor = 'white';
})

dropDowns[1].addEventListener('mouseover', () => {
    document.querySelector('.drop-down-2 ').style.backgroundColor = 'rgb(223, 223, 223)';
})
dropDowns[1].addEventListener('mouseout', () => {
    document.querySelector('.drop-down-2 ').style.backgroundColor = 'white';
})