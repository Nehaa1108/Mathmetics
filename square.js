
const form = document.getElementById('form'); 
const numberInput = document.getElementById('number'); 
const btn = document.getElementById('btn'); 
form.addEventListener('submit', (e) => { 
  e.preventDefault(); 
  let side = parseFloat(numberInput.value); 
  if (!side) { 	
    Swal.fire({ 
      title: 'Error', 
      text: 'Please enter a valid side', 
      icon: 'error', 
    }); 
    return; 
  } 
  
  let area = side*side; 
  Swal.fire({ 
    title: 'Result', 
    text: `The area of the Square is ${area.toFixed(2)}`, 
    icon: 'success', 
  }).then((result) => { 
    if (result.isConfirmed) { 
        location.reload(); 
    } 
  });
  }); 
