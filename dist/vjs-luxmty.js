var player = videojs("luxmty-player", {
  controlBar: {
    children: ['playToggle', 'skipBackward', 'skipForward', 'volumePanel', 'currentTimeDisplay', 'timeDivider', 'durationDisplay', 'progressControl', 'liveDisplay', 'seekToLive', 'remainingTimeDisplay', 'customControlSpacer', 'playbackRateMenuButton', 'chaptersButton', 'descriptionsButton', 'subsCapsButton', 'audioTrackButton', 'ShareButton', 'pictureInPictureToggle', 'fullscreenToggle'],
  },
  preload: "metadata",
  autoplay: "", //for autoplay "muted"
  controls: true,
  responsive: true,
  fluid: true,
  liveui: true,
  preferFullWindow: true,
  html5: {
  },
});
