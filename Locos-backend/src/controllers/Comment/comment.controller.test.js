const { mockResponse, mockRequest } = require('jest-mock-req-res');
const createError = require('http-errors');

const commentController = require('./comment.controller');
const commentService = require('./comment.service');

jest.mock('./comment.service');

describe('Comment controller test', () => {
    const mockData = [
        {
            "_id": "62b5ea08e7c05b42a74fd735",
            "username": "Nazso",
            "date":"2022-06-01",
            "engine":"Villamos",
            "type":"V63",
            "usercomment":"RTQ 4H WT" 
        },
        {
            "_id": "62b4971c383377d0c8d43df5",
            "username": "Nazso",
            "date":"2022-06-01",
            "engine":"Villamos",
            "type":"V63",
            "usercomment":"RTQ 4H WT" 
        },
        {
            "_id": "62b49846383377d0c8d43e04",
            "username": "Nazso",
            "date":"2022-06-01",
            "engine":"Villamos",
            "type":"V63",
            "usercomment":"RTQ 4H WT" 
        }];

    let response;
    let nextFunction;

    beforeEach(() => {
        commentService.__setMockData(mockData);

        response = mockResponse();
        nextFunction = jest.fn();
    });

    test('findOne() with valid id', () => {
        const COMMENT_ID = "62b5ea08e7c05b42a74fd735";

        const request = mockRequest({
            params: {
                id: COMMENT_ID
            }
        })

        return commentController.findOne(request, response, nextFunction)
            .then(() => {
                expect(commentService.findOne).toBeCalledWith(COMMENT_ID)
                // expect(response.json).toBeCalledWith(mockData.find(c => c.id === COMMENT_ID));
            })

    })

    test('findOne() with invalid id', () => {
        const INVALID_COMMENT_ID = 8;

        const request = mockRequest({
            params: {
                id: INVALID_COMMENT_ID 
            }
        });

        
        return commentController.findOne(request, response, nextFunction)
            .then(() => {
                expect(commentService.findOne).toBeCalledWith(INVALID_COMMENT_ID)
                expect(nextFunction).toBeCalledWith(new createError.NotFound(`Comment with ${INVALID_COMMENT_ID} id not found!`))
            })

    })


})

