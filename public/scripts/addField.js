// Procurar o botão
document.querySelector("#add-time")

// Quando clicar o botão
.addEventListener('click', cloneField)

// Executar uma ação
function cloneField() {

    // Duplicar os campos, mas que campos?
    const /*const = valor constante */ newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) //boolean: true or false // buscando o campo no html

    // pegar os campos, mas que campos??
    const clearFields = newFieldContainer.querySelectorAll('input') //querySelectorAll -> busca todos os inputs 
        
    // para cada campo, limpar
    clearFields.forEach(function(field) {
        // pegar o field do momento e limpar ele
        field.value = ""        
    })

    // Colocar na página, mas aonde??
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
    
}
 