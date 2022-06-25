const commentService = jest.mock('./comment.service');

let mockData;

commentService.findOne = jest.fn(id => {

    return Promise.resolve(mockData.find(c => c.id === id));

});

commentService.__setMockData = data => {
    mockData = data;
}

module.exports = commentService;
