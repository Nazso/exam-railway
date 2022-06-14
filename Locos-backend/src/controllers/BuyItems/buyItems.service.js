const BuyItem = require('../../model/buyItems.model');

exports.create = (buyItemData) => {
    const buyItem = new BuyItem(buyItemData);
    return buyItem.save();
}

exports.findAll = () => BuyItem.find();

exports.findOne = (id) => BuyItem.findById(id);

exports.deleteOne = (id) => BuyItem.findByIdAndDelete(id);