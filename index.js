function showScreen(screenId) {
    // Hide all screens
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
        screen.style.display = 'none';
    });

    // Show the selected screen
    document.getElementById(screenId).style.display = 'block';
}

function startPhoneCall() {
    const phoneNumber = document.getElementById('phone-number').value;
    const sourceLanguage = document.getElementById('call-source-language').value;
    const targetLanguage = document.getElementById('call-target-language').value;

    const callDetails = `
        Starting call to ${phoneNumber} from ${sourceLanguage} to ${targetLanguage}.
        Translating in real-time...
    `;

    document.getElementById('call-output').innerHTML = callDetails;
}

function readPhoneCallDetails() {
    const phoneNumber = document.getElementById('phone-number').value;
    const sourceLanguage = document.getElementById('call-source-language').value;
    const targetLanguage = document.getElementById('call-target-language').value;

    const utterance = new SpeechSynthesisUtterance(`The phone number is ${phoneNumber}. Translating from ${sourceLanguage} to ${targetLanguage}.`);
    window.speechSynthesis.speak(utterance);
}

function translateVideo() {
    const videoFile = document.getElementById('video-upload').files[0];
    if (videoFile) {
        const videoUrl = URL.createObjectURL(videoFile);
        const videoDisplay = document.getElementById('video-display');
        videoDisplay.src = videoUrl;
        videoDisplay.style.display = 'block';
    } else {
        alert('Please upload a video first.');
    }
}

function translateYouTubeVideo() {
    const url = document.getElementById('youtube-url').value;
    let videoId = url.split('v=')[1];
    const ampersandPosition = videoId.indexOf('&');
    if (ampersandPosition !== -1) {
        videoId = videoId.substring(0, ampersandPosition);
    }
    document.getElementById('youtube-video').src = `https://www.youtube.com/embed/${videoId}`;
    document.getElementById('youtube-video-container').style.display = 'block';
}

function translateText() {
    const originalText = document.getElementById('original-text').value;
    const translatedText = `Translated Text: ${originalText}`; // Placeholder for translation logic
    document.getElementById('translated-text').value = translatedText;
}

function readText() {
    const text = document.getElementById('translated-text').value;
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
}

function sendMessage() {
    const chatInput = document.getElementById('chat-input');
    const message = chatInput.value;
    const messagesContainer = document.getElementById('chat-messages');

    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.innerText = message;

    messagesContainer.appendChild(messageElement);
    chatInput.value = '';
}

function downloadContent() {
    alert('Downloading content for offline use...');
}

function addCurriculum() {
    const title = document.getElementById('curriculum-title').value;
    const content = document.getElementById('curriculum-content').value;
    alert(`Added Curriculum:\nTitle: ${title}\nContent: ${content}`);
}
