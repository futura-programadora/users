// Função que chama a API para buscar usuários
async function searchUser() {
    const searchQuery = document.getElementById('search').value.trim(); //o .trim server para tirar espaços antes e depois da frase 
    
    if (!searchQuery) {//se a parte de pesquisa estiver vazia não mostrar nenhum usuario
      document.getElementById('user-list').innerHTML = '';
      return;
    }
  
    // Chama a API para buscar usuários que correspondem ao nome (API feita para testes e fins educativos)
    const url = `https://jsonplaceholder.typicode.com/users`;
    const response = await fetch(url);
    const users = await response.json();
  
    // Filtra usuários que correspondem à pesquisa
    const filteredUsers = users.filter(user => user.name.toLowerCase().includes(searchQuery.toLowerCase())); //verifica se o nome do usuário contém a letra ou substring inserida pelo usuário (mesmo que seja uma única letra).
  
    // Exibe os usuários encontrados
    displayUsers(filteredUsers);
  }
  
  // Função para exibir os usuários encontrados
  function displayUsers(users) {
    const userList = document.getElementById('user-list');
    userList.innerHTML = '';  // Limpa a lista antes de exibir os resultados
  
    // Se não houver resultados, mostra uma mensagem
    if (users.length === 0) {
      userList.innerHTML = '<p>Nenhum usuário encontrado.</p>';
      return;
    }
  
    // Exibe os usuários encontrados com os dados
    users.forEach(user => {
      const userCard = document.createElement('div');
      userCard.className = 'user-card';
      userCard.innerHTML = `
        <h3>${user.name}</h3>
        <p>Email: ${user.email}</p>
        <p>Telefone: ${user.phone}</p>
        <p>Endereço: ${user.address.street}, ${user.address.city}</p>
      `;
      userList.appendChild(userCard);
    });
  }
  