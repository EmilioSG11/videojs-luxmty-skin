var player = videojs(document.querySelector('video-js'), {
  controlBar: {
    children: ['playToggle', 'skipBackward', 'skipForward', 'volumePanel', 'currentTimeDisplay', 'timeDivider', 'durationDisplay', 'progressControl', 'liveDisplay', 'seekToLive', 'remainingTimeDisplay', 'customControlSpacer', 'playbackRateMenuButton', 'chaptersButton', 'descriptionsButton', 'subsCapsButton', 'audioTrackButton', 'ShareButton', 'hlsQualitySelector', 'QualitySelector', 'pictureInPictureToggle', 'fullscreenToggle'],
    skipButtons: {
      forward: 10,
      backward: 10
    },
  },
  inactivityTimeout: 3000,
  preload: "metadata",
  autoplay: "", //for autoplay "muted"
  controls: true,
  responsive: true,
  fluid: true,
  liveui: true,
  language: '',
  playbackRates: [0.25, 0.5, 0.75, 1, 1.25, 1.5, 2],
  poster: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg==',
  techOrder: ["html5"],
  html5: {
  },
});

