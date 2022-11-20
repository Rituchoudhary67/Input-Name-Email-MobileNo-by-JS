const inname = document.querySelector("#input-text");
const email = document.querySelector("#input-email");
const number = document.querySelector("#input-number");
const submitbutton = document.querySelector("#submit-button");
const firsttable = document.querySelector("#firsttable");
const secondtable = document.querySelector("#secondtable");


firsttable.addEventListener('submit' , (event)=>{
    event.preventDefault();
});


submitbutton.addEventListener('click', buttonSubmit );

arr = [];

function buttonSubmit () {
    if(inname.value == ""){
        alert("Please Enter your name.");
    }
    else if(email.value == ""){
        alert("Please Enter ypur Email_Id");
    }
    else if(number.value == ""){
        alert("Plase Enter your phone number");
    }
    else
     {
        const newname = inname.value;
        const newemail = email.value;
        const newnumber = number.value;

        const row1 = document.createElement('tr');
                row1.setAttribute('class',"rowbody");
                // console.log(row)

        const row = document.createElement('tr');
        const first = document.createElement('td');
        const second = document.createElement('td');
        const third = document.createElement('td');

        const deletebutton = document.createElement('button');
        deletebutton.className='deletebutton';
        deletebutton.innerText = "Delete";

        secondtable.appendChild(row);
        row.appendChild(first);
        row.appendChild(second);
        row.appendChild(third);
        row.appendChild(deletebutton);

        first.innerText = inname.value;
        second.innerText = email.value;
        third.innerText = number.value;
        arr.push(row);
    }
}

submitbutton.addEventListener('click',ele)
function ele (){
    inname.value = "";
    email.value = "";
    number.value = "";
}

secondtable.addEventListener('click',deleteitem);
function deleteitem(d){
    if(d.target.classList.contains('deletebutton')){
        console.log(d);
        d.target.parentNode.remove();
    }
}