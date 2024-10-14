document.getElementById('commentForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o envio padrão do formulário

    // Obtém os valores dos campos
    const name = document.getElementById('commentName').value;
    const comment = document.getElementById('commentText').value;

    // Cria um novo elemento de comentário
    const commentItem = document.createElement('div');
    commentItem.classList.add('comment_item');
    commentItem.innerHTML = `<strong>${name}</strong>: <p>${comment}</p>`;

    // Adiciona o novo comentário à lista
    document.getElementById('commentsList').appendChild(commentItem);

    // Limpa os campos do formulário
    document.getElementById('commentName').value = '';
    document.getElementById('commentText').value = '';
});
