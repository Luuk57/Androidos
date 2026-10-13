// Aangeroepen door het OS met de container DOM
container.innerHTML = `
    <div style="text-align:center;">
        <h4 style="color:#00ffcc; margin-bottom:10px;">Netwerk Rekenmachine</h4>
        <input type="text" id="calc-res" style="width:100%; padding:8px; background:#000; color:#fff; border:1px solid #00ffcc; margin-bottom:10px; text-align:right;" readonly>
        <div style="display:grid; grid-template-columns: repeat(4, 1fr); gap:5px;">
            <button onclick="document.getElementById('calc-res').value+='7'">7</button>
            <button onclick="document.getElementById('calc-res').value+='8'">8</button>
            <button onclick="document.getElementById('calc-res').value+='9'">9</button>
            <button onclick="document.getElementById('calc-res').value=''">C</button>
        </div>
    </div>
`;
