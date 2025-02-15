export class VideoModel {
    videoId:number;
    videoUrl: string;
    videoTitle:string;
    videoDescription:string;
    category:string;
    rating:string;
    thumbnailUrl:string;



    constructor(){
        this.videoId=0;
        this.videoUrl='',
        this.videoTitle='',
        this.videoDescription='',
        this.category='',
        this.rating='',
        this.thumbnailUrl=''


    }
}