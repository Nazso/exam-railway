const buyItemService = jest.mock('./buyItems.service');

let mockData;

buyItemService.findOne = jest.fn(id => {

    return Promise.resolve(mockData.find(item => item.id === id));

});

buyItemService.__setMockData = data => {
    mockData = data;
}

module.exports = buyItemService;
