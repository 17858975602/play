/**
 * Created by Administrator on 2017/4/12.
 */
(function(Fly){

    var Pipe= function (config) {
        this.ctx=config.ctx;
        this.img=config.img;
        this.img1=config.img1;
        this.pipe_x=config.x||0;
        this.pipe_top_y=config.y||0;
        this.pipe_bottom_y=config.y||0;

        this.imgH=this.img.height;
        this.imgX=this.img.width;
        //设置速度
        this.speed=-0.15;
        //设置管道的高度
        this.pipeHeight=0;
        //设置中间空的部分为150
        this.space=150;
        this.init();
    };
    Pipe.prototype.init= function () {
       pipeHeight=Math.random()*200+50;
        this.pipe_top_y=pipeHeight-this.imgH;
        this.pipe_bottom_y=pipeHeight+this.space;
    };

    Pipe.prototype.render= function (time) {
        var ctx=this.ctx;

        //路程
        this.pipe_x+=this.speed*time;
        // 绘画管道
        ctx.drawImage(this.img,this.pipe_x,this.pipe_top_y);
        ctx.drawImage(this.img1,this.pipe_x,this.pipe_bottom_y);

        //绘制碰撞的路径
        ctx.rect(this.pipe_x,this.pipe_top_y,this.imgX,this.imgH);
        ctx.rect(this.pipe_x,this.pipe_bottom_y,this.imgX,this.imgH);


        //当小于这张图片的宽度
        if(this.pipe_x<-this.imgX){
            this.pipe_x+=this.imgX*3*6;

            this.init();
        }

    };
    Fly.Pipe=Pipe;

})(Fly);