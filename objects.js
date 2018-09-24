var playlist = {artistName: "songTitle", artistName2: "songTitle2"};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName]=songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
}