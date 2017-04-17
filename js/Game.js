/**
 * Created by Administrator on 2017/4/12.
 */
(function () {
    
    var Game= function (id) {
        this.ctx=Fly.createCv(id);
        this.roleRender = [];

        this.time = 0;
       //        上一帧的时间
        this.last = new Date();
        this.cur=0;

        this.imgSrc = ['birds', 'land', 'sky', 'pipe1', 'pipe2'];

        this.isStart = true;
        this.hero=null;
    };
    Game.prototype={
        construcor:Game,
        startGame: function () {
            var that=this;
            Fly.loadImages(that.imgSrc, function (imgList) {
                //初始化
                that.init(imgList);
                //渲染
                that.draw(imgList);
                //绑定
                that.bind();
            });

        },
        //游戏结束
        endGame: function () {
            this.isStart = false;
        },

        //初始化
        init: function (imgList) {
            var ctx=this.ctx;
            for (var i = 0; i < 2; i++) {
                var sky = new Fly.Sky({
                    img: imgList.sky,
                    ctx: ctx,
                    x: i * imgList.sky.width
                });
               this.roleRender.push(sky);

            }

//            创建管道
            for (var i = 0; i < 6; i++) {
                var pipe = new Fly.Pipe({
                    img: imgList.pipe2,
                    img1: imgList.pipe1,
                    ctx: ctx,
                    x: i *imgList.pipe2.width * 3 + 300,

                });
                this.roleRender.push(pipe);

            }
            ;
            //            绘制陆地
            for (var i = 0; i < 4; i++) {
                var land = new Fly.Land({
                    img: imgList.land,
                    ctx: ctx,
                    x: i *imgList.land.width,
                    y: ctx.canvas.height - imgList.land.height,
                });
                this.roleRender.push(land);

            }
//             创建小鸟对象
            this.hero = new Fly.Bird({
                img: imgList.birds,
                ctx: ctx
            });

        },
       //渲染页面
        draw: function (imgList) {
            var that=this;

            (function rander() {
//            上一帧和下一帧的时间
                that.cur = new Date();
                that.time = that.cur - that.last;
                that.last = that.cur;
                that.ctx.clearRect(0, 0, that.ctx.canvas.width, that.ctx.canvas.height);

                that.ctx.beginPath();

                that.roleRender.forEach(function (role) {
                    role.render( that.time)
                });

//              渲染小鸟

                that.hero.render(that.time);
//           碰撞
                if (that.hero.y-8 <= 0 || (that.hero.y >= that.ctx.canvas.height - imgList.land.height) || that.ctx.isPointInPath(that.hero.x, that.hero.y)) {
                    that.endGame();
                }
                if (that.isStart) {
                    window.requestAnimationFrame(rander);
                }

            })();
        },
        //事件绑定
        bind: function () {
            var that=this;
            document.body.addEventListener('click', function () {
                that.hero.changeSpeed(-0.3);
            });
        }
    }
    
    Fly.Game=Game;
    
})(Fly);