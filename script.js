let btn = document.getElementById('btn');
let input = document.getElementById('inp');
let boxes = document.querySelectorAll('.box');
let drag = null;

btn.addEventListener("click", takeinput);

function takeinput() {
    if (input.value !== '') {
        boxes[0].innerHTML += `<p class="item" draggable="true">${input.value}</p>`;
        input.value = "";
    }
    dragitem();
}

function dragitem() {
    let items = document.querySelectorAll('.item');
    items.forEach(item => {
        item.addEventListener("dragstart", function () {
            drag = item;
            item.style.opacity = '1';
        });

        item.addEventListener("dragend", function () {
            drag = null;
        });
    });

    boxes.forEach(box => {
        box.addEventListener('dragover', function (e) {
            e.preventDefault(); 
            this.style.background = '#f0f0f0';
            this.style.color = '#fff';
        });
        box.addEventListener('dragleave',function(){
            this.style.background = '#fff';
            this.style.color = 'black';
        });

        box.addEventListener('drop',function(){
            box.append(drag); 
            this.style.background = '#fff';
            this.style.color = 'black';
        })
    });
}
