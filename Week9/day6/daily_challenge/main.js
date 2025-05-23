
class Video{
    constructor(title, uploader, time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }

    watch() {
        console.log(`${this.uploader} watched all ${this.time} of ${this.title}`);
        
    }
}

let vid1 = new Video('Harry Potter', 'Asher', 14555);

let vid2 = new Video('Something crazy', 'Ash', 1345);

vid1.watch();
vid2.watch();

let arr = [
    {title:'Fails', uploader: 'Rara', time: 150 },
    {title:'Fails even better', uploader: 'RaraTheBest', time: 170 },
    {title:'The voice', uploader: 'musicRox', time: 250 },
    {title:'Fails best of January', uploader: 'Rara', time: 100 },
    {title:'Mr. Beast', uploader: 'Mr Beast', time: 189 }
]

let items = [];
arr.forEach(item => {
    item = new Video(item.title, item.uploader, item.time);
    items.push(item);
});

items.forEach(item => item.watch());