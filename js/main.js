var elCard = document.createElement('div')
elCard.classList.add('container', 'pokemon-main', 'pb-5')

var saytImg = document.createElement('img')
saytImg.classList.add('m-auto', 'd-block', 'mt-4', 'mb-4')
saytImg.setAttribute('src', '../img/main-img.svg')

var formWrapper = document.createElement('form');
formWrapper.classList.add('class', 'form-wrapper', 'd-flex', 'w-100', 'mb-5', 'justify-content-center', 'pb-5')

var selectForm = document.createElement('select');
selectForm.classList.add('class', 'select-form', 'col-2', 'p-2', 'text-center', 'p-2')

var selectWrapperOption = document.createElement('option')
selectWrapperOption.textContent = 'Gross';


var lettersSelectrForm = document.createElement('select');
lettersSelectrForm.classList.add('class', 'form__letters', 'col-2', 'text-center')

var lettersFormOption = document.createElement('option')
lettersFormOption.textContent = 'Aa-Zz';

var search = document.createElement('input');
search.setAttribute('placeholder', 'Search')
search.setAttribute('type', 'search')
search.classList.add('class', 'form-text', 'col-2', 'p-2')

var btn = document.createElement('button');
btn.textContent = 'Button';
btn.classList.add('class', 'btn')

var list = document.createElement('ul');
list.classList.add('list', 'd-flex', 'list-unstyled', 'flex-wrap', 'justify-content-center', 'mb-5')

for (var i = 0; i < pokemons.length; i++) {
  listItme = document.createElement('li');
  listItme.classList.add('list-item',)

  listLine = document.createElement('hr');
  listLine.classList.add('pokimon-line')

  listItmeImg = document.createElement('img')
  listItmeImg.setAttribute('src', pokemons[i].img)
  listItmeImg.classList.add('pokemons-image', 'm-auto', 'mt-3', 'd-block')
  listItmeImg.setAttribute('width', '157')
  listItmeImg.setAttribute('height', '157')

  pokimonName = document.createElement('h3');
  pokimonName.textContent = pokemons[i].name;
  pokimonName.setAttribute('class', 'pokimon-name');

  pokimonTitle = document.createElement('p');
  pokimonTitle.textContent = pokemons[i].type;
  pokimonTitle.setAttribute('class', 'pokimon-title');

  pokimonWeight = document.createElement('p');
  pokimonWeight.textContent = pokemons[i].weight;
  pokimonWeight.classList.add('pokimon-weight', 'd-inline-block', 'me-4');

  pokimonAge = document.createElement('p');
  pokimonAge.textContent = pokemons[i].age;
  pokimonAge.classList.add('pokimon-age', 'd-inline-block');

  listItme.appendChild(listItmeImg);
  listItme.appendChild(listLine);
  listItme.appendChild(pokimonName);
  listItme.appendChild(pokimonTitle);
  listItme.appendChild(pokimonWeight);
  listItme.appendChild(pokimonAge);
  list.appendChild(listItme);

  elCard.appendChild(saytImg);
  selectForm.appendChild(selectWrapperOption)
  lettersSelectrForm.appendChild(lettersFormOption)
  formWrapper.appendChild(selectForm);
  formWrapper.appendChild(search);
  formWrapper.appendChild(lettersSelectrForm);
  formWrapper.appendChild(btn)
  elCard.appendChild(formWrapper);
  elCard.appendChild(list);
  document.body.appendChild(elCard);
}