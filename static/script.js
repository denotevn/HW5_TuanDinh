const imgcontainers = Array.from(document.getElementsByClassName('imgcontainer'));
const modal = document.getElementById('modal-plain');
const modal_image = document.getElementById('modal-img');
const closeButton = document.getElementById('close-button');
imgcontainers.forEach(ele =>{
    ele.onclick = (e) =>{
        modal.style.display = 'block';
        modal_image.src = e.target.src;
    };
});

closeButton.onclick = () => {
    modal.style.display = 'none';
}

modal.onclick = (e) =>{
    if(e.target === modal_image){
        return;
    }
    modal.style.display = 'none';

}
let username = document.getElementById('username')
let password = document.getElementById('password')


