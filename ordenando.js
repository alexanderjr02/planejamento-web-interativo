// todas as funções no padrão Arrow Function

// a) swap - troca elementos do vetor
const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

// b) shuffle - embaralha vetor com qtd de trocas
const shuffle = (arr, qtd) => {
  const n = arr.length;
  for(let k = 0; k < qtd; k++){
    const i = Math.floor(Math.random() * n);
    const j = Math.floor(Math.random() * n);
    swap(arr, i, j);
  }
};

// c) bubble_sort - Bubble Sort
const bubble_sort = (arr) => {
  const n = arr.length;
  for(let i=0; i < n - 1; i++){
    for(let j=0; j < n - 1 - i; j++){
      if(arr[j] > arr[j+1]){
        swap(arr, j, j+1);
      }
    }
  }
  return arr;
};

// d) selection_sort - Selection Sort
const selection_sort = (arr) => {
  const n = arr.length;
  for(let i = 0; i < n - 1; i++){
    let minIndex = i;
    for(let j = i + 1; j < n; j++){
      if(arr[j] < arr[minIndex]){
        minIndex = j;
      }
    }
    if(minIndex !== i){
      swap(arr, i, minIndex);
    }
  }
  return arr;
};

// f) particionamento - apoio ao quick_sort
const particionamento = (arr, inicio, fim) => {
  const pivot = arr[fim];
  let i = inicio - 1;
  for(let j = inicio; j < fim; j++){
    if(arr[j] <= pivot){
      i++;
      swap(arr, i, j);
    }
  }
  swap(arr, i + 1, fim);
  return i + 1;
};

// e) quick_sort - recursivo
const quick_sort = (arr, inicio, fim) => {
  if(inicio < fim){
    const pi = particionamento(arr, inicio, fim);
    quick_sort(arr, inicio, pi - 1);
    quick_sort(arr, pi + 1, fim);
  }
  return arr;
};
