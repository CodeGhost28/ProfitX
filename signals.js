document.getElementById('generateSignal').addEventListener('click', async function() {
    const currentPrice = parseFloat(document.getElementById('currentPrice').value);
    const atr = parseFloat(document.getElementById('atr').value);
    const stochastic = parseFloat(document.getElementById('stochastic').value);

    const response = await fetch('/signals/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ currentPrice, atr, stochastic })
    });

    const signal = await response.json();
    document.getElementById('tp1').textContent = `TP1: ${signal.tp1}`;
    document.getElementById('tp2').textContent = `TP2: ${signal.tp2}`;
    document.getElementById('tp3').textContent = `TP3: ${signal.tp3}`;
    document.getElementById('sl').textContent = `SL: ${signal.sl}`;
});
