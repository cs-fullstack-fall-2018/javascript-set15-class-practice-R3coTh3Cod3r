class TwitterUser {
    constructor(userName, followingNumber, followersNumber, pictureURL) {
        this.userName = userName;
        this.followingNumber = followingNumber;
        this.followersNumber = followersNumber;
        this.pictureURL = pictureURL;
    }

    printAttributes() {
        alert(this.userName + "following" + this.followingNumber+"people" + this.followersNumber + "mil followers" + this.pictureURL);
        return this
    }
}

function main() {
    var twitAccount = new TwitterUser("Larryth3Lobster", 15 , 20, "pictureofLobster");
    alert(twitAccount.printAttributes());
}

main();