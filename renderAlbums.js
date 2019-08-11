
function renderAlbums(albums) {

    // function createTrackInfo (songs) {
    //     return `<div class="song">
    //                 <button>Play</button>
    //                 <div class="title">${albums.albums}</div>
    //                 <div class="length"></div>
    //             </div>`
    // }

    // The info is an array with a object with an array of two objects, each with another object inside
    console.assert(albums.length === 1, "The first array holds more or less than one item")
    /*
    Create a container to hold the tracks,
    */

    /* Second Layer - create a container to hold the albums */
    // function createAlbums (albumInfo) {
    //     return `<div class="album">${albumInfo.albums.title}</div>`
    // }

    // let makeEachAlbum = albumInfo.map(createAlbums)

    /* First layer - create a container to hold the artist */
    function createArtist (albums) {

        console.log(albums.albums[1].title)

        return `<div class="album-container">
                    <div class="artist"><h1>${albums.artist}</h1></div>
                    <div class="title"></div>
                </div>`
    }

    let makeAlbums = albums.map(createArtist)
    


    return `
        <div class="text-center mt-5">
            ${makeAlbums}
        </div>
    `
}


// function buildSingleSongHTML (oneSong) { returns HTML string for a single song }
function buildSingleSongHTML (oneSong) {
    return `<li>
                <div class="songTitle">${oneSong.title}</div>
                <div class="songLength">${oneSong.length}</div>
            </li>`
}
const songsHTMLStrings = songs.map(buildSingleSongHTML)
const songsHTML = songsHTMLStrings.join('')

// function buildSingleAlbumHTML (oneAlbum) { returns HTML string for a single album }
function buildSingleAlbumHTML (oneAlbum) {
    return `<div class="albumInfo">
                <div class="album-cover"><img src="${oneAlbum.albumCover}"></div>
                <div>${oneAlbum.title}</div>
                <ul>
                    ${songHTML}
                </ul>
            </div>`
}
const albumsHTMLStrings = albums.map(buildSingleAlbumHTML)
const albumsHTML = albumsHTMLStrings.join('')

// function buildSingleArtistHTML (artist) { returns HTML for single artist }
function buildSingleArtistHTML (oneArtist) {
    return `<div>
                <div><h1>${oneArtist.artist}</h1></div>
                <div>${albumsHTML}</div>
            </div>`
}

const artistHTMLStrings = artist.map(buildSingleArtistHTML)
const artistHTML = artistHTMLStrings.join('')



function albums() {
    var content = document.getElementById('content');

    var albumsAbstraction = [
        {
            artist: "Creed",
            albums: [
                {
                    title: "My Own Prison",
                    albumCover: "https://images-na.ssl-images-amazon.com/images/I/51Y5ZCMV2QL.jpg",
                    songs: [
                        {
                            title: "Torn",
                            length: "6:25"
                        },
                        {
                            title: "Ode",
                            length: "4:58"
                        },
                        {
                            title: "My Own Prison",
                            length: "5:00"
                        },
                        {
                            title: "Pity for a Dime",
                            length: "4:37"
                        },
                        {
                            title: "In America",
                            length: "3:38"
                        },
                        {
                            title: "Illusion",
                            length: "5:29"
                        }
                    ]

                },
                {
                    title: "Weathered",
                    albumCover: "https://is5-ssl.mzstatic.com/image/thumb/Music22/v4/b1/a4/a9/b1a4a9dd-ecda-6233-07da-f53848d37bdf/mzm.qakvcpwo.jpg/1200x630bb.jpg",
                    songs: [
                        {
                            title: "Bullets",
                            length: "6:25"
                        },
                        {
                            title: "Freedom Fighter",
                            length: "4:58"
                        },
                        {
                            title: "Who's Got My Back?",
                            length: "5:00"
                        },
                        {
                            title: "Signs",
                            length: "4:37"
                        },
                        {
                            title: "One Last Breath",
                            length: "3:38"
                        },
                        {
                            title: "My Sacrifice",
                            length: "5:29"
                        }
                    ]
                }
            ]
        }
    ]

    content.innerHTML = renderAlbums(albumsAbstraction);

}