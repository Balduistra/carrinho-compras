// let seleção = document.getElementById('produto');
// let fone = seleção.querySelector('select option[value="Fone de ouvido - R$100"]').value;
// let celular = seleção.querySelector('select option[value="Celular - R$1400"]').value; 
// let oculosVR = seleção.querySelector('select option[value="Oculus VR - R$5000"]').value;

// let quantidade = document.getElementById('quantidade').value;

function adicionar() {
    let selecao = document.getElementById('produto');
    let fone = parseInt(selecao.querySelector('select option[value="Fone de ouvido - R$100"]').value.split(' - ')[1].replace('R$', ''));
    let celular = parseInt(selecao.querySelector('select option[value="Celular - R$1400"]').value.split(' - ')[1].replace('R$', ''));
    let oculosVR = parseInt(selecao.querySelector('select option[value="Oculus VR - R$5000"]').value.split(' - ')[1].replace('R$', ''));
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let adicionado = quantidade * fone;
    console.log('valor adicionado: ' + adicionado);
}

