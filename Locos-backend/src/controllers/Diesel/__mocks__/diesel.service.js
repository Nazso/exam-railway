const dieselService = jest.mock('./diesel.service');

let mockData;

dieselService.findOne = jest.fn(id => {

    return Promise.resolve(mockData.find(loco => loco.id === id));

});

dieselService.__setMockData = data => {
    mockData = data;
}

module.exports = dieselService;
