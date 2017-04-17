/**
 * Created by Administrator on 2017/4/12.
 */
(function (Fly) {
    var Land= function (config) {
        this.ctx=config.ctx;
        this.img = config.img;
        this.imgW=this.img.width;
        this.imgH=this.img.height;
        this.land_x=config.x||0;
        this.land_y=config.y||0;
        this.speed=-0.15;
    };
    Land.prototype.render= function (time) {
        var ctx=this.ctx;
        ctx.drawImage(this.img,this.land_x,this.land_y);

        this.land_x+=this.speed*time;
        if(this.land_x<-this.imgW){
            this.land_x+= this.imgW*4;
        }
    };

    Fly.Land=Land;
})(Fly);