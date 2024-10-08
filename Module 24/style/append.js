console.log('start append js');

const placesList = document.getElementById("places-list");
// console.log(placesList)
const li = document.createElement('li');
li.innerText = 'biharban';

// add the child
placesList.appendChild(li)

// add new full section
//1. where to add 
const mainContainer = document.getElementById('main-container');
console.log(mainContainer);

// 2. what to added
const section = document.createElement('section');
section.id = "blog-section"
const h1 = document.createElement('h1');
h1.innerText = 'This is a blog site';
section.appendChild(h1);

const ul = document.createElement('ul');

const li1 = document.createElement('li');
li1.innerText = 'couple blog';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'marriage blog';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'tour blog';
ul.appendChild(li3);

// 3. add the child
section.appendChild(ul);

mainContainer.appendChild(section)

//-----------set innerHTML directly------------
const sectionDress = document.createElement('section');
sectionDress.id = 'food-section'
sectionDress.innerHTML = `
<h1>New Food SEction</h1>
<ul>
    <li>biriani</li>
    <li>chicken</li>
    <li>meat</li>
</ul>
`

mainContainer.appendChild(sectionDress)

