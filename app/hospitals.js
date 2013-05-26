/**
 * @api {get} /hospitals Get all Hospitals
 * @apiName GetHospitals
 * @apiGroup Hospital
 * @apiPermission public
 * @apiVersion 1.0.0
 *
 * @apiDescription Returns all hospitals.
 *
 * @apiSuccess {Integer}      id                  Hospital ID
 * @apiSuccess {String}       name                Hospital name
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     { "hospitals": [{
 *         "id": 1,
 *         "name": "AKH Wien"
 *       },
 *       {
 *         "id": 2,
 *         "name": "Donauspital Krems"
 *       }]
 *     }
 */

 /**
 * @api {get} /hospital/:id Get a specific Hospital
 * @apiName GetHospital
 * @apiGroup Hospital
 * @apiPermission public
 * @apiVersion 1.0.0
 *
 * @apiDescription Returns data for a specific hosptial.
 *
 * @apiParam    {Integer}     id                  Hospital ID
 *
 * @apiSuccess  {Integer}     id                  Hospital ID
 * @apiSuccess  {String}      name                Hospital name
 * @apiSuccess  {Array}       time_slot_ids       Array of TimeSlots in the future, associated with this hospital
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     { "hospital": {
 *         "id": 1,
 *         "name": "AKH Wien",
 *         "time_slot_ids": [1, 2, 3]
 *       }
 *     }
 *
 * @apiError RecordNotFound   The <code>id</code> of the Hospital was not found.
 *
 * @apiErrorExample Error Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "RecordNotFound"
 *     }
 */