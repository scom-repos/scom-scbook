import {customElements, Control, Module} from '@ijstech/components';

@customElements('i-pagination-module')
export class PaginationModule extends Module{      
    constructor(parent?: Control, options?: any) {        
        super(parent, options);        
    }
    next(){
      // console.log(1);
    }
    previous(){
      // console.log(2);
    }
    selectIndex(){
      // console.log(3);
    }
    render(){
      return <i-pagination id="pagination1" onNext={this.next} onPrevious={this.previous} onSelectIndex={this.selectIndex} currentPage={2} totalPage={10} top={100} width={1000} height={600}></i-pagination>
    }
}
