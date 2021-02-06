class Goods extends Component{
    constructor(goodsId){
        super(goodsId);
        this.goodsItem = this.goodsList.find(".list__item:not(.disabled)");
        this.selectedGoodsItem = this.goodsList.find(".list__item.selected");
        console.log(this.selectedGoodsItem);
        this.buyBtn = this.goodsList.find(".item__text-description_buy");

        this.createEvents();
        ;
    }

    goodsSelect(event){
        event.preventDefault();
        let currentBag = $(event.currentTarget);
        currentBag.toggleClass("selected");

        if(currentBag.hasClass("selected")) {
            currentBag.mouseenter(this.selectHover.bind(this));
            currentBag.mouseleave(this.cancelSelectHover.bind(this));
            currentBag.focus(this.selectHover.bind(this));
            currentBag.blur(this.cancelSelectHover.bind(this));
            this.textSelected = currentBag.find(".item__text-description_selected").css("display", "block");
            this.textDefault = currentBag.find(".item__text-description_default").css("display", "none");
            if (currentBag.hasClass("disabled")) {
            this.textSelected = currentBag.find(".item__text-description_selected").css("display", "none");
            this.textDefault = currentBag.find(".item__text-description_default").css("display", "none");
        }
        }

        else {
            currentBag.unbind('mouseenter mouseleave');
            this.productDefault(currentBag);
             this.textSelected = currentBag.find(".item__text-description_selected").css("display", "none");
            this.textDefault=currentBag.find(".item__text-description_default").css("display", "block");
        };
    }
    selectHover(event){
        let currentBag = $(event.currentTarget);
        currentBag.find(".bag__text_selected").css("display", "block");
        currentBag.find(".bag__text_default").css("display", "none");
    }
    cancelSelectHover(event){
        let currentBag = $(event.currentTarget);
        this.productDefault(currentBag);
    }
    productDefault(currentBag) {
        this.textDefault = currentBag.find(".bag__text_selected").css("display", "none");
        this.textSelected = currentBag.find(".bag__text_default").css("display", "block");
    }

    createEvents() {
        this.goodsItem.click(this.goodsSelect.bind(this));
        this.buyBtn.click(this.goodsSelect.bind(this));
        this.selectedGoodsItem.mouseenter(this.selectHover.bind(this));
        this.selectedGoodsItem.mouseleave(this.cancelSelectHover.bind(this));
        this.selectedGoodsItem.focus(this.selectHover.bind(this));
        this.selectedGoodsItem.blur(this.cancelSelectHover.bind(this));
    }
}
let goods = new Goods ("#goods");