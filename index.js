function getElement(selector) {
  return document.querySelector(selector);
}

const ipInput = getElement('#ip-input');
const maskInput = getElement('#mask-input');
const versionSelect = getElement('#version-select');
const addButton = getElement('#add-button');
const clearButton = getElement('#clear-button');
const tableBody = getElement('#ip-table-body');

let ipList = [];

function addIp() {
  const ip = ipInput.value.trim();
  const mask = maskInput.value.trim();
  const version = versionSelect.value;

  if (ip === '' || mask === '') {
    alert('IP e máscara são campos obrigatórios');
    return;
  }

  ipList.push({ ip, mask, version });
  renderTable();
  clearForm();
}

function clearTable() {
  ipList = [];
  renderTable();
}

function clearForm() {
  ipInput.value = '';
  maskInput.value = '';
  versionSelect.value = 'ipv4';
}

function deleteIp(index) {
  ipList.splice(index, 1);
  renderTable();
}

function renderTable() {
  tableBody.innerHTML = '';

  ipList.forEach((ip, index) => {
    const tr = document.createElement('tr');

    const ipTd = document.createElement('td');
    ipTd.textContent = ip.ip;
    tr.appendChild(ipTd);

    const maskTd = document.createElement('td');
    maskTd.textContent = ip.mask;
    tr.appendChild(maskTd);

    const versionTd = document.createElement('td');
    versionTd.textContent = ip.version;
    tr.appendChild(versionTd);

    const deleteButtonTd = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Excluir';
    deleteButton.addEventListener('click', () => deleteIp(index));
    deleteButtonTd.appendChild(deleteButton);
    tr.appendChild(deleteButtonTd);

    tableBody.appendChild(tr);
  });
}

addButton.addEventListener('click', addIp);
clearButton.addEventListener('click', clearTable);
