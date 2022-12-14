const userService = jest.mock('./user.service');

let mockData;

userService.findById = jest.fn(id => {

    return Promise.resolve(mockData.find(item => item.id === id));

});

userService.__setMockData = data => {
    mockData = data;
}

module.exports = userService;
