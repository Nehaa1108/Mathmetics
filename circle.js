const form = document.getElementById('form'); 
const numberInput = document.getElementById('number'); 
const btn = document.getElementById('btn'); 
form.addEventListener('submit', (e) => { 
  e.preventDefault(); 
  let radius = parseFloat(numberInput.value); 
  if (!radius) { 
    Swal.fire({ 
      title: 'Error', 
      text: 'Please enter a valid radius', 
      icon: 'error', 
    }); 
    return; 
  } 
  let pi = Math.PI; 
  let area = pi * (radius ** 2); 
  Swal.fire({ 
    title: 'Result', 
    text: `The area of the circle is ${area.toFixed(2)}`, 
    icon: 'success', 
  }).then((result) => { 
    if (result.isConfirmed) { 
        location.reload(); 
    } 
  }); 
});



