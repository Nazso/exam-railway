const electricService = jest.mock('./electric.service');

// const mockData = [
//     {
//         "id": 1,
//         "type": "V63",
//         "name": "Gigant",
//         },
//         {
//         "id": 2,
//         "type": "V43",
//         "name": "Szili",
//         }
// ];

electricService.findOne = jest.fn(id => {

    return Promise.resolve(mockData.find(loco => loco.id === id));

});

module.exports = electricService;
