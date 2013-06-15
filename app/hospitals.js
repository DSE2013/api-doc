/**
 * @api {get} /hospitals Get all Hospitals
 * @apiName GetHospitals
 * @apiGroup Hospital
 * @apiPermission public
 * @apiVersion 1.0.0
 *
 * @apiDescription Returns all hospitals.
 *
 * @apiSuccess {String}       id                  Hospital ID
 * @apiSuccess {String}       name                Hospital name
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     { "hospitals": [{
 *         "id": "1",
 *         "name": "AKH Wien"
 *       },
 *       {
 *         "id": "2",
 *         "name": "Barmherzige Brüder"
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
 * @apiParam    {String}      id                  Hospital ID
 *
 * @apiSuccess  {String}      id                  Hospital ID
 * @apiSuccess  {String}      name                Hospital name
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     { "hospital": {
 *         "id": "1",
 *         "name": "AKH Wien"
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