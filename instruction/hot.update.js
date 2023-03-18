const livereload = require('livereload');
const chokidar = require('chokidar');

class LiveReload {
    constructor({ watchPath, change }) {
        try {
            this.watchPath = watchPath;
            console.log(change, 'change');
            this.change = change;
            this.watcher = null;
            // server 可以用来给服务端发送消息 这里不处理
            const server = livereload.createServer();
            this.openWatcher(this.watchPath);
            this.on();
            server.watch(this.watchPath);
            console.log('Hot update successfully opened');
        } catch (error) {
            console.log('Hot update failed to open');
        }
    }
    openWatcher(watchPath) {
        this.watcher = chokidar.watch(watchPath, {
            ignoreInitial: true, // 忽略首次监视
        });
    }
    on() {
        this.watcher.on('change', (path) => {
            this.change && this.debounce(this.change(path), 1000);
            // 发送 'reload' 消息到客户端 server.refresh(path); 这里不处理
        });
    }
    /*
    * fn [function] 需要防抖的函数
    * delay [number] 毫秒，防抖期限值
    */
    debounce(fn, delay) {
        let timer = null //借助闭包
        return function () {
            if (timer) {
                clearTimeout(timer)
                timer = setTimeout(fn, delay);
            } else {
                timer = setTimeout(fn, delay);
            }
        }
    }
}

module.exports = LiveReload;