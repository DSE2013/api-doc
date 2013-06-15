/**
 * @api {get} /operation_types Get all operation types
 * @apiName GetOperationTypes
 * @apiGroup Operation Type
 * @apiPermission public
 * @apiVersion 1.0.0
 *
 * @apiDescription Returns all operation types.
 *
 * @apiSuccess {String}       id                  Operation type ID
 * @apiSuccess {String}       name                Operation type name
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     { "hospitals": [{
 *         "id": "1",
 *         "name": "Neurochirurgie"
 *       },
 *       {
 *         "id": "2",
 *         "name": "HNO"
 *       }]
 *     }
 */

 /**
 * @api {get} /operation_type/:id Get a specific operation type
 * @apiName GetOperationType
 * @apiGroup Operation Type
 * @apiPermission public
 * @apiVersion 1.0.0
 *
 * @apiDescription Returns data for a specific hosptial.
 *
 * @apiParam    {String}      id                  Operation type ID
 *
 * @apiSuccess  {String}      id                  Operation type ID
 * @apiSuccess  {String}      name                Operation type name
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     { "hospital": {
 *         "id": "1",
 *         "name": "Neurochirurgie"
 *       }
 *     }
 *
 * @apiError RecordNotFound   The <code>id</code> of the operation type was not found.
 *
 * @apiErrorExample Error Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "RecordNotFound"
 *     }
 */