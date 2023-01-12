const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
    const favchap = input.value;
    input.value = '';
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    li.textContent = favchap;
    deleteButton.textContent = '❌';
    li.append(deleteButton);
    list.append(li);
    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        input.focus();
      });
      input.focus();
})