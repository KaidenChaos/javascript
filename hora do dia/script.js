function updateHour() {
    const hourInput = document.getElementById('hourInput').value;
    const msg = document.getElementById('msg');
    const img = document.getElementById('imagem');

    if (hourInput === '' || hourInput < 0 || hourInput > 23) {
        msg.innerHTML = `digita uma hora`;
    }

        const hour = parseInt(hourInput);
    
        if (hour >= 6 && hour < 12) {
            msg.innerHTML = `Bom dia são ${hourInput} horas da manhã`;
            img.src = 'dia.jpg'; 
               document.body.style.background = '#71859b'
        } else if (hour >= 12 && hour < 18) {
            msg.innerHTML = `Boa Tarde! são ${hourInput} horas da tarde` ;
            img.src = 'tarde.jpg'; 
                 document.body.style.background = '#ffa500'
        } else {
            msg.innerHTML = `Boa noite! São ${hourInput} horas da noite`;
            img.src = 'noite.jpg'; 
              document.body.style.background = '#9932cc'
        }
    }

