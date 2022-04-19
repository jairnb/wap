// const allSongsTable = document.getElementById('all-songs-table');

function loadTableData(items) {
    const table = document.getElementById("all-songs-table");
    table.innerHTML = '';
    items.forEach(item => {
        let row = table.insertRow();
        
        let id = row.insertCell(0);
        id.innerHTML = item.id;
        
        let title = row.insertCell(1);
        title.innerHTML = item.title;
        
        let releaseDate = row.insertCell(2);
        releaseDate.innerHTML = item.releaseDate;

        let actions = row.insertCell(3);
        actions.innerHTML = `<a class="btn btn-circle btn-primary ml-5" onClick="addToPlaylist(${item.id})" type="button">
                               <i class="fas fa-plus fa-sm"></i>
                            </a>
                            `
    });
}

async function addToPlaylist(id) {
    let song = await fetch(`http://localhost:3000/songs/${id}`, {
        headers: {
            'Content-Type': 'application/json',
            'token': userTokenGlobal
        }, 
    });
    let item = await song.json();
  
    const table = document.getElementById("playlist-songs-table");
  
    let check_existence = false;

    for (i = 1; i < table.rows.length; i++){
        let oCells = table.rows.item(i).cells;

        for(var j = 0; j < oCells.length; j++){
            var cellVal = oCells.item(0).innerHTML[0];
            if (cellVal.charAt(0) == id) {
                check_existence = true;
            }
        }
     }
 
    if (!check_existence) {
        let row = table.insertRow();
        
        let id2 = row.insertCell(0);
        id2.innerHTML = item.id;
        
        let title = row.insertCell(1);
        title.innerHTML = item.title;
        

        let actions = row.insertCell(2);
        actions.innerHTML = `<a class="btn btn-circle btn-primary ml-5" data-idSong="${item.id}" onClick="removeFromPlaylist(this)" type="button">
                                <i class="fas fa-minus fa-sm"></i>
                            </a>
                            <a class="btn btn-circle btn-primary ml-5" type="button">
                                <i class="fas fa-play fa-sm"></i>
                            </a>
                            `
    }

    addSongToPlaylist(id);
}

async function addSongToPlaylist(id) {
    let playlist = await fetch(`http://localhost:3000/playlists/${sessionStorage.getItem('token')}`, {
        headers: {
            'Content-Type': 'application/json',
            'token': userTokenGlobal
        },
    });
    let playlistItem = await playlist.json();

    const response = await fetch("http://localhost:3000/playlists/add-song-to-playlist", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'token': userTokenGlobal
        },
        body: JSON.stringify({
            playlistId: playlistItem.id,
            songId: id
        }) 
    });

}


async function removeFromPlaylist(item) {
    let row = item.parentNode.parentNode;
    row.parentNode.removeChild(row);

    let playlist = await fetch(`http://localhost:3000/playlists/${sessionStorage.getItem('token')}`, {
        headers: {
            'Content-Type': 'application/json',
            'token': userTokenGlobal
        },
    });
    let playlistItem = await playlist.json();

    const response = await fetch("http://localhost:3000/playlists/delete-song-from-playlist", {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'token': userTokenGlobal
        },
        body: JSON.stringify({
            playlistId: playlistItem.id,
            songId: item.getAttribute('data-idSong')
        }) 
    });
}


async function loadTableAllSongs() {

    let songs = await fetch('http://localhost:3000/songs', {
        headers: {
            'Content-Type': 'application/json',
            'token': userTokenGlobal
        },
    });
    let items = await songs.json();

    loadTableData(items);

}






