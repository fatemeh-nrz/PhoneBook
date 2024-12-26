// selector

const inputName = document.querySelector(".input-name");
const inputNumber = document.querySelector(".input-number");
const numberType = document.querySelector(".type-selector");
const inputBtn = document.querySelector(".input-btn");
// const mainItemContainer = document.querySelector(".main-item-container");
const itemContainer = document.querySelector(".item-container");
const filterDiv = document.querySelector(".filter-div");
const filterSelect = document.querySelector(".filter-select");

//event listner
inputBtn.addEventListener("click", addItem);
itemContainer.addEventListener("click", deleteItem);
filterDiv.addEventListener("click", filterFunction);

// function

function addItem(event) {
  event.preventDefault();

  filterDiv.style.display = "block";

  // CREATING ELEMENT FOR ALL ITEMS
  const innerDivItemContainer = document.createElement("div");
  innerDivItemContainer.classList.add("inner-div-item-container");

  innerDivItemContainer.classList.add(
    numberType.options[numberType.selectedIndex].value
  );
  console.log(innerDivItemContainer);

  const trashButton = document.createElement("button");
  // trashButton.innerHTML = '<i class="fa-solid fa-trash"></i>'
  trashButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
  const mainItems = document.createElement("li");
  const nameSpan = document.createElement("span");
  const PhoneNumberSpan = document.createElement("span");
  const numberTypeSpan = document.createElement("span");

  nameSpan.innerText = inputName.value;
  PhoneNumberSpan.innerHTML = inputNumber.value;
  // console.log(numberType.options[numberType.selectedIndex].innerHTML);
  numberTypeSpan.innerHTML =
    numberType.options[numberType.selectedIndex].innerHTML;

  mainItems.appendChild(nameSpan);
  mainItems.appendChild(PhoneNumberSpan);
  mainItems.appendChild(numberTypeSpan);
  mainItems.classList.add(".main-items");

  // itemContainer.classList.add('.item-container')

  innerDivItemContainer.appendChild(mainItems);
  innerDivItemContainer.appendChild(trashButton);
  itemContainer.appendChild(innerDivItemContainer);
  trashButton.classList.add(".trash-btn");
  // mainItemContainer.appendChild(itemContainer);

  inputName.value = "";
  inputNumber.value = "";
}

function deleteItem(event) {
  // console.log(event.target);
  const clickedItem = event.target;
  const clickedElementParent = clickedItem.parentElement;
  console.log(clickedElementParent);

  if (clickedItem.classList[0] == ".trash-btn") {
    setTimeout(function () {
      clickedElementParent.remove();
    }, 1000);

    clickedElementParent.classList.add("fall");
  }
}

function filterFunction(event) {
  const filterIndex = filterSelect.options[filterSelect.selectedIndex].value;
  console.log(filterIndex);

  const allchild = itemContainer.childNodes;
  // const selectedNumberType = filterSelect.options[selectedIndex].value;
  allchild.forEach(function (mytempContact) {
    console.log(mytempContact);
    switch (event.target.value) {
      case "2":
        mytempContact.style.display = "flex";
        break;
      case "1":
        if (mytempContact.classList.contains("1")) {
          mytempContact.style.display = "flex";
        } else mytempContact.style.display = "none";
        break;
      case "0":
        if (mytempContact.classList.contains("0")) {
          mytempContact.style.display = "flex";
        } else mytempContact.style.display = "none";
        break;
    }
  });
}

function saveContacts(contact) {

  // console.log(contact)

  let contacts;

  if (localStorage.getItem('contacts') === null) {
    contacts = [];
  } else {
    contacts = JSON.parse(localStorage.getItem('contacts'));
  }

  // [{name : vale } , {name2: value} , ...]

  console.log(contact)


  contacts.push(contact);
  localStorage.setItem('contacts' ,JSON.stringify(contacts));
  console.log(contacts);

}
