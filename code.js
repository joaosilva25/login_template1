function view() {
    const senha=document.querySelector('.senha');
    const img=document.querySelector('.imagem');

    if (senha.getAttribute('type')==='text') {
        senha.setAttribute('type','password');
        img.setAttribute('src','assets/images/olho.png')
    }
    else {
        senha.setAttribute ('type','text');
        img.setAttribute('src','assets/images/olho_nulo.png')
    }

}
