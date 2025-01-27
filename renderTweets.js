
function renderTweets(tweets) {

    function buildTweets (tweetInfo) {
        return `<div class="container">
                    <div class="top">
                        <div class="profile-pic"><img src=${tweetInfo.user.profilePic}></div>
                        <div class="username">${tweetInfo.user.username}</div>
                        <div class="handle">${tweetInfo.user.handle}</div>
                    </div>
                    <div class="tweet">${tweetInfo.text}</div>
                    <hr>
                    <div class="menu">
                        <div class="comment">${tweetInfo.replies}</div>
                        <div class="retweet">${tweetInfo.retweets}</div>
                        <div class="favorite">${tweetInfo.likes}</div>
                        <div class="email"></div>
                    </div>
                 </div>`
    }

    let displayTweets = tweets.map(buildTweets).join('')

    return `
        <div class="text-center mt-5">
            ${displayTweets}
        </div>
    `
}

function tweets() {
    var content = document.getElementById('content');

    var tweetsAbstraction = [
        {
            user: {
                handle: "@officialjaden",
                username: "Jaden Smith",
                isVerified: true,
                profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
            },
            text: "The Moment That Truth Is Organized It Becomes A Lie",
            likes: 231,
            retweets: 12,
            replies: 21
        },
        {
            user: {
                handle: "@officialjaden",
                username: "Jaden Smith",
                isVerified: true,
                profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
            },
            text: "How Can Mirrors Be Real If Our Eyes Aren't Real",
            likes: 112,
            retweets: 2,
            replies: 24
        },
        {
            user: {
                handle: "@DigitalCrafts",
                username: "DigitalCrafts Bootcamp",
                isVerified: false,
                profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
            },
            text: "Sign up for our next course plz!",
            likes: 11,
            retweets: 3,
            replies: 14
        }
    ]

    content.innerHTML = renderTweets(tweetsAbstraction);

}