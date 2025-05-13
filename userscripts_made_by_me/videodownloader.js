// ==UserScript==
// @name         MP4 Video Downloader
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Adds a button to download all MP4 videos on the page
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    console.log('🎬 MP4 Video Downloader script loaded');

    function getMP4URLs() {
        const urls = new Set();

        // Check <video src="..."> and <source src="..."> inside <video>
        document.querySelectorAll('video, video source').forEach(tag => {
            let src = tag.src || tag.getAttribute('src');
            if (!src) return;

            try {
                src = new URL(src, window.location.href).href;
            } catch (e) {
                return; // Skip invalid URLs
            }

            if (/\.mp4(\?.*)?$/i.test(src)) {
                urls.add(src);
            }
        });

        return Array.from(urls);
    }

    function downloadMP4(url, filename = 'video.mp4') {
        fetch(url)
            .then(response => response.blob())
            .then(blob => {
                const blobUrl = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = blobUrl;
                a.download = filename;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(blobUrl);
            })
            .catch(err => console.error('Download failed:', err, url));
    }

    function addDownloadButton() {
        if (document.getElementById('mp4-download-btn')) return;

        const button = document.createElement('button');
        button.id = 'mp4-download-btn';
        button.textContent = 'Download MP4 Videos';
        button.style.position = 'fixed';
        button.style.top = '35px';
        button.style.right = '20px';
        button.style.zIndex = '99999';
        button.style.padding = '10px 15px';
        button.style.backgroundColor = '#007bff';
        button.style.color = 'white';
        button.style.border = 'none';
        button.style.borderRadius = '5px';
        button.style.cursor = 'pointer';

        button.onclick = () => {
            const urls = getMP4URLs();
            if (urls.length === 0) {
                alert('No MP4 videos found!');
            } else {
                urls.forEach((url, i) =>
                    downloadMP4(url, `video-${i + 1}.mp4`)
                );
            }
        };

        document.body.appendChild(button);
        console.log('🎬 Download button added');
    }

    const interval = setInterval(() => {
        if (document.readyState === 'complete' || document.readyState === 'interactive') {
            addDownloadButton();
        }
    }, 2000);
})();
