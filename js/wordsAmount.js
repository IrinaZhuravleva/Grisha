class wordsAmountChoice {

    constructor(base) {
      this.base = base;
    }

    chooseArray50() {
        data = base.slice(0, 50);
        localStorage.setItem('data', JSON.stringify(data));
        location.reload();
    }
    chooseArray100() {
        window.localStorage.removeItem('data');
        data = base.slice(0, 100);
        localStorage.setItem('data', JSON.stringify(data));
        location.reload(); 
    }
    chooseArrayAfter100() {
        window.localStorage.removeItem('data');
        data = base.slice(100, length);
        localStorage.setItem('data', JSON.stringify(data));
        location.reload();
    }
    chooseArrayLast() {
        window.localStorage.removeItem('data');
        let beginningLastFifty = length - 50;
        data = base.slice(beginningLastFifty, length);
        localStorage.setItem('data', JSON.stringify(data));
        location.reload();
    }

    chooseArrayHun() {
        window.localStorage.removeItem('data');
        let length = base.length;
        data = base.slice(100, length);
        localStorage.setItem('data', JSON.stringify(data));
        location.reload();
    } 
  }