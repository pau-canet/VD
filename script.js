document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('heartImage').src = "C:\Users\PauCanet\VD\WhatsApp Image 2025-02-10 at 13.07.27.png"; // Changez l'image pour une image heureuse
    document.getElementById('response').textContent = 'El viernes 14 de febrero tienes una date ! ❤️';
    document.getElementById('response').classList.remove('hidden');
    document.getElementById('yesButton').disabled = true;
    document.getElementById('noButton').disabled = true;
});


document.getElementById('noButton').addEventListener('click', function() {
    document.getElementById('response').classList.remove('hidden');
    document.getElementById('noButton').style.display = 'none';
    document.getElementById('yesButton').style.width = '100%';
    document.getElementById('yesButton').textContent = 'Dijiste que si verdad? ';
});

