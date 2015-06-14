import data from './lib/colors.json';

var colors = {

  data: data.more,

  *colorGen() {
    var colors = this.data.split(',');
    for(let color of colors) {
      yield color;
    }
  }
  
};

export default colors;