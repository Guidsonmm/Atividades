import { Address4, Address6 } from 'ip-address';

// Seleciona os elementos da página HTML
const form = document.getElementById('ip-form');
const tableBody = document.querySelector('#ip-table tbody');

// Armazena os endereços IP cadastrados
let ipList = [];

// Função para adicionar um novo endereço IP à lista
function addIP(ip, mask, version) {
  // Cria um objeto com as informações do endereço IP
  const newIP = {
    ip: ip,
    mask: mask,
    version: version
  };

  // Verifica se o endereço IP já está cadastrado
  const ipIndex = ipList.findIndex(item => item.ip === ip);
  if (ipIndex !== -1) {
    // Se o endereço IP já está cadastrado, exibe uma mensagem de erro e retorna
    alert('This IP address is already registered.');
    return;
  }

  // Adiciona o novo endereço IP à lista
  ipList.push(newIP);

  // Limpa o formulário
  form.reset();

  // Atualiza a tabela de endereços IP
  renderTable();
}

// Função para editar um endereço IP existente
function editIP(ip, mask, version, index) {
  // Cria um objeto com as informações atualizadas do endereço IP
  const updatedIP = {
    ip: ip,
    mask: mask,
    version: version
  };

  // Substitui o endereço IP antigo pelo atualizado
  ipList.splice(index, 1, updatedIP);

  // Atualiza a tabela de endereços IP
  renderTable();
}

// Função para remover um endereço IP da lista
function deleteIP(index) {
  // Remove o endereço IP selecionado da lista
  ipList.splice(index, 1);

  // Atualiza a tabela de endereços IP
  renderTable();
}

// Função para renderizar a tabela de endereços IP
function renderTable() {
  // Limpa o corpo da tabela
  tableBody.innerHTML = '';

  // Itera sobre a lista de endereços IP e cria uma nova linha na tabela para cada item
  for (let i = 0; i < ipList.length; i++) {
    const ip = ipList[i].ip;
    const mask = ipList[i].mask;
    const version = ipList[i].version;

    const row = tableBody.insertRow();
    const ipCell = row.insertCell();
    const maskCell = row.insertCell();
    const versionCell = row.insertCell();
    const actionsCell = row.insertCell();

    ipCell.textContent = ip;
    maskCell.textContent = mask;
    versionCell.textContent = version;

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => {
      editIPForm(ip, mask, version, i);
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      deleteIP(i);
    });

    actionsCell.appendChild(editButton);
    actionsCell.appendChild(deleteButton);
  }
}

// Função para preencher o formulário de edição com os dados do endereço IP selecionado
function editIPForm(ip, mask, version, index) {
  // Preenche os campos do formulário com os valores do endereço IP selecionado
  document.getElementById('ip
