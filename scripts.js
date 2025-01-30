
        function startSurprise() {
            let landing = document.getElementById('landing');
            let mainContent = document.getElementById('mainContent');
            landing.style.opacity = '0';
            setTimeout(() => {
                landing.style.display = 'none';
                mainContent.classList.remove('hidden');
                mainContent.classList.add('visible');
            }, 1000);
        }
        function next() {
            let mainContent = document.getElementById('mainContent');
            let mainContent2 = document.getElementById('mainContent2');
            mainContent.style.opacity = '0';
            setTimeout(() => {
                mainContent.style.display = 'none';
                mainContent2.classList.remove('hidden');
                mainContent2.classList.add('visible');
            }, 1000);
        }
        function next2() {
            let mainContent2 = document.getElementById('mainContent2');
            let mainContent3 = document.getElementById('mainContent3');
            mainContent2.style.opacity = '0';
            setTimeout(() => {
                mainContent2.style.display = 'none';
                mainContent3.classList.remove('hidden');
                mainContent3.classList.add('visible');
            }, 1000);
        }
        function showRose() {
            document.getElementById('roseImage').style.display = 'block';
        }
        function createEmoji() {
            const emojiList = ['❤','😍','💕','🌹','🧡','💛','💚','💗','💞','💕','😋','😊','😉','😚','🤗'];
            const emoji = document.createElement('div');
            emoji.classList.add('emoji');
            emoji.textContent = emojiList[Math.floor(Math.random() * emojiList.length)];
            document.body.appendChild(emoji);
            emoji.style.left = Math.random() * window.innerWidth + 'px';
            emoji.style.top = Math.random() * window.innerHeight + 'px';
            setTimeout(() => { emoji.remove(); }, 5000);
        }
        setInterval(createEmoji, 150);
        function startSurprise() {
            let landing = document.getElementById('landing');
            let mainContent = document.getElementById('mainContent');
            landing.style.opacity = '0';
            setTimeout(() => {
                landing.style.display = 'none';
                mainContent.classList.remove('hidden');
                mainContent.classList.add('visible');
            }, 1000);
        }

        